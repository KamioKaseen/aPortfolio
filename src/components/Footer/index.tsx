import { useEffect, useState } from 'react';  
import { useLocation } from 'react-router-dom';  
import ArrowIcon from '../../icons/arrowIcon';  
import Chips from '../../shared/chips';  
import style from './style.module.scss';  

const Footer = () => {  
  const { pathname } = useLocation();  
  
  // Состояние для хранения применяемых стилей  
  const [footerStyle, setFooterStyle] = useState({  
    marginTop: '7rem',  
  });  

  const defaultStyles = {  
    marginTop: '7rem',  
  };  

  const pathStyles = {  
    marginTop: '3rem',  
  };  

  const scrollToTop = () => {  
    window.scrollTo({  
      top: 0,  
      behavior: "smooth"  
    });  
  };  

  useEffect(() => {  
    const newStyles = pathname !== '/' ? pathStyles : defaultStyles;  

    const timeoutId = setTimeout(() => {  
      setFooterStyle(newStyles);  
    }, 1000); 

    return () => clearTimeout(timeoutId);  
  }, [pathname]);  

  return (  
    <footer style={footerStyle} className={style.footer}>  
      <div className={style.footer__container}>  
        <a href="https://dprofile.ru/alinapry" target='_blank' rel="noopener noreferrer">  
          <Chips>Diprofile</Chips>  
        </a>  
        <a href="https://t.me/noytox1c" target='_blank' rel="noopener noreferrer">  
          <Chips>Telegram</Chips>  
        </a>  
        <button onClick={scrollToTop} className={style.footer__arrowContainer}>  
          <ArrowIcon className={style.footer__arrow} />  
        </button>  
      </div>  
      <p className={style.footer__copyright}>© 2025</p>  
    </footer>  
  );  
}  

export default Footer;