import * as React from 'react';
import { MONTHS } from 'data/data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'styles/slickCustomStyle.scss';
//import Month from 'components/Molecules/Month/Month';

const VeggieCarousel: React.FunctionComponent = () => {
  const months = MONTHS;

  const renderWidget = () => {
    let veggieMonth = months.map((e, i) => {
      return ( <div>month</div>
       
      );
    });
    // cannot split for now veggieMonth in a method and call it in the Slider because the Slider expects a component,
    // not a function

    // const uniqueVegsList = [...new Set(fruitsAndVegsArray.map(e => e))];
    // console.log(uniqueVegsList.sort());
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

    return <Slider {...settings}>{veggieMonth}</Slider>;
  };

  return <main>{renderWidget()}</main>;
};

export default VeggieCarousel;

/*
 <Month
          id={e.id}
          key={i}
          month={e.month}
          fruits={e.fruits}
          vegetables={e.vegetables}
        /> */