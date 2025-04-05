import classNames from 'classnames';
import styles from './style.module.scss';

export function Header () {
  return (
    <header className={classNames(styles.header, 'container')}>
      <h1 className={styles.header__title}>
        ПРИВЕТ, МЕНЯ ЗОВУТ АЛИНА<br>
        </br>Я UI/UX ДИЗАЙНЕР
      </h1>

      <div className={styles.header__works}>
        <h2 className={styles.header__text}>
          МОИ РАБОТЫ<span className={styles[`header__text--blue`]}>.</span>
        </h2>
      </div>
    </header>
  )
}

