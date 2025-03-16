import AppRouter from './router';
import { AnimatePresence } from "framer-motion";
import './styles/global.scss';

const App = () => {
  return (
    <>
      <AnimatePresence mode="sync">
        <AppRouter />
      </AnimatePresence>
    </>
  );
};

export default App;


