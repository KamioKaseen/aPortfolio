import styles from './style.module.scss';

export function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        ПРИВЕТ, МЕНЯ ЗОВУТ АЛИНА<br>
        </br>Я UI/UX ДИЗАЙНЕР
      </h1>

      <div className={styles.header__works}>
        <p >
          МОИ РАБОТЫ.
        </p>
      </div>
    </header>
  )
}

