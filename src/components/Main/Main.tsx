import VeggieCarousel from 'components/VeggieCarousel/VeggieCarousel';
//import { Switch, Route } from 'react-router-dom';
//import RecipesList from 'components/Pages/RecipesList/RecipesList';
//import RecipeForm from 'components/Templates/RecipeForm/RecipeForm';
import style from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={style.main}>
      main
      <VeggieCarousel />
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