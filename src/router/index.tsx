import { HashRouter as Router, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import NoiseBackground from '../background';
import { useEffect } from 'react';
// import CursorFollower from '../shared/cursor';
import AnimatedRoutes from '../components/AnimatedRoutes';

const titles = {  
    '/': 'Алина Воронкова',  
    '/ony': "Ony",  
    '/candidate-lk': 'Личный кабинет кандидата',  
    '/daily-ui': 'Daily UI',  
    '/pocketbook': 'Pocketbook',  
    '/redesign': 'Редизайн основных страниц',  
    '/client-lk': 'Личный кабинет клиента',  
    '/shop-constructor': 'Конструктор интернет-магазинов',  
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
        {/* <CursorFollower /> */}
        <Layout>  
            <NoiseBackground />  
            <TitleHandler />  
            <AnimatedRoutes />
        </Layout>  
        </Router>  
    )
}  

export default AppRouter;  