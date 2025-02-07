import { FC } from "react";
import classNames from 'classnames';
import styles from './style.module.scss';

export interface HeaderProps {
  image?: string;
}

const Header: FC<HeaderProps> = ({ image }) => {

  return (
    <header className={classNames(styles.header)}>
      <img className={styles.header__image} src={image} alt="header-img" />
    </header>
  );
};

export default Header;

