import style from './RecipeIngredientsList.module.scss';
import Subtitle from 'components/Subtitle/Subtitle';
import RecipeIngredient from 'components/RecipeIngredient/RecipeIngredient';
import { Ingredient } from 'types/types';

interface Props {
  ingredients: Ingredient[];
}

const RecipeIngredientsList: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Subtitle text="Ingredients" />
      <div className={style.list}>
        {props.ingredients.map((ingredient: Ingredient, i: number) => (
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

export default RecipeIngredientsList;
