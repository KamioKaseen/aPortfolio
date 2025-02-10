import { FC } from "react";
import classNames from 'classnames';
import styles from './style.module.scss';

export interface HeaderProps {
  image?: string;
  mobileImage?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const Header: FC<HeaderProps> = ({ image, mobileImage, backgroundImage, backgroundColor }) => {

  return (
    <header 
      className={classNames(styles.header, backgroundColor)}
      style={{backgroundImage}}

    >
      <picture className={styles.header__picture}>  
        <source srcSet={mobileImage} media="(max-width: 768px)" />  
        <img 
        className={styles.header__image} 
        src={image} 
        alt="header-img" 
        />
      </picture>  
    </header>
  );
};

export default Header;

