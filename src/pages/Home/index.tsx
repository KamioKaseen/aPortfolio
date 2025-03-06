import styles from './style.module.scss';
import { CardData } from '../../types';
import cardDataRaw from '../../data/cards.json';
import Card from '../../components/Card';

const cardData: CardData[] = cardDataRaw as CardData[];

const Home = () => {
  const cards: CardData[] = cardData.map((card, index) => ({
      ...card,
      className: styles[`home__item${index + 1}`],
    }));
  
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        Привет, меня зовут Алина <br /> 
        <span className={styles.home__subtitle}>Я UI/UX дизайнер</span>
      </h1>

      <div className={styles.home__grid}>
        {cards.map((card) => (
          <Card
          key={Math.random()}
            {...card}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
