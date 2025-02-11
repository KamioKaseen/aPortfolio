import { FC } from "react";
import classNames from 'classnames';
import styles from './style.module.scss';

export interface HeaderProps {
  image?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const Header: FC<HeaderProps> = ({ image, backgroundImage, backgroundColor }) => {

  return (
    <header 
      className={classNames(styles.header, backgroundColor)}
      style={{backgroundImage: backgroundImage}}

    > 
    {image && 
    <img 
        className={styles.header__image} 
        src={image} 
        alt="header-img" 
    />}
      
    </header>
  );
};

export default Header;

