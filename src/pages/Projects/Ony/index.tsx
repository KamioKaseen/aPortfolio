import { FC } from 'react';
import styles from './style.module.scss';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';

const Ony: FC = () => {
  return (
    <>
      <Header 
        backgroundColor='bg-purple'
        image='./constructor-main-image.png'
      />
    
      <main className={styles.work}>
        <Content title='Конструктор инернет-магазинов'>
          Первоначальный флоу формы обратной связи предполагал обязательное заполнение длинного брифинга из 20 вопросов (каждый вопрос на отдельном экране), чтобы оставить контактные данные и   начать общение с менеджером. Это приводило к низкому числу лидов, так как потенциальные клиенты не завершали процесс
        </Content>

        <Image image='./constructor-main-image.png'/>
        {/* <Table columns={columns} rows={rows} /> */}
      </main>
    </>
  )
}

export default Ony;

// const pageVariants = {
//   initial: { opacity: 1, y: "100%" }, // Начинает внизу
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }, // Поднимается плавно
//   exit: { opacity: 0, y: "100%" }, // Начинает внизу
// };
