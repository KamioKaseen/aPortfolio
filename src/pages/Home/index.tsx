import styles from './style.module.scss';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';

interface Cards {
  route: string,
  size: 'small' | 'middle' | 'large',
  type: string,
  title?: string,
  image?: string,
  backgroundImage?: string,
  phoneLarge?: string,
  backdrop?: string,
  chipsBlack?: boolean,
  className: string,
}

const cards: Cards[] = [
  {
    route: 'ony',
    size: 'middle',
    type: 'Ony' ,
    title: 'Ony – твой психолог',
    image: 'Ony/phone.png',
    backgroundImage: 'url(Ony/mountain.png)',
    chipsBlack: true,
    className: styles.home__item1,
  },
  {
    route: 'form-redesign',
    size: 'large',
    type: 'Integlab' ,
    title: 'Редизайн, увеличивший конверсию',
    backdrop: 'Form/form.png',    
    phoneLarge: 'Form/form-phone.png',
    className: styles.home__item2,
  },
  {
    route: 'dailyui',
    size: 'small',
    type: 'Integlab' ,
    image: 'DailyUI/dailyUI.webp',    
    backgroundImage: 'url(DailyUI/dailyUI-back.webp)',    
    className: styles.home__item3,
  },
  {
    route: 'shop-constructor',
    size: 'large',
    type: 'Integlab' ,
    title: 'Конструктор интернет-магазинов',
    backdrop: 'Shop-constructor/shop-constructor.png' ,    
    className: styles.home__item4,
  },
  {
    route: 'issue-tracker',
    size: 'large',
    type: 'Orbite' ,
    title: 'Клиентский модуль в трекере задач',
    backdrop: 'Issue-tracker/issue-tracker.png'  ,
    phoneLarge: 'Issue-tracker/issue-tracker-phone.png' ,     
    className: styles.home__item5
  },
  {
    route: 'baikal',
    size: 'middle',
    type: 'Integlab' ,
    title: 'Легенда Байкала'  ,
    backgroundImage: 'url(Baikal/baikal-back.png)', 
    image: 'Baikal/botel.png',
    className: styles.home__item6,
  },
  {
    route: 'knowledge-base',
    size: 'large',
    type: 'Orbite', 
    title: 'Корпоративная база знаний',
    backdrop: 'Knowledge-base/knowledge-base.png',    
    phoneLarge: 'Knowledge-base/knowledge-base-phone.png',   
    className: styles.home__item7,
  },
  {
    route: 'profile',
    size: 'small',
    type: 'Integlab', 
    backgroundImage: 'url(Profile/profile.png)', 
    className: styles.home__item8,
  },
]



const Home = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const mobileCards = [
    ...cards.slice(1, 2), 
    ...cards.slice(3, 4), 
    ...cards.slice(0, 1),
    ...cards.slice(2, 3), 
    ...cards.slice(4, cards.length)
  ]

  console.log(mobileCards);
  

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div id="home__title" className={styles.home}>
      <h1 className={styles.home__title}>
        Привет, меня зовут Алина <br/> 
        <span className={styles.home__subtitle}>Я UI/UX дизайнер</span>
      </h1>

      <div className={styles.home__grid}>
        {!isMobile ?
          cards.map((card) => {
            return (
              <Card 
                key={card.route}
                route={card.route}
                size={card.size}
                type={card.type} 
                title={card.title}
                image={card.image}
                backdrop={card.backdrop}
                phoneLarge={card.phoneLarge}
                backgroundImage={card.backgroundImage} 
                chipsBlack={card.chipsBlack}
                className={card.className}/>
            )
          }) :

          mobileCards.map((card) => {
            return (
              <Card 
                key={card.route + Math.random()}
                route={card.route}
                size={card.size}
                type={card.type} 
                title={card.title}
                image={card.image}
                backdrop={card.backdrop}
                phoneLarge={card.phoneLarge}
                backgroundImage={card.backgroundImage} 
                chipsBlack={card.chipsBlack}
                className={card.className}/>
            )
          }) 
        }
      </div>
    </div>
  )
}

export default Home;