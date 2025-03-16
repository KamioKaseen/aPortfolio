import { FC } from "react";
import styles from './style.module.scss';


export interface ImageProps {
  image: string;
}

const Image: FC<ImageProps> = ({image}) => {
  return (
    <section className={styles.imageContainer}>
      <img className={styles.imageContainer__image} src={image} alt="image" />
    </section>
    
  );
};

export default Image;

