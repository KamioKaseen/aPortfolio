import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationBar';

const DailyUI: FC = () => {
 
  return (
    <>
      <Header 
        backgroundImage='url(DailyUI/dailyUI-header.webp)'
      />
    
      <main className='work'>
        <Image image='DailyUI/dailyUI-content.webp'/>
        <NavigationBar />
      </main>
      
    </>
  )
}

export default DailyUI;