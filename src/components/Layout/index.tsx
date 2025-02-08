import { ReactNode } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navigation />
        <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
