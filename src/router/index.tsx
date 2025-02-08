import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from '../shared/scrollToTop';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import NoiseBackground from '../background';
import Ony from '../pages/Projects/Ony';
import Form from '../pages/Projects/FormRedesign';
import DailyUI from '../pages/Projects/DailyUI';
import IssueTracker from '../pages/Projects/IssueTracker';
import ShopConstructor from '../pages/Projects/ShopConstructor';
import Baikal from '../pages/Projects/LegengOfBaikal';
import KnowledgeBase from '../pages/Projects/KnowledgeBase';
import Profile from '../pages/Projects/Profile';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

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

const AppRouter = () => (  
    <Router>  
        <Layout>  
            <NoiseBackground />  
            <ScrollToTop />  
            <TitleHandler />  
            <AnimatePresence mode="sync">  
                <Routes>  
                    <Route path="/" element={<Home />} />  
                    <Route path="/ony" element={<Ony />} />  
                    <Route path="/form-redesign" element={<Form />} />  
                    <Route path="/dailyui" element={<DailyUI />} />  
                    <Route path="/issue-tracker" element={<IssueTracker />} />  
                    <Route path="/shop-constructor" element={<ShopConstructor />} />  
                    <Route path="/baikal" element={<Baikal />} />  
                    <Route path="/knowledge-base" element={<KnowledgeBase />} />  
                    <Route path="/profile" element={<Profile />} />  
                </Routes>  
            </AnimatePresence>  
        </Layout>  
    </Router>  
);  

export default AppRouter;  