import { ReactNode } from 'react';
import { Navigation, Footer } from '@components';

export function Layout({ children }: { children: ReactNode }) {  
  return (  
    <>  
      <div id="modal-root" />  
      <Navigation />  
      {children}
      <Footer />  
    </>  
  );  
};  

