import styles from './style.module.scss';
import { CardData } from '../../types';
import cardDataRaw from '../../data/cards.json';
import Card from '../../components/Card';

const cardData: CardData[] = cardDataRaw as CardData[];

const Home = () => {
  const cards: CardData[] = cardData.map((card) => ({
      ...card,
  }));
  
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        Привет, меня зовут Алина <br /> 
        <span className={styles.home__subtitle}>Я UI/UX дизайнер</span>
      </h1>

      <div className={styles.home__content}>
        {cards.map((card) => (
          <Card
          key={Math.random()}
            {...card}
          />
        ))}

        <div className={styles.home__otherWorks}>
          {/* <img className={styles.home__item1} src="home-page/social-network.png" alt="" />
          <img className={styles.home__item2} src="home-page/calculator.png" alt="" /> */}
          <img className={styles.home__item3} src="home-page/auth.png" alt="" />
          <img className={styles.home__item4} src="home-page/music.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
