import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { memo } from 'react';
import { CardData } from "../../types";

const Card: FC<CardData> = memo(({ route, type, title, backdrop, image, phoneLarge, className = "", size, backgroundImage, chipsBlack}) => {
  return (
    <Link 
      to={route}
      className={classNames(styles.card, styles[`card--${size}`], className)}
      style={{backgroundImage: backgroundImage}}
    >
      <div 
        className={styles.card__name}
        style={{color : chipsBlack ? 'black' : 'white'}}
      >
        {type}
      </div>

      {title && <h2 className={styles[`card__title`]} style={{color : chipsBlack ? 'black' : 'white'}} >{title}</h2>}
      {backdrop && <img height='861.97' width='1,462' className={styles[`card--${size}__backdrop`]} src={backdrop} alt="backdrop"/>}
      {phoneLarge && <img className={styles[`card--${size}__phoneLarge`]} src={phoneLarge} alt="phone"/>}
      {image && <img className={styles[`card--${size}__image`]} src={image} alt="image"/>}
    </Link>
  );
});

export default Card;

