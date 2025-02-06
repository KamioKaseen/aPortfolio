import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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


const AppRouter = () => (
    <Router>
        <Layout>
            <NoiseBackground />
            <ScrollToTop />
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
        </Layout>
    </Router>
);

export default AppRouter;
