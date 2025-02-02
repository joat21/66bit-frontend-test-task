import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  const classes = classNames(className, styles['btn']);
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
