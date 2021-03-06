import { useHistory } from 'react-router-dom';
import Select, { ActionMeta, components } from 'react-select';
import { mergeAllVegs } from 'utils/vegUtils';
import FilterAllergens from 'components/FilterAllergens/FilterAllergens';
import style from './FiltersContainer.module.scss';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { customStyles } from './customStyles';
import { parseVeggiesIcons } from 'utils/parseIcons';
import { ReactComponent as Cross } from 'icons/cross.svg';
import { ReactComponent as Chev } from 'icons/chev.svg';
import { ReactComponent as Filter } from 'icons/filter.svg';

import './Select.scss';

interface Option {
  label: string | unknown;
  value: string | unknown;
}
const FiltersContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OPTIONS: Option[] = mergeAllVegs().map(e => {
    return { label: e, value: e };
  });
  let history = useHistory();

  const handleOnChange = (val: any, actionMeta: ActionMeta<any>) => {
    switch (actionMeta.action) {
      case 'select-option':
        return history.push(`/recipes/${val.value}`);
      case 'clear':
        return 'clear';
    }
  };

  const CustomSelectOption = (props: any) => (
    <components.Option {...props}>
      <div>
        {parseVeggiesIcons(props.label, style.icon)}
        <p>{props.label}</p>
      </div>
    </components.Option>
  );

  /* const CustomValueContainer = (props: any) => (
     <components.ValueContainer {...props} >
       {props.hasValue ? <div>
         {parseVeggiesIcons(props.selectProps.value.label, style.icon)}
         <p>{props.selectProps.value.label} </p>
       </div> : 'Type or choose a veg...'}
     </components.ValueContainer>
   )*/

  const commonProps = {
    classNamePrefix: 'select',
    components,
    noOptionsMessage: (obj: { inputValue: string }) => {
      if (obj.inputValue?.length === 0) {
        return 'Type or choose a veg...';
      }
      return 'Veg not found';
    },
  };

  useEffect(() => setIsOpen(isOpen), [isOpen]);

  return (
    <div
      className={cn(style.container, {
        [style.showContent]: isOpen,
      })}
    >
      <div className={style.headerFilters} onClick={() => setIsOpen(!isOpen)}>
        <div className={style.flex}>
          <Filter className={style.icon} />
          <p>Filters</p>
        </div>
        {isOpen ? (
          <Cross className={style.icon} />
        ) : (
          <Chev className={style.icon} />
        )}
      </div>
      {isOpen && (
        <div className={style.filterContent}>
          <div className={style.filterHeaderTitle}>
            <h3 className={style.title}>Filter by veg</h3>
            <Select
              {...commonProps}
              isClearable
              isSearchable
              styles={customStyles}
              placeholder="Type or choose a veg..."
              options={OPTIONS}
              components={{
                IndicatorSeparator: () => null,
                Option: CustomSelectOption,
                //ValueContainer: CustomValueContainer
              }}
              onChange={handleOnChange}
            />
          </div>
          <div className={style.filterHeaderTitle}>
            <h3 className={style.title}>Filter by allergens</h3>
            <FilterAllergens />
          </div>
        </div>
      )}
    </div>
  );
};

export default FiltersContainer;
