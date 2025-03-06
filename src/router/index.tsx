import { HashRouter as Router, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import NoiseBackground from '../background';
import { useEffect } from 'react';
// import CursorFollower from '../shared/cursor';
import AnimatedRoutes from '../components/AnimatedRoutes';

const titles = {  
    '/': 'Алина Воронкова',  
    '/ony': "Ony",  
    '/form-redesign': 'Редизайн формы',  
    '/dailyui': 'Daily UI',  
    '/issue-tracker': 'Трекер задач',  
    '/shop-constructor': 'Конструктор магазинов',  
    '/baikal': 'Байкал',  
    '/knowledge-base': 'База знаний',  
    '/profile': 'Профиль пользователя',  
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