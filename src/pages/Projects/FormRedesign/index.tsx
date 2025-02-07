import { FC } from 'react';
import Header from '../components/Header';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationBar';

const ShopConstructor: FC = () => {
  return (
    <>
      <Header 
        image='Form/form-header.png'
      />
    
      <main className='work'>
        <Image image='Form/form-issue.png'/>
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
