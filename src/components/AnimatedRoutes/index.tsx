import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';  
import { AnimatePresence } from 'framer-motion';  
import Home from '../../pages/Home';  
import Ony from '../../pages/Projects/Ony';  
import Form from '../../pages/Projects/FormRedesign';  
import DailyUI from '../../pages/Projects/DailyUI';  
import IssueTracker from '../../pages/Projects/IssueTracker';  
import ShopConstructor from '../../pages/Projects/ShopConstructor';  
import Baikal from '../../pages/Projects/LegengOfBaikal';  
import KnowledgeBase from '../../pages/Projects/KnowledgeBase';  
import Profile from '../../pages/Projects/Profile';  
import MotionWrapper from '../../shared/motionWrapper';  
import ScrollToTop from '../../shared/scrollToTop';
import NAV_ITEMS from '../../data/navigationItems.json';
import NavigationWork from '../../shared/navigationWork';

const routes = [  
    { path: "/", element: <Home /> },  
    { path: "/ony", element: <Ony /> },  
    { path: "/form-redesign", element: <Form /> },  
    { path: "/dailyui", element: <DailyUI /> },  
    { path: "/issue-tracker", element: <IssueTracker /> },  
    { path: "/shop-constructor", element: <ShopConstructor /> },  
    { path: "/baikal", element: <Baikal /> },  
    { path: "/knowledge-base", element: <KnowledgeBase /> },  
    { path: "/profile", element: <Profile /> },  
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
                  <MotionWrapper  onAnimationComplete={handleAmination}>
                    <ScrollToTop/>
                    {element}
                    {pathname !== '/' && <NavigationWork isVisible={isAnimationComplete} navigationItems={NAV_ITEMS} />}
                  </MotionWrapper>
                }   
              />  
          ))}  
      </Routes>  
    </AnimatePresence>   
  );  
};  

export default AnimatedRoutes;
