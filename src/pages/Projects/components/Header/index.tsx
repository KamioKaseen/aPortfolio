import { FC } from "react";
import classNames from 'classnames';
import styles from './style.module.scss';
import Image from "../Image";

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
    
    {image && <Image image={image}/>}
    
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

