import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'styles/slickCustomStyle.scss';
import CarouselMonth from 'components/CarouselMonth/CarouselMonth';
import { useGetMonthlyVegs } from 'queries/veggies';
import { MonthProp } from 'types/months';

const Carousel: React.FC = () => {
  const { data: months } = useGetMonthlyVegs()

  let currentMonth = new Date().getMonth();

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    swipeToSlide: true,
    accessibility: true,
    initialSlide: currentMonth,
    appendDots: (dots: HTMLUListElement) => (
      <ul style={{ margin: '0px' }}> {dots} </ul>
    ),
    customPaging: (i: number) => (
      <div className="sliderPaginationIndex">{i + 1}</div>
    ),
  };
  return (
    <>
      {months ? <Slider {...settings}>
        {months.map((e: MonthProp, i: number) => (
          <CarouselMonth
            id={e.id}
            key={i}
            month={e.month}
            fruits={e.fruits}
            vegetables={e.vegetables}
          />
        ))}
      </Slider> : <p>Loading...</p>}
    </>
  );
};

export default Carousel;
