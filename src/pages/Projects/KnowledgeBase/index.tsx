import { FC, useEffect } from 'react';
// import { motion  } from 'framer-motion';
// import Header from '../components/Header';
import NavigationBar from '../../../shared/navigationBar';

const IssueTracker: FC = () => {
  useEffect(() => {  
    window.scrollTo(0, 0);
  });  

  return (
    <>
      {/* <Header 
        image='Shop-constructor/constructor-header.webp'
      />
     */}
      <main className='work'>
        <NavigationBar />
      </main>
    </>
  )
}

export default IssueTracker;

// const pageVariants = {
//   initial: { opacity: 1, y: "100%" }, // Начинает внизу
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }, // Поднимается плавно
//   exit: { opacity: 0, y: "100%" }, // Начинает внизу
// };
