import classNames from 'classnames';
import style from './style.module.scss';  
import UpIcon from '@assets/icons/arrow-up.svg?react';

export function Footer () {  
  const scrollToTop = () => {  
    window.scrollTo({  
      top: 0,  
      behavior: "smooth"  
    });  
  };  

  return (  
    <footer className={classNames(style.footer, 'container')}>  
      <p className={style.footer__copyright}>© 2024</p>  

      <button onClick={scrollToTop} className={style.footer__button}>
        <UpIcon /> 
        Наверх
      </button>  
    </footer>  
  );  
}  
