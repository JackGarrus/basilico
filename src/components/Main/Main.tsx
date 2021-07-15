import RecipesList from 'components/RecipesList/RecipesList';
import VeggieCarousel from 'components/VeggieCarousel/VeggieCarousel';
import { Switch, Route } from 'react-router-dom';
import style from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={style.main}>
      <Switch>
         <Route exact path="/" component={VeggieCarousel} />
         <Route path="/recipes/:ingredient?" component={RecipesList} />
        </Switch>
    </div>
  );
  }


export default Main;
/*
<Switch>
          <Route exact path="/" component={VeggieWidgetContainer} />
          <Route path="/receipes/:ingredient?" component={RecipesList} />
          <Route exact path="/new-recipe/" component={RecipeForm} />
        </Switch>
 */