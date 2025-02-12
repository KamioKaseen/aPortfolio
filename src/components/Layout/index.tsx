import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import NAV_ITEMS from '../../data/navigationItems.json';
import Footer from '../Footer';
import Navigation from '../Navigation';
import NavigationWork from '../../shared/navigationWork';

const Layout = ({ children }: { children: ReactNode }) => {  
  const { pathname } = useLocation();  

  return (  
    <>  
      <div id="modal-root" />  
      <Navigation />  
      <>
        {children}
      </>  
      {pathname !== '/' && <NavigationWork navigationItems={NAV_ITEMS} />}
      <Footer />  
    </>  
  );  
};  

export default Layout;  