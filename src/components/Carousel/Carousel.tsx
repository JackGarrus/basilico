import { MONTHS } from 'data/monthlyVegs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'styles/slickCustomStyle.scss';
import CarouselMonth from 'components/CarouselMonth/CarouselMonth';

const Carousel: React.FunctionComponent = () => {
  const months = MONTHS;
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
    appendDots: (dots: any) => <ul style={{ margin: '0px' }}> {dots} </ul>,
    customPaging: (i: number) => (
      <div className="sliderPaginationIndex">{i + 1}</div>
    ),
  };

  return <Slider {...settings}>
    {months.map((e, i) => (
      <CarouselMonth
        id={e.id}
        key={i}
        month={e.month}
        fruits={e.fruits}
        vegetables={e.vegetables}
      />
    ))
    }
  </Slider>;
};

export default Carousel;
