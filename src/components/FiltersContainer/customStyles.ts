const STYLE_VAR = {
  brandColor: 'honeydew',
  accentColor: 'orangered',
  primaryColor: '#80b380',
  secondaryColor: 'rgb(128 179 128 / 40%)'
}

export const customStyles = {
  control: () => ({}),
  option: () => ({}),
  valueContainer: () => ({}),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
    transition: 'transform 0.3s ease-in-out',
    color: '#80b380'
  }),

  placeholder: () => ({
  }),

  container: (provided: any, state: any) => ({
    ...provided,
    border: 'none',
    width: '100%',
  }),

  menu: (provided: any, state: any) => ({
    ...provided,
    margin: 0,
    padding: 0,
    border: '2px dashed orangered',
    borderTop: 'none',
    paddingTop: 0
  }),

  menuList: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: `${STYLE_VAR.brandColor}`,
  }),

  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    color: `${STYLE_VAR.primaryColor}`
  }),

  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return {
      ...provided, opacity, transition,
      fontWeight: 700,
      '&:first-letter': {
        color: `${STYLE_VAR.accentColor}`,
      }
    };
  }
}
