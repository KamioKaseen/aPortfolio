import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Projects from '../pages/Projects';
import NoiseBackground from '../background';

const AppRouter = () => (
    <Router>
        <Layout>
            <NoiseBackground />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Layout>
    </Router>
);

export default AppRouter;
