import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationRouting';

const DailyUI: FC = () => {
 
  return (
    <>
      <Header 
        backgroundImage='url(daily-ui/daily-ui-header.webp)'
      />
    
      <main className='work'>
        <Image image='daily-ui/daily-ui-login.webp'/>
        <Image image='daily-ui/daily-ui-social-network.webp'/>
        <Image image='daily-ui/daily-ui-music.webp'/>
        <Image image='daily-ui/daily-ui-calculator.webp'/>

        <NavigationBar />
      </main>
      
    </>
  )
}

export default DailyUI;