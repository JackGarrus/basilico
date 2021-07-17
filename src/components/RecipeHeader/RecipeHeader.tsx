import Headline from 'components/Headline/Headline';
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
          <Headline text={getFormattedText(title)} size="lg" />
        </div>
        {list.length > 0 &&
          list.map((allergene: Allergens, i: number) => (
            <div className={style.list}>{parseAllergens(allergene)}</div>
          ))}
      </div>
    </div>
  );
};

export default RecipeHeader;
