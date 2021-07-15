import { getFormattedText } from 'utils/dataDisplayMethods';
import style from './RecipeIngredient.module.scss';
import { ReactComponent as Daisy } from 'icons/misc/daisy.svg';

interface Props {
  name: string;
  quantity: string;
}

const RecipeIngredient: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={style.container}>
      <Daisy className={style.dot} />
      <p className={style.name}>{getFormattedText(props.name)}:</p>
      <span>{props.quantity}</span>
    </div>
  );
};

export default RecipeIngredient;
