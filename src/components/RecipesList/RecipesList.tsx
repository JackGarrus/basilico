import Recipe from 'components/Recipe/Recipe';
import { useTrail, animated } from 'react-spring';
import { useParams } from 'react-router-dom';
import { useGetRecipes } from 'queries/veggies';
import { useEffect, useState } from 'react';
import { RecipesPerIngredient, Recipe as SingleRecipe } from 'types/recipe';

import style from './RecipesList.module.scss';

const RecipesList: React.FC = () => {
  const { ingredient } = useParams<{ ingredient?: string }>();
  const { data, isLoading } = useGetRecipes()
  const [recipeList, setRecipeList] = useState<SingleRecipe[] | []>([]);

  let ingredientRecipe = data?.find(
    (obj: RecipesPerIngredient) =>
      obj.ingredientName === ingredient
  );

  useEffect(() => {
    if (ingredientRecipe) {
      setRecipeList(ingredientRecipe.recipes);
    }
  }, [data])

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
