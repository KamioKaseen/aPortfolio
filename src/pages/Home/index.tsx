import styles from './style.module.scss';
import { CardData } from '../../types';
import { CARDS } from '@data';
import { Card, Header } from '@components';

const cardData: CardData[] = CARDS as CardData[];

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      
      <div className={styles.home__content}>
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}

        <div className={styles.home__otherWorks}>
          <img className={styles.home__item3} src="home-page/auth.png" alt="" />
          <img className={styles.home__item4} src="home-page/music.png" alt="" />
        </div>
      </div>
    </div>
  );
}
