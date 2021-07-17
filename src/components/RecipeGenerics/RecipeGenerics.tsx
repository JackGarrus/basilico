import { parseGenerics } from 'utils/parseIcons'
import React from 'react';
import { ReactComponent as Timer } from 'icons/recipe-type/timer.svg'
import style from './RecipeGenerics.module.scss';
interface Props {
  generics: object;
  time: string;
}

const RecipeGenerics: React.FC<Props> = ({ generics, time }) => {
  let genericsArr = [];

  for (const [key, value] of Object.entries(generics)) {
    value && genericsArr.push(key);
  }
  console.log(genericsArr)

  return (
    <div className={style.iconsContainer}>
      <div className={style.iconWrapper}>

        <Timer className={style.icon} />
        <p>{time}</p>
      </div>
      {genericsArr.map((
        e,
        i,
      ) => (
        <div key={i} className={style.icon_wrapper}>
          {parseGenerics(e)}
          <p>{e}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(RecipeGenerics);

