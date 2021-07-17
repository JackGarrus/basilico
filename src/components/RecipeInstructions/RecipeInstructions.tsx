import Subtitle from 'components/Subtitle/Subtitle';
import ReferenceLink from 'components/ReferenceLink/ReferenceLink';
import style from './RecipeInstructions.module.scss';

interface Props {
  instructions: string[];
  link: string;
}

const RecipeInstructions: React.FC<Props> = ({ instructions, link }) => (
  <>
    <Subtitle words="Instructions" />
    {instructions.map((instruction, i) => <span className={style.list}>{instruction}</span>)}
    <ReferenceLink link={link} />
  </>
)

export default RecipeInstructions;
