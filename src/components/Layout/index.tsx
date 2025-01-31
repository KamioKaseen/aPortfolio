import { ReactNode } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';
import style from './style.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.layout}>
      <Navigation />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
