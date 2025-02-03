import { FC } from 'react';
import styles from './Stack.module.scss';

interface StackProps {
  stack: string[];
}

export const Stack: FC<StackProps> = ({ stack }) => {
  return (
    <ul className={styles['stack-list']}>
      {stack.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
