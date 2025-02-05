import { ReactNode } from 'react'
import { FC } from "react";
import styles from './style.module.scss';

export interface ContentProps {
  children: ReactNode;
  title: string;
}

const Content: FC<ContentProps> = ({children, title}) => {

  return (
    <div className={styles.content}>
      <div className={styles.content__title}>
        <p>{title}</p>
      </div>
      
      <div className={styles.content__description}>
        {children}
      </div>
    </div>
  );
};

export default Content;

