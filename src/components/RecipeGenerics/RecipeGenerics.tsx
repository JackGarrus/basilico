//import InlineIcons from 'components/Atoms/Icons/InlineIcons';
import style from 'components/Recipe/recipe.module.scss';

interface Props {
  generics: object;
  time: string;
}

const RecipeGenerics: React.FC<Props> = ({ generics, time }) => {
  let genericsArr = [];

  for (const [key, value] of Object.entries(generics)) {
    value && genericsArr.push(key);
  }

  return (
    <div className={style.icons_container}>
      <div className={style.icon_wrapper}>
        {/*<InlineIcons name="time" size={30} />*/}
        <p>{time}</p>
      </div>
      {genericsArr.map((
        e,
        i, 
      ) => (
        <div key={i} className={style.icon_wrapper}>
          {/*<InlineIcons name={e} size={30} />*/}
          <p>{e}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeGenerics;
