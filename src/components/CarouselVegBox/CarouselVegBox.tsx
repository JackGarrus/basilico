import { parseVeggiesIcons } from 'utils/parseIcons';
import React from 'react';
import { Fruits } from 'types/fruits';
import { Vegetables } from 'types/vegetables';
import { NavLink } from 'react-router-dom';
import style from './CarouselVegBox.module.scss';

interface Props {
  item: Fruits | Vegetables;
}

const CarouselVegBox: React.FC<Props> = ({ item }) => {

  return (
    <NavLink to={'/recipes/' + item} className={style.link}>
      <div className={style.item}>
        {parseVeggiesIcons(item, style.icon)}
        <p>{item}</p>
      </div>
    </NavLink>
  )
};

export default React.memo(CarouselVegBox);
