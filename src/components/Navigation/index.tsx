import style from './styles.module.scss';
import Chips from './../../shared/chips';

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.navigation__list}>
        <li>
          <a href="/">
            <img className={style.navigation__image} src="Icons/photo.svg" alt="Алина Воронкова" />
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
              
              <div className={style.navigation__iconContainer}>
                <img src='Icons/mail.svg' alt='mail' className={style.navigation__icon} />
              </div>
              
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