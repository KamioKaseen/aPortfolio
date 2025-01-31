import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import Chips from "../../shared/chips";

export interface CardProps {
  type: string;
  title?: string;
  backdrop: string;
  image?: string;
  className?: string;
  backgroundColor?: string;
  chipsColor?: string;
  size: "small" | "middle" | "large";
}

const Card: FC<CardProps> = ({ type, title, backdrop, image, className = "", size, backgroundColor, chipsColor}) => {
  return (
    <div 
      className={classNames(styles.card, styles[`card--${size}`], className)}
      style={{backgroundColor}}
    >
      <Chips 
        className={styles.card__chips}
        color={chipsColor}
      >
        {type}
      </Chips>

      {title && <h2 className={styles[`card__title`]} style={{color: size != 'middle' ? 'white' : 'black'}} >{title}</h2>}
      {backdrop && 
        <div className={styles[`card--${size}__backdropContainer`]}> 
          <img className={styles[`card--${size}__backdrop`]} src={backdrop} alt="backdrop"/>
        </div> }
      {image && <img className={styles[`card--${size}__image`]} src={image} alt="image"/>}
    </div>
  );
};

export default Card;

