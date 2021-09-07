import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { mergeAllVegs } from 'data/vegetablesList';
import FilterAllergens from 'components/FilterAllergens/FilterAllergens';
import style from './FiltersContainer.module.scss';

const FiltersContainer: React.FC = () => {
  const OPTIONS = mergeAllVegs().map((e) => { return { label: e, value: e } })

  const handleOnChange = (val: any) => history.push(`/recipes/${val.value}`);
  let history = useHistory();

  return (
    <div className={style.container}>
      Filtra per...
      <div style={{ maxWidth: '320px' }}>
        <Select
          options={OPTIONS}
          onChange={option => handleOnChange(option)}
        />
        <div>
          <FilterAllergens />
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
