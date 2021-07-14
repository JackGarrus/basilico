import CarouselList from 'components/CarouselList/CarouselList';
import { Fruits } from 'types/fruits';
import { Vegetables } from 'types/vegetables';
import style from './Month.module.scss';
//import CarouselList from 'components/Molecules/CarouselList/CarouselList';

interface MonthProps {
  id: number;
  key: number;
  month: string;
  fruits: string[];
  vegetables: string[];
}

const Month: React.FC<MonthProps> = ({ month, fruits, vegetables }) => {
  return (
    <div className={style.container}>
      <header>
        <h1 className={style.monthName}>{month}</h1>
        <>
          <CarouselList type="fruits" list={fruits as Fruits[]} />
          <CarouselList type="veggies" list={vegetables as Vegetables[]} />
        </>
      </header>
      
    </div>
  );
};

export default Month;
/*
<div role="main">
        <CarouselList type="fruits" list={fruits} />
        <CarouselList type="veggies" list={vegetables} />
      </div> */