import Recipe from 'components/Recipe/Recipe';
import { useTrail, animated } from 'react-spring';
import { useParams } from 'react-router-dom';
import { useGetMonthlyVegs, useGetRecipes } from 'queries/veggies';
import { useEffect, useState } from 'react';
import { RecipesPerIngredient, Recipe as SingleRecipe, Fruits, Vegetables, MonthProp, VegType, Months } from 'types/types';
import { isFruit } from 'utils/vegUtils';
import { parse } from 'qs'

import style from './RecipesList.module.scss';
import Panel from 'components/Panel/Panel';

const RecipesList: React.FC = () => {
  const { ingredient, allergenes } = useParams<{ ingredient?: any, allergenes?: any }>();
  const { data: recipesList, isLoading } = useGetRecipes()
  const { data: monthlyVegs, isLoading: isMonthlyVegsLoading } = useGetMonthlyVegs();
  const [recipeList, setRecipeList] = useState<SingleRecipe[] | []>([]);
  const [parsedAllergens, setParsedAllergens] = useState<string[]>()

  const ingredientRecipe = recipesList?.find(
    (obj: RecipesPerIngredient) =>
      obj.ingredientName === ingredient
  );

  const findVegMonths = (veg: VegType): Months[] => {
    return monthlyVegs.data?.reduce((acc: string[], monthlyVegs: MonthProp): string[] => {
      if (isFruit(veg) && monthlyVegs.fruits.includes(veg as Fruits)) {
        acc.push(monthlyVegs.month)
      } else if (!isFruit(veg) && monthlyVegs.vegetables.includes(veg as Vegetables)
      ) {
        acc.push(monthlyVegs.month)
      }
      return acc;
    }, [])
  }

  useEffect(() => {
    if (ingredientRecipe) {
      setRecipeList(ingredientRecipe.recipes);
    }

    if (allergenes) {

      const s = parse(allergenes, { comma: true, parseArrays: false }).allergenes
      setParsedAllergens(s as string[])
    }
  }, [recipesList, monthlyVegs])

  const trail = useTrail(recipeList?.length, {
    from: {
      width: '100%',
      marginLeft: -50,
      marginBottom: 0,
      opacity: 0,
      transform: 'translate3d(0,-40px,0)',
    },
    to: {
      width: '100%',
      marginLeft: 0,
      marginBottom: 20,
      opacity: 1,
      transform: 'translate3d(0,0px,0)',
    },
  });

  return (
    <div className={style.container}>
      <div className={style.innerContainer}>
        {ingredient && !isMonthlyVegsLoading &&
          <>
            <p className={style.pageTitle}>
              <span className={style.selectedIngredient}>{ingredient}</span>
            </p>
            <Panel>
              Available in: <span className={style.months}>{findVegMonths(ingredient as VegType).join(', ')}</span>
            </Panel>
          </>
        }

        <p className={style.sectionTitle}>
          Recipes {allergenes && `${parsedAllergens?.join(', ')}`}
        </p>
        <div className={style.card}>
          {!isLoading &&
            trail.map((props: any, i: number) => {
              const singleRecipe: SingleRecipe = recipeList[i];
              return (
                < animated.div style={props} key={i} >
                  <Recipe
                    id={i}
                    key={i}
                    image={singleRecipe.image}
                    name={singleRecipe.name}
                    link={singleRecipe.link}
                    allergens={singleRecipe.allergens}
                    ingredients={singleRecipe.ingredients}
                    instructions={singleRecipe.instructions}
                    difficulty={singleRecipe.difficulty}
                    time={singleRecipe.time}
                    isVegan={singleRecipe.isVegan}
                    isVegetarian={singleRecipe.isVegetarian}
                    isSweet={singleRecipe.isSweet}
                    hasFish={singleRecipe.hasFish}
                    hasMeat={singleRecipe.hasMeat}
                  />
                </animated.div>
              );
            })}
        </div>
      </div>
    </div >
  );
};
export default RecipesList;
