import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationBar';

const ShopConstructor: FC = () => {
 
  return (
    <>
      <Header image='Profile/profile-header.webp'/>
    
      <main className='work'>
        <Content title='Личный кабинет кандидата'>
         
        </Content>
        <Image image='Profile/profile-team.webp'/>
        <Image image='Profile/profile-dashboard.webp'/>
        <Image image='Profile/profile-task.webp'/>
        <Image image='Profile/profile-uikit.webp'/>
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
