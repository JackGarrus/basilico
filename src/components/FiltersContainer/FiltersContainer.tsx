import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { mergeAllVegs } from 'data/vegetablesList';
import FilterAllergens from 'components/FilterAllergens/FilterAllergens';
import style from './FiltersContainer.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import { useEffect } from 'react';

const FiltersContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OPTIONS = mergeAllVegs().map((e) => { return { label: e, value: e } })

  const handleOnChange = (val: any) => history.push(`/recipes/${val.value}`);
  let history = useHistory();

  const handleToggleAnchor = (el: any) => {
    el.preventDefault();
    return setIsOpen(!isOpen)
  }
  useEffect(() => {
    console.log(isOpen)
  })

  return (
    <div className={cn(style.container, {
      [style.showContent]: isOpen
    })} onClick={(e) => handleToggleAnchor(e)}>
      {isOpen &&
        <div style={{ maxWidth: '320px' }}>
          Filtra per...
          <Select
            options={OPTIONS}
            onChange={option => handleOnChange(option)}
          />
          <div>
            <FilterAllergens />
          </div>
        </div>}
    </div>
  );
};

export default FiltersContainer;
