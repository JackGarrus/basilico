import Recipe from 'components/Recipe/Recipe';
import { useTrail, animated } from 'react-spring';
import { useParams } from 'react-router-dom';
import { useGetMonthlyVegs, useGetRecipes } from 'queries/veggies';
import { useEffect, useState } from 'react';
import { RecipesPerIngredient, Recipe as SingleRecipe, Fruits, Vegetables, MonthProp } from 'types/types';
import { getAllFruits } from 'utils/vegUtils';

import style from './RecipesList.module.scss';

const RecipesList: React.FC = () => {
  const { ingredient } = useParams<{ ingredient?: string }>();
  const { data, isLoading } = useGetRecipes()
  const { data: monthlyVegs, isLoading: isMonthlyVegsLoading } = useGetMonthlyVegs();
  const [recipeList, setRecipeList] = useState<SingleRecipe[] | []>([]);

  // possiamo migliorare il code di sta roba?
  const ingredientRecipe = data?.find(
    (obj: RecipesPerIngredient) =>
      obj.ingredientName === ingredient
  );

  /*const findVegMonths = (veg: Fruits[] | Vegetables[]): string[] => {
    const isFruit = getAllFruits().includes(veg) ?? false;

    return monthlyVegs?.reduce((acc: string[], monthlyVegs: MonthProp): string[] => {
      if (isFruit && monthlyVegs.fruits.includes(veg)) {
        acc.push(monthlyVegs.month)
      } else if (!isFruit && monthlyVegs.vegetables.includes(veg)
      ) {
        acc.push(monthlyVegs.month)
      }
      return acc;
    }, [])
  }*/

  const findVegMonths = (veg: string): string[] => {
    const isFruit = getAllFruits().includes(veg) ?? false;

    return monthlyVegs?.reduce((acc: string[], monthlyVegs: any): string[] => {
      if (isFruit && monthlyVegs.fruits.includes(veg)) {
        acc.push(monthlyVegs.month)
      } else if (!isFruit && monthlyVegs.vegetables.includes(veg)
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
  }, [data, monthlyVegs])

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
        <p className={style.pageTitle}>
          <span className={style.selectedIngredient}>{ingredient}</span>
          recipes
        </p>
        {!isMonthlyVegsLoading && <p>
          Available in {findVegMonths(ingredientRecipe.ingredientName).map((month: string) => month)}
        </p>}
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
