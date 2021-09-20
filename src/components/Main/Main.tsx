import RecipesList from 'components/RecipesList/RecipesList';
import Homepage from 'components/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import style from './Main.module.scss';
import FiltersContainer from 'components/FiltersContainer/FiltersContainer';

const Main: React.FC = () => {
  return (
    <div className={style.main}>
      <FiltersContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/recipes/filters/:allergenes?" component={RecipesList} />
        <Route path="/recipes/:ingredient?" component={RecipesList} />
      </Switch>
    </div>
  );
};

export default Main;