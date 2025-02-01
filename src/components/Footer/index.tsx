import Chips from '../../shared/chips';
import style from './style.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <Chips>Dribble</Chips>
        <Chips>Telegram</Chips>
        <div className={style.footer__up}>↑</div>
      </div>
      <p className={style.footer__copyright}>© 2025</p>
      
    </footer>
  )
}

export default Footer;