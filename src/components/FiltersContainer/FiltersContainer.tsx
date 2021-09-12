import { useHistory } from 'react-router-dom';
import Select, { components } from 'react-select';
import { mergeAllVegs } from 'data/vegetablesList';
import FilterAllergens from 'components/FilterAllergens/FilterAllergens';
import style from './FiltersContainer.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import './Select.scss';
import { customStyles } from './customStyles';
import { parseVeggiesIcons } from 'utils/parseIcons';

const FiltersContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OPTIONS = mergeAllVegs().map((e) => { return { label: e, value: e } })

  const handleOnChange = (val: any) => history.push(`/recipes/${val.value}`);
  let history = useHistory();

  /*const handleToggleAnchor = (el: any) => {
    el.preventDefault();
    return setIsOpen(!isOpen)
  }*/

  const CustomSelectOption = (props: any) => (
    <components.Option {...props} >
      <div>
        {parseVeggiesIcons(props.label, style.icon)}
        <p>{props.label}</p>
      </div>
    </components.Option>
  )

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

  return (
    <div className={cn(style.container, {
      [style.showContent]: isOpen
    })} >
      {//isOpen &&
        <div>
          <Select
            {...commonProps}
            styles={customStyles}
            options={OPTIONS}
            placeholder="Type or choose a veg..."
            components={{
              IndicatorSeparator: () => null,
              Option: CustomSelectOption
            }}
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
