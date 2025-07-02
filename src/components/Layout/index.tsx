import { ReactNode } from 'react';
import { Navigation, Footer } from '@components';

export function Layout({ children }: { children: ReactNode }) {  
  return (  
    <>  
      <Navigation />  
      {children}
      {/* <Footer />   */}
    </>  
  );  
};  

