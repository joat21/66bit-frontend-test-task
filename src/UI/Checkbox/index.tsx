import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={classNames(className, styles['checkbox'])}
      {...props}
    />
  );
};
