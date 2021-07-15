import style from './Recipes.module.scss';
import { RECIPES } from 'data/recipes/recipes';
import Recipe from 'components/Recipe/Recipe';
//import { useTrail, animated } from 'react-spring';

interface RouterProps {
  match: any;
}

type Props = RouterProps;

const Recipes: React.FC<RouterProps> = ({ match }: Props) => {
  const selectedIngredient = match.params.ingredient;
  const recipesData = RECIPES;
  let ingredientRecipe = recipesData.find(
    obj => obj.ingredientName === selectedIngredient,
  );
  // let readyToLoad = false;
  let recipe: any;

  if (ingredientRecipe) {
    // readyToLoad = true;
    recipe = ingredientRecipe.recipes;
  }
  /*const trail = useTrail(recipe.length, {
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

  function renderRecipes() {
    if (readyToLoad) {
      return trail.map((props: any, i: number) => {
        const e = recipe[i];
        return (
          <animated.div style={props}>
            <Recipe
              key={i}
              image={e.image}
              alt={e.name}
              title={e.name}
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
      });
    }
  }*/

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <p className={style.page_title}>
          <span className={style.selected_ingredient}>
            {selectedIngredient}
          </span>
          recipes
        </p>
        <br />
        <br />
        <div className={style.card_wrapper}>{
          recipe.map((e: any, i: number) => <Recipe
            id={e.id}
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
          />)
        }</div>
      </div>
    </div>
  );
};
export default Recipes;
