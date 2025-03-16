import { HashRouter as Router, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import NoiseBackground from '../background';
import { useEffect } from 'react';
import AnimatedRoutes from '../components/AnimatedRoutes';

const titles = {  
  '/': 'Алина Воронкова',  
  '/ony': "Ony",  
  '/candidate-lk': 'Личный кабинет кандидата',    
  '/client-lk': 'Личный кабинет клиента',  
};  

const TitleHandler = () => {  
  const location = useLocation();    

  useEffect(() => {  
    const title = titles[location.pathname as keyof typeof titles] || 'Default Title';  
    document.title = title;   
  }, [location]);

  return null;  
};  

const AppRouter = () => {
  return (
    <Router>
    <Layout>  
      <NoiseBackground />  
      <TitleHandler />  
      <AnimatedRoutes />
    </Layout>  
    </Router>  
  )
}  

export default AppRouter;  