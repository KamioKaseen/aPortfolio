import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';  
import { AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '@data';
import { MotionWrapper, NavigationProject, ScrollToTop } from '@shared';  
import { Home, CandidateLK, Ony, ClientLK } from '@pages';  

const routes = [  
    { path: "/", element: <Home /> },  
    { path: "/client-lk", element: <ClientLK /> },  
    { path: "/ony", element: <Ony /> },  
    { path: "/candidate-lk", element: <CandidateLK /> },  
    
];  

export function AnimatedRoutes () {  
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
                    <NavigationProject navigationItems={NAV_ITEMS} isVisible={isAnimationComplete} />              
                    </MotionWrapper>
                }   
              >
              </Route> 
          ))}  
      </Routes>  
    </AnimatePresence>   
  );  
};  

