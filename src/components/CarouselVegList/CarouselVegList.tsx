import CarouselVegBox from 'components/CarouselVegBox/CarouselVegBox';
import { Fruits, Vegetables } from 'types/types';
import style from './CarouselVegList.module.scss';

interface ListProps {
  list: Fruits[] | Vegetables[];
  type: 'fruits' | 'veggies';
}

const CarouselList: React.FC<ListProps> = ({ list, type }) => (
  <div className={style.container}>
    <p className={style.type}>{type} - </p>
    {list.map(
      (veg: Fruits | Vegetables, i: number): JSX.Element => (
        <CarouselVegBox key={i} item={veg} />
      ),
    )}
  </div>
);

export default CarouselList;
