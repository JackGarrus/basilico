import style from './RecipeIngredientsSection.module.scss';
import Subtitle from 'components/Subtitle/Subtitle';
import RecipeIngredient from 'components/RecipeIngredient/RecipeIngredient';
import { Ingredient } from 'types/recipe';

interface Props {
  ingredients: Ingredient[];
}

const RecipeIngredientsSection: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Subtitle words="Ingredients" />
      <div className={style.list}>
        {props.ingredients.map((ingredient: any, i: number) => (
          <RecipeIngredient
            name={ingredient.name}
            quantity={ingredient.quantity}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeIngredientsSection;
