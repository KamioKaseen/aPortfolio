import { ReactNode } from 'react';  
import styles from './style.module.scss';  
import { motion } from 'framer-motion';  

export interface MotionWrapperProps {  
  children: ReactNode;  
  onAnimationComplete: () => void;
}  

export function MotionWrapper ({ children, onAnimationComplete }: MotionWrapperProps) {  
  return (  
    <>  
      <motion.div   
        className={styles.wrapper}  
        initial={{ height: '105vh' }}
        animate={{ height: 0 }}
        exit={{ height: '105vh' }}
        transition={{  
          duration: .65,  
          ease: 'easeInOut',  
        }}  
        onAnimationComplete={onAnimationComplete}
      />  
      <div>  
        {children}
      </div>  
    </>  
  );  
};  

export default MotionWrapper;
