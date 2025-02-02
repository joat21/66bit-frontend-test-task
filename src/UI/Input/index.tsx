import { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...props }) => {
  const classes = classNames(className, styles['input']);
  return <input className={classes} {...props} />;
};
