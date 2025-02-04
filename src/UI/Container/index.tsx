import { ElementType, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
}

export const Container: FC<ContainerProps> = ({
  className,
  children,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={classNames(styles['container'], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
