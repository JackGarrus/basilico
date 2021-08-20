import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { mergeAllVegs } from 'data/vegetablesList';

import style from './FiltersContainer.module.scss';

const FiltersContainer: React.FC = () => {
  const OPTIONS = mergeAllVegs().map((e) => { return { label: e, value: e } })

  let history = useHistory();

  const handleOnChange = (val: any) =>
    history.push(`/recipes/${val.value}`);

  return (
    <div className={style.container}>
      Filtra per...
      <div>
        <Select
          options={OPTIONS}
          onChange={option => handleOnChange(option)}
        />
        <div>checkboxes</div>
      </div>
    </div>
  );
};

export default FiltersContainer;
