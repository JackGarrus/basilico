import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { mergeAllVegs } from 'data/vegetablesList';
import { RECIPES } from 'data/recipes';

import style from './FiltersContainer.module.scss';
import FilterRecipes from 'components/FilterRecipes/FilterRecipes';

const FiltersContainer: React.FC = () => {
  const OPTIONS = mergeAllVegs().map((e) => { return { label: e, value: e } })
  const mergeAllAllergens = () => [...new Set(RECIPES.map((e: any) => e.recipes).map((j: any) => j.allergens))]

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
  };

  const handleOnChange = (val: any) =>
    history.push(`/recipes/${val.value}`);
  let history = useHistory();
  const filters = ['vegan', 'vegetarian', 'sweet', 'meat', 'fish']
  return (
    <div className={style.container}>
      Filtra per...
      <div style={{ maxWidth: '320px' }}>
        <Select
          options={OPTIONS}
          onChange={option => handleOnChange(option)}
        />
        <div>
          <FilterRecipes />
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
