import { Allergens, AllergensList } from 'types/recipe';
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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={style.headline}>
          <p className={style.title}>
            {getFormattedText(title)}
          </p>
        </div>
        {list.length > 0 &&
          list.map((allergene: Allergens, i: number) => (
            <div className={style.list} key={i}>{parseAllergens(allergene)}</div>
          ))}
      </div>
    </div>
  );
};

export default RecipeHeader;
