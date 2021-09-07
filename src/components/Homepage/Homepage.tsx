import Carousel from 'components/Carousel/Carousel';
import style from './Homepage.module.scss';

const Homepage: React.FC = () => {
  return <div className={style.container}>
    <Carousel />
  </div>;
};

export default Homepage;
