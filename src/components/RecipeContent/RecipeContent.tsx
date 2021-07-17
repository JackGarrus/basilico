import RecipeIngredientsSection from 'components/RecipeIngredientsList/RecipeIngredientsList';
import ReferenceLink from 'components/ReferenceLink/ReferenceLink';
import { Ingredient } from 'types/recipe'
import Subtitle from 'components/Subtitle/Subtitle';

import style from './RecipeContent.module.scss';

interface Props {
  ingredientsList: Ingredient[];
  instructionsList: string[];
  link: string;
}

const RecipeContent: React.FC<Props> = ({ ingredientsList, instructionsList, link }) => {
  return (
    <>
      <div className={style.ingredientsContainer}>
        <RecipeIngredientsSection ingredients={ingredientsList} />
      </div>
      <div className={style.instructionsContainer}>
        <Subtitle words="Instructions" />
        {instructionsList.map((instruction, i) => <span className={style.list}>{instruction}</span>)}
        <ReferenceLink link={link} />
      </div>
    </>
  );
};

export default RecipeContent;