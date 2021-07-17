import cn from 'classnames';
import {
  ChangeEvent,
  FC,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  Ref,
  SVGProps,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { ReactComponent as Check } from 'icons/check.svg';
import { ReactComponent as Cross } from 'icons/cross.svg';

import style from './Input.module.scss';

export type InputType = 'text' | 'number' | 'password' | 'date';

export interface InputProps {
  name: string;
  initialValue?: string | number;
  type?: InputType;
  onChange?: (value: string) => void;
  label?: string;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  valid?: boolean;
  errorMessage?: string;
  placeholder?: string;
  clearable?: boolean;
  hideLabelOnFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  inputIcon?: FC<SVGProps<SVGSVGElement>>;
  inputRef?: Ref<HTMLInputElement>;
  className?: string;
  children?: ReactNode;
}

const Input: FC<InputProps> = ({
  name,
  initialValue,
  type = 'text',
  onChange,
  label,
  valid,
  errorMessage,
  placeholder,
  clearable,
  disabled,
  readOnly,
  onFocus,
  onBlur,
  onKeyDown,
  inputIcon,
  inputRef,
  className,
  children,
}) => {
  /* let icon = valid ? (
           <IconSvg icon={Check} className={cn(style.icon, style.iconCheck)} />
      ) : errorMessage ? (
           <IconSvg icon={Cross} className={cn(style.icon, style.iconCross)} />
      ) : null;*/

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string | number>('');
  const hasContent =
    (!disabled || value.toString().length > 0) &&
    (isFocused ||
      value.toString().length > 0 ||
      (initialValue && initialValue.toString().length > 0) ||
      errorMessage);

  useEffect(() => {
    setValue(
      typeof initialValue !== 'undefined' && initialValue !== null
        ? initialValue
        : '',
    );
  }, [initialValue]);

  function handleOnFocus(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleOnBlur(event: FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      onChange && onChange(event.target.value);
    },
    [onChange],
  );

  const clearInput = useCallback(() => {
    setValue('');
    onChange && onChange('');
  }, [onChange]);

  return (
    <div
      className={cn(style.container, className, {
        [style.container_focused]: isFocused,
        [style.container_hasContent]: hasContent,
        [style.container_valid]: valid,
        [style.container_hasPlaceholder]: placeholder,
        [style.container_invalid]: errorMessage,
        [style.container_disabled]: disabled,
        [style.container_iconValue]: inputIcon,
      })}
    >
      <div className={style.content}>
        {inputIcon ? (
          <div className={style.iconValue}>
            {/*<IconSvg icon={inputIcon} color="grey" size="s" />*/}
          </div>
        ) : (
          ''
        )}
        <div
          className={cn(style.inputContent, {
            [style.inputContentNoLabel]: !label && placeholder,
            [style.inputContentNoPlaceholder]: label && !placeholder,
            [style.inputContentNoLabelAndPlaceholder]: !label && !placeholder,
          })}
        >
          {label && (
            <label className={style.label}>
              {errorMessage ? `${label}: ${errorMessage}` : label}
            </label>
          )}
          <input
            disabled={disabled}
            readOnly={readOnly}
            name={name}
            type={type}
            value={value}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={event => (onKeyDown ? onKeyDown(event) : null)}
            onChange={onChangeHandler}
            ref={inputRef}
            autoComplete="off"
            placeholder={placeholder}
            className={style.input}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Input;
/**
 *
                    {icon}
 *  clearable && value && (
                              /*<IconSvg
                                   icon={Cross}
                                   onClick={clearInput}
                                   className={style.clearIcon}
                              />

                         )
 */
