import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';  
import { AnimatePresence } from 'framer-motion';
import NAV_ITEMS from '../../data/navigationItems.json';
import MotionWrapper from '../../shared/motionWrapper';  
import ScrollToTop from '../../shared/scrollToTop';
import Home from '../../pages/Home';  
import ClientLK from '../../pages/Projects/ClientLK';
import CandidateLK from '../../pages/Projects/СandidateLK';
import Ony from '../../pages/Projects/Ony';
import NavigationWork from '../../shared/navigationWork';

const routes = [  
    { path: "/", element: <Home /> },  
    { path: "/client-lk", element: <ClientLK /> },  
    { path: "/ony", element: <Ony /> },  
    { path: "/candidate-lk", element: <CandidateLK /> },  
    
];  

const AnimatedRoutes = () => {  
  const { pathname } =  useLocation()
  const location = useLocation();
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

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
                  <MotionWrapper onAnimationComplete={handleAmination}>
                    <ScrollToTop/>
                    {element}
                    <NavigationWork navigationItems={NAV_ITEMS} isVisible={isAnimationComplete} />              
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
