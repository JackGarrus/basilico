import { Allergens, AllergensList } from 'types/types';
import { getFormattedText } from 'utils/dataDisplayMethods';
import { parseAllergens } from 'utils/parseIcons';
import style from './RecipeHeader.module.scss';

interface Props {
  list: AllergensList;
  title: string;
}

const RecipeHeader: React.FC<Props> = ({ list, title }) => {

  return (
    <div className={style.container}>
      <p className={style.headline}>{getFormattedText(title)}</p>
      {list.length > 0 &&
        list.map((allergene: Allergens, i: number) => (
          <div className={style.list} key={i}>
            {parseAllergens(allergene)}
          </div>
        ))}
    </div>
  );
};

export default RecipeHeader;
