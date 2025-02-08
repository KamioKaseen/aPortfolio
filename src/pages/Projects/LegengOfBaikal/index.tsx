import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationBar';


const KnowledgeBase: FC = () => {
 
  return (
    <>
      <Header image='Baikal/baikal-header.webp' />
    
      <main className='work'>
        <Content title='Улучшение формы'>
          <p className='title'>Задача</p>
          <p className='description'>Обновить дизайн сайта, сделать его широкоформатным, полностью изменить стиль на современный. Сделать интерфейс простым и понятным, чтобы пользователь мог легко заказывать воду без звонков операторам</p>
        </Content>
        <Image image='Baikal/baikal-botels.webp'/>
        <Image image='Baikal/baikal-profile.webp'/>
        <Image image='Baikal/baikal-colors.webp'/>
        <Image image='Baikal/baikal-feed.webp'/>
        <NavigationBar />
      </main>
    </>
  )
}

export default KnowledgeBase;

// const pageVariants = {
//   initial: { opacity: 1, y: "100%" }, // Начинает внизу
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }, // Поднимается плавно
//   exit: { opacity: 0, y: "100%" }, // Начинает внизу
// };
