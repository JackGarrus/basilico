import { useHistory } from 'react-router-dom';
import Select, { components } from 'react-select';
import { mergeAllVegs } from 'data/vegetablesList';
import FilterAllergens from 'components/FilterAllergens/FilterAllergens';
import style from './FiltersContainer.module.scss';
import { useState } from 'react';
import cn from 'classnames';
import './Select.scss';
import { customOption, customStyles } from './customStyles';
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
    <components.Option {...props} styles={customOption.option}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {parseVeggiesIcons(props.label, style.icon)}
        <p style={{ paddingLeft: '10px' }}>{props.label}</p>
      </div>
    </components.Option>
  )

  return (
    <div className={cn(style.container, {
      [style.showContent]: isOpen
    })} >
      {//isOpen &&
        <div>
          <Select
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
