import { ReactNode } from 'react'
import { FC } from "react";
import styles from './style.module.scss';

export interface ContentProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
}

const Content: FC<ContentProps> = ({children, title, subTitle}) => {

  return (
    <div className={styles.content}>
      <div className={styles.content__titleContainer}>
        <p className={styles.content__title}>{title}</p>
        <p className={styles.content__subTitle}>{subTitle}</p>
      </div>
      
      <div className={styles.content__description}>
        {children}
      </div>
    </div>
  );
};

export default Content;

