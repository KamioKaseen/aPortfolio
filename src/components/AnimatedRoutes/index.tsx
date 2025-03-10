import { useState } from 'react';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';  
import { AnimatePresence } from 'framer-motion';
import NAV_ITEMS from '../../data/navigationItems.json';
import NavigationWork from '../../shared/navigationWork';
import MotionWrapper from '../../shared/motionWrapper';  
import ScrollToTop from '../../shared/scrollToTop';
import Modal from '../../shared/ndaModal';
import Home from '../../pages/Home';  
import Ony from '../../pages/Projects/Ony';  
import CandidateLK from '../../pages/Projects/СandidateLK';
import DailyUI from '../../pages/Projects/DailyUI';  
import Pocketbook from '../../pages/Projects/Pocketbook';
import Redesign from '../../pages/Projects/Redesign';
import ClientLK from '../../pages/Projects/ClientLK';
import ShopConstructor from '../../pages/Projects/ShopConstructor';

const routes = [  
    { path: "/", element: <Home /> },  
    { path: "/ony", element: <Ony /> },  
    { path: "/candidate-lk", element: <CandidateLK /> },  
    { path: "/daily-ui", element: <DailyUI /> },  
    { path: "/pocketbook", element: <Pocketbook /> },  
    { path: "/redesign", element: <Redesign /> },  
    { path: "/client-lk", element: <ClientLK /> },  
    { path: "/shop-constructor", element: <ShopConstructor /> },  
];  

const AnimatedRoutes = () => {  
  const { pathname } =  useLocation()
  const location = useLocation();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const isModalOpen = searchParams.get('modal') === 'open';

  const handleCloseModal = () => {
    const newParams = new URLSearchParams(searchParams); 
    newParams.delete('modal');
    setSearchParams(newParams, { replace: true });
  };

  const handleAmination = () => {
    setIsAnimationComplete(true)
  }
 
  return (  
    <AnimatePresence mode="wait">  
      <Routes location={location} key={pathname}>  
          {routes.map(({ path, element }, index) => (  
              <Route   
                key={index}   
                path={path}   
                element={
                  <MotionWrapper  onAnimationComplete={handleAmination}>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                    <ScrollToTop/>
                    {element}
                    {pathname !== '/' && <NavigationWork isVisible={isAnimationComplete} navigationItems={NAV_ITEMS} />}
                  </MotionWrapper>
                }   
              >
              </Route> 
          ))}  
      </Routes>  
    </AnimatePresence>   
  );  
};  

export default AnimatedRoutes;
