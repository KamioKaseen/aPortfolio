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
        className={styles.card}
        style={{backgroundImage: backgroundImage}}
      >
        <div className={styles.card__content}>
          {title &&
            <h2 className={classNames(styles.card__title)}>
              {title}
            </h2>
          }

          {image && 
            <picture className={styles.card__imageContainer}>  
              <source media="(max-width: 768px)" srcSet={imageMobile} />  
              <img className={styles.card__image} src={image} alt={title}></img>
            </picture> 
          }
        </div>
      </Link>
  );
};

export default Card;

