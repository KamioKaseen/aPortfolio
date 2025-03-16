import { ReactNode } from 'react';
import Footer from '../Footer';
import Navigation from '../Navigation';

const Layout = ({ children }: { children: ReactNode }) => {  
  return (  
    <>  
      <div id="modal-root" />  
      <Navigation />  
      {children}
      <Footer />  
    </>  
  );  
};  

export default Layout;  