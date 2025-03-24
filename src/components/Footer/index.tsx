import ArrowIcon from '../../icons/arrowIcon';  
import Chips from '../../shared/chips';  
import style from './style.module.scss';  

export function Footer () {  
  const scrollToTop = () => {  
    window.scrollTo({  
      top: 0,  
      behavior: "smooth"  
    });  
  };  

  return (  
    <footer className={style.footer}>  
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
