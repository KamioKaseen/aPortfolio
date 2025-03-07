import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { CardData } from "../../types";
import NdaLock from "../../icons/ndaLock";

const Card: FC<CardData> = ({ 
  route, 
  type, 
  title, 
  image,
  className = "", 
  size, 
  backgroundImage, 
  chipsBlack,
  nda,
}) => {
  return (
      <Link 
        to={route}
        className={classNames(styles.card, styles[`card--${size}`], className)}
        style={{backgroundImage: backgroundImage}}
      >
        {nda && 
          <div className={styles.card__nda}>
            <NdaLock className={styles.card__ndaIcon} />
          </div>
        }
        {size != 'small' && 
          <p
            className={styles.card__name}
            style={{color : chipsBlack ? 'black' : 'white'}}
          >
            {type}
          </p>
        }
        
        <h2 className={classNames(styles.card__title, styles[`card--${size}__title`])} style={{color : chipsBlack ? 'black' : 'white'}} >
          {title}
        </h2>

        {size === 'middle' 
          ?
          <div className={styles['card--middle__imageContainer']}>
            <img className={styles[`card--${size}__image`]} src={image} alt="backdrop"/>
          </div> 
          :
          <img className={styles[`card--${size}__image`]} src={image} alt="backdrop"/>   
        }
      </Link>
  );
};

export default Card;

