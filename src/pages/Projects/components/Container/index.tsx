import { ReactNode } from 'react'
import { FC } from "react";
import styles from './style.module.scss';

export interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        {children}
      </div>
    </div>
  );
};

export default Container;

