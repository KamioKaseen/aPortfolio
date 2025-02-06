import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

export interface CardProps {
  route: string;
  type: string;
  title?: string;
  backdrop?: string;
  image?: string;
  phoneLarge?: string;
  className?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  chipsBlack?: boolean;
  size: "small" | "middle" | "large";
}

const Card: FC<CardProps> = ({ route, type, title, backdrop, image, phoneLarge, className = "", size, backgroundColor, backgroundImage, chipsBlack}) => {
  return (
    <Link 
      to={route}
      className={classNames(styles.card, styles[`card--${size}`], styles[`card--${backgroundColor}`], className)}
      style={{backgroundImage: backgroundImage}}
    >
      <div 
        className={styles.card__name}
        style={{color : chipsBlack ? 'black' : 'white'}}
      >
        {type}
      </div>

      {title && <h2 className={styles[`card__title`]} style={{color : chipsBlack ? 'black' : 'white'}} >{title}</h2>}
      {backdrop && <img className={styles[`card--${size}__backdrop`]} src={backdrop} alt="backdrop"/>}
      {phoneLarge && <img className={styles[`card--${size}__phoneLarge`]} src={phoneLarge} alt="phone"/>}
      {image && <img className={styles[`card--${size}__image`]} src={image} alt="image"/>}
    </Link>
  );
};

export default Card;

