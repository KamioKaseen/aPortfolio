import { FC } from "react";
import classNames from 'classnames';
import styles from './style.module.scss';

export interface HeaderProps {
  image?: string;
  video?: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

const Header: FC<HeaderProps> = ({ image, video, backgroundImage, backgroundColor }) => {

  return (
    <header 
      className={classNames(styles.header, backgroundColor)}
      style={{backgroundImage: backgroundImage}}

    > 
    {image && !video && 
      <img 
        className={styles.header__image} 
        src={image} 
        alt="header-img" 
      />
    }
    {video && 
    <div className={styles.header__container}>
      <video className={styles.header__video}  loop autoPlay muted>  
        <source src={video} type="video/webm" />  
          Ваш браузер не поддерживает тег video.  
      </video>  
    </div>
    }
    </header>
  );
};

export default Header;

