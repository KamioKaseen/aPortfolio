import styles from './style.module.scss';
import { CardData } from '../../types';
import cardDataRaw from '../../data/cards.json';
import Card from '../../components/Card';
import { motion } from 'framer-motion';

const cardData: CardData[] = cardDataRaw as CardData[];

const pageVariants = {
  initial: { opacity: 1, y: 0 }, 
  animate: { opacity: 1, y: 0 }, 
  exit: { opacity: 1, y: 0 }, // Не исчезает моментально
};

const Home = () => {
  const cards: CardData[] = cardData.map((card, index) => ({
      ...card,
      className: styles[`home__item${index + 1}`],
    }));
  
  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      variants={pageVariants}
      className={styles.home}
    >
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
    </motion.div>
  );
};

export default Home;
