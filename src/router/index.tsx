import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Projects from '../pages/Projects';
import NoiseBackground from '../background';
import Ony from '../pages/Projects/Ony';

const AppRouter = () => (
    <Router>
        <Layout>
            <NoiseBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ony" element={<Ony />} />
            </Routes>
        </Layout>
    </Router>
);

export default AppRouter;
