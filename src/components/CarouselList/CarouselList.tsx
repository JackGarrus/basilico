import CarouselItem from 'components/CarouselItem/CarouselItem';
import { Fruits } from 'types/fruits';
import { Vegetables } from 'types/vegetables';
import style from './CarouselList.module.scss';

interface ListProps {
  list: Fruits[] | Vegetables[];
  type: 'fruits' | 'veggies';
}

const CarouselList: React.FC<ListProps> = ({ list, type }) => {

  const item = list.map((veg: Fruits | Vegetables, i: number): JSX.Element => (
    <CarouselItem key={i} item={veg} />
  ));

  return (
    <div className={style.container}>
      <p className={style.type}>{type} - </p>
      {item}
    </div>
  );
};

export default CarouselList;
