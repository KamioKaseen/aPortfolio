import { FC } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { CardData } from "../../types";

const Card: FC<CardData> = ({ 
  route, 
  title, 
  image,
  imageMobile,
  backgroundImage
}) => {
  return (
      <Link 
        to={route}
        style={{backgroundImage: backgroundImage}}
        className={`${styles.card} ${route === 'ony' ? styles['card--border']: ''}`}
      >
        <div 
          className={styles.card__content }
        >
          {title &&
            <h2 className={classNames(styles.card__title)}>
              {title}
            </h2>
          }

          {image && 
            <picture className={styles.card__imageContainer}>  

              {route === 'ony' 
              ?
              <source media="(max-width: 480px)" height={250} srcSet={imageMobile} /> :
              <source media="(max-width: 768px)" srcSet={imageMobile} />  
              }
               
              <img className={styles.card__image} src={image} alt={title}></img>
            </picture> 
          }
        </div>
      </Link>
  );
};

export default Card;

