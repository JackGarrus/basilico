import Headline from 'components/Headline/Headline';
import { getFormattedText } from 'utils/dataDisplayMethods';
import style from './RecipeHeader.module.scss';

interface Props {
  list?: string[];
  title: string;
}

const RecipeHeader: React.FC<Props> = ({ list, title }) => {
  return (
    <div className={style.container}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className={style.headline}>
          <Headline text={getFormattedText(title)} size="lg" />
        </div>
        {list && (
          <div className={style.list}>
            {/*list.map((e: string, i: number) => (
              <InlineIcons key={i} name={e} size={25} />
            ))*/}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeHeader;
