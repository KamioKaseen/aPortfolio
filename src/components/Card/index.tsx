import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { CardData } from "@types";
import classNames from "classnames";

export function Card ({ 
  route, 
  image,
  imageMobile,
  backgroundImage
}: CardData) {
  return (
      <Link 
        to={route}
        style={{backgroundImage: backgroundImage}}
        className={styles.card}
      >
        <div 
          className={classNames(styles.card__content, 'container') }
  
        >
          {image && 
            <picture className={styles.card__imageContainer}>  
              <source media="(max-width: 768px)" srcSet={imageMobile} />  
            
              <img width={1620} className={styles.card__image} src={image}></img>
            </picture> 
          }
        </div>
      </Link>
  );
};

