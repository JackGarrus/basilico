import cn from 'classnames';
import Input from 'components/Input/Input';
//import { ReactComponent as Search } from 'icons/search.svg';

import style from './SearchBar.module.scss';

interface Props {
     placeholder: string;
     onChange: (value: string) => void;
     value?: string;
     className?: string;
     onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
     onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({
     placeholder,
     onChange,
     value,
     className,
     onFocus,
     onBlur,
}) => (
     <Input
          name="searchByPatientName"
          type="text"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          initialValue={value}
          placeholder={placeholder}
          className={cn(style.container, className)}
          clearable={true}
     />
);
export default SearchBar;
//          inputIcon={Search}
