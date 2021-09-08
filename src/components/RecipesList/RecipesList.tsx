import { RECIPES } from 'data/recipes';
import Recipe from 'components/Recipe/Recipe';
import { useTrail, animated } from 'react-spring';
import style from './RecipesList.module.scss';
import { useParams } from 'react-router-dom';
interface RouterProps {
  match: any;
}

type Props = RouterProps;

const RecipesList: React.FC<RouterProps> = () => {
  const { ingredient } = useParams<{ ingredient?: string }>();

  const recipesData = RECIPES;
  let ingredientRecipe = recipesData.find(
    obj => obj.ingredientName === ingredient,
  );
  let readyToLoad = false;
  let recipe: any;

  if (ingredientRecipe) {
    readyToLoad = true;
    recipe = ingredientRecipe.recipes;
  }
  const trail = useTrail(recipe.length, {
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
          {readyToLoad &&
            trail.map((props: any, i: number) => {
              const e = recipe[i];
              return (
                <animated.div style={props} key={i}>
                  <Recipe
                    id={i}
                    key={i}
                    image={e.image}
                    name={e.name}
                    link={e.link}
                    allergens={e.allergens}
                    ingredients={e.ingredients}
                    instructions={e.instructions}
                    difficulty={e.difficulty}
                    time={e.time}
                    isVegan={e.isVegan}
                    isVegetarian={e.isVegetarian}
                    isSweet={e.isSweet}
                    hasFish={e.hasFish}
                    hasMeat={e.hasMeat}
                  />
                </animated.div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default RecipesList;
