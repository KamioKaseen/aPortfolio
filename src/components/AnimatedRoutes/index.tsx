import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';  
import { AnimatePresence } from 'framer-motion';
import MotionWrapper from '../../shared/motionWrapper';  
import ScrollToTop from '../../shared/scrollToTop';
import Home from '../../pages/Home';  


const routes = [  
    { path: "/", element: <Home /> },  
    // { path: "/ony", element: <Ony /> },  
    // { path: "/candidate-lk", element: <CandidateLK /> },  
    // { path: "/daily-ui", element: <DailyUI /> },  
    // { path: "/client-lk", element: <ClientLK /> },  
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
