import styles from './style.module.scss';
import Card from '../../components/Card';
import { CardData } from '../../types';
import cardData from '../../data/cards.json';

const cards: CardData[] = cardData.map((card, index) => ({  
  ...card,  
  className: styles[`home__item${index + 1}`]
}));

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        Привет, меня зовут Алина <br /> 
        <span className={styles.home__subtitle}>Я UI/UX дизайнер</span>
      </h1>

      <div className={styles.home__grid}>
        {cards.map((card) => (
          <Card 
            key={card.route}
            {...card}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;