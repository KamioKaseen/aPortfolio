import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationBar';

const ShopConstructor: FC = () => {
 
  return (
    <>
      <Header image='Profile/profile-header.png'/>
    
      <main className='work'>
        <Content title='Личный кабинет кандидата'>
          <p className='description'>Личный кабинет был создан для кандидатов, которые подают заявки на вакансии компании через сторонние платформы. Основная цель продукта — упростить взаимодействие с работодателем, сделать процесс трудоустройства прозрачным и поддержать кандидатов в стрессовых моментах, таких как выполнение тестовых заданий. Разработка велась на основе пользовательских интервью и включала итеративное тестирование гипотез.</p>
        </Content>
        <Image image='Profile/profile-dashboard.png'/>
        <Image image='Profile/profile-task.png'/>
        <Image image='Profile/profile-uikit.png'/>
        <Image image='Profile/profile-header.png'/>
        <NavigationBar />
      </main>
    </>
  )
}

export default ShopConstructor;

// const pageVariants = {
//   initial: { opacity: 1, y: "100%" }, // Начинает внизу
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }, // Поднимается плавно
//   exit: { opacity: 0, y: "100%" }, // Начинает внизу
// };
