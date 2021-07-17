import CarouselVegList from 'components/CarouselVegList/CarouselVegList';
import { Fruits } from 'types/fruits';
import { Vegetables } from 'types/vegetables';
import { MonthProp } from 'types/months';
import style from './CarouselMonth.module.scss';

const CarouselMonth: React.FC<MonthProp> = ({ month, fruits, vegetables }) => {
  return (
    <div className={style.container}>
      <header>
        <h1 className={style.monthName}>{month}</h1>
        <CarouselVegList type="fruits" list={fruits as Fruits[]} />
        <CarouselVegList type="veggies" list={vegetables as Vegetables[]} />
      </header>
    </div>
  );
};

export default CarouselMonth;
