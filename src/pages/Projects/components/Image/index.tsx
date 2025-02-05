import { FC } from "react";
import styles from './style.module.scss';


export interface ImageProps {
  image: string;
}

const Image: FC<ImageProps> = ({image}) => {

  return (
    <img className={styles.image} src={image} alt="image" />
  );
};

export default Image;

