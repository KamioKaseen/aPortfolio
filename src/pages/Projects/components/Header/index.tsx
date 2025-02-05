import { FC } from "react";
import classNames from 'classnames';
import styles from './style.module.scss';

export interface HeaderProps {
  image: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const Header: FC<HeaderProps> = ({backgroundImage, backgroundColor, image}) => {

  return (
    <header 
    className={classNames(styles.header, backgroundColor)}
    style={{backgroundImage}}
    >
      <img className={styles.header__image} src={image} alt="header-img" />
    </header>
  );
};

export default Header;

