import style from './CarouselItem.module.scss';
import { parseVeggiesIcons } from 'utils/parseIcons';
import React from 'react';
import { Fruits } from 'types/fruits';
import { Vegetables } from 'types/vegetables';
//import { NavLink } from 'react-router-dom';

interface Props {
  item: Fruits | Vegetables;
}


const CarouselItem: React.FC<Props> = ({ item }) => {

  return (
    <div className={style.item}>
      {parseVeggiesIcons(item, style.icon)}
      <p>{item}</p>
    </div>
  )
};

export default React.memo(CarouselItem);
/*
<NavLink to={'/receipes/' + item} className={style.link}>
      <div className={style.item} onClick={() => handleViewReceipe(item)}>
        <InlineIcons name={item} size={25} />
        <p>{item}</p>
      </div>
    </NavLink>
     */