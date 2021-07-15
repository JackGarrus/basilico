import React from 'react';
import style from './SimpleItem.module.scss';

interface SimpleItemProps {
  element: string;
}

const SimpleItem: React.FC<SimpleItemProps> = ({ element }) => (
  <span className={style.spacing}>{element}</span>
);

export default SimpleItem;
