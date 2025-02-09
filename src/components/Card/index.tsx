import { FC, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { memo } from 'react';
import { CardData } from "../../types";
import Modal from "../../shared/ndaModal";

const Card: FC<CardData> = memo(({ 
  route, 
  isNDA = false,
  type, 
  title, 
  backdrop, 
  image, 
  phoneLarge, 
  className = "", 
  size, 
  backgroundImage, 
  chipsBlack
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if(isNDA) {
      e.preventDefault();
      setIsOpen(true)
    }
  };

  return (
    <Link 
      to={route}
      onClick={handleClick}
      className={classNames(styles.card, styles[`card--${size}`], className)}
      style={{backgroundImage: backgroundImage}}
    >
      <div 
        className={styles.card__name}
        style={{color : chipsBlack ? 'black' : 'white'}}
      >
        {type}
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {title && <h2 className={styles[`card__title`]} style={{color : chipsBlack ? 'black' : 'white'}} >{title}</h2>}
      {backdrop && <img className={styles[`card--${size}__backdrop`]} src={backdrop} alt="backdrop"/>}
      {phoneLarge && <img className={styles[`card--${size}__phoneLarge`]} src={phoneLarge} alt="phone"/>}
      {image && <img className={styles[`card--${size}__image`]} src={image} alt="image"/>}
    </Link>
  );
});

export default Card;

