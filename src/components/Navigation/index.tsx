import style from './styles.module.scss';
import Chips from './../../shared/chips';
import LeftIcon from '../../shared/leftIcon';
import { useLocation } from 'react-router-dom';
// import classNames from 'classnames';

const Navigation = () => {

  const {pathname} = useLocation();

  console.log(pathname);

  return (
    <nav className={style.navigation}>
      <ul className={style.navigation__list}>
        <li>
          <a href="/">
            {pathname != '/' ?
              <button className={style.navigation__backContainer}>
              <LeftIcon className={style.navigation__back}/>
            </button> :
            <img className={style.navigation__image} src="Icons/photo.svg" alt="Алина Воронкова" />
            }
          </a>
        </li>

        <div className={style.navigation__contacts}>
          <li>
            <a href="mailto:kisialin@gmail.com" target='_blank'>
              <span className={style.navigation__text}>
                <Chips>
                  Kisialin@gmail.com
                </Chips>
              </span>
              
              <button className={style.navigation__iconContainer}>
                <img src='Icons/mail.svg' alt='mail' className={style.navigation__icon} />
              </button>
            </a>
          </li>

          <li>
            <a href="/projects" target='_blank'>
              <Chips>Резюме</Chips>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navigation;