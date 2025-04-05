import classNames from 'classnames';
import styles from './styles.module.scss';
import { ButtonLink } from '@shared';
import { WorksSlider } from '../WorksSlider';

export function Works() {
  return (
    <div className={styles.works}>
      <div className={classNames(styles.works__textContainer, 'container')}>
        <div className={styles.works__contacts}>
          <ButtonLink 
            href="https://dprofile.ru/alinapry" 
            isHaveIcon={false}
          >
            <p className={styles.works__contactsText}>Dribble</p>
          </ButtonLink>
          
          <ButtonLink 
            href="https://t.me/noytox1c" 
            isHaveIcon={false}
          >
            <p className={styles.works__contactsText}>Telegram</p>
          </ButtonLink>
        </div>

        <div className={styles.works__title}>
          <h2 className={styles.works__titleText}>
            ДРУГИЕ РАБОТЫ
          </h2>
        </div>
      </div>

      <div className={styles.works__sliderContainer}>
        <WorksSlider />
      </div>
    </div>
  )
}
