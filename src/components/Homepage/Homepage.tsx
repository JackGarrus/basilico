import Carousel from 'components/Carousel/Carousel';
import FiltersContainer from 'components/FiltersContainer/FiltersContainer';
import style from './Homepage.module.scss';

const Homepage: React.FC = ({ children }) => {
  return <div className={style.container}>
    <FiltersContainer />
    <Carousel />
  </div>;
};

export default Homepage;
