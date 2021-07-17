import RecipesList from 'components/RecipesList/RecipesList';
import Carousel from 'components/Carousel/Carousel';
import { Switch, Route } from 'react-router-dom';
import style from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={style.main}>
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route path="/recipes/:ingredient?" component={RecipesList} />
      </Switch>
    </div>
  );
}

export default Main;
