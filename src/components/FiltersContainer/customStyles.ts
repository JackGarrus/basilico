const STYLE_VAR = {
  brandColor: 'honeydew',
  accentColor: 'orangered',
  primaryColor: '#80b380',
  secondaryColor: 'rgb(128 179 128 / 40%)'
}

export const customStyles = {
  //control: () => ({}),

  valueContainer: (provided: any, state: any) => ({
    ...provided,
    textTransform: 'capitalize',
  }),

  control: (provided: any, state: any) => ({
    ...provided,
    display: 'flex',
    width: '100%',
    boxShadow: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: `2px dashed ${STYLE_VAR.accentColor}`,
    borderRadius: 0,
    '&:hover': {
      borderColor: `${STYLE_VAR.primaryColor}`,
      cursor: 'pointer'
    }
  }),

  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: `${STYLE_VAR.primaryColor}`
  }),

  placeholder: (provided: any, state: any) => ({
    ...provided,
    color: `${STYLE_VAR.primaryColor}`,
    fontWeight: 700,
  }),

  container: (provided: any, state: any) => ({
    ...provided,
    border: 'none',
    width: '100%',
  }),

  menu: (provided: any, state: any) => ({
    ...provided,
    margin: 0,
    padding: 0
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

export const customOption = {
  option: (provided: any, state: any) => ({
    ...provided,
    '_inner': {
      padding: '10px 20px ',
      backgroundColor: state.isSelected ? `${STYLE_VAR.secondaryColor}` : `${STYLE_VAR.brandColor}`,
      '_label': {
        color: '#333',
        fontWeight: 700,
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: `${STYLE_VAR.secondaryColor}`,
          cursor: 'pointer'
        },
        '&:first-letter': {
          color: `${STYLE_VAR.accentColor}`,
        }
      }
    }
  }),
}