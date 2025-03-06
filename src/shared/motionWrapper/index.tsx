import { ReactNode } from 'react';  
import { FC } from "react";  
import styles from './style.module.scss';  
import { motion } from 'framer-motion';  
export interface MotionWrapperProps {  
  children: ReactNode;  
  onAnimationComplete: () => void;
}  

const MotionWrapper: FC<MotionWrapperProps> = ({ children, onAnimationComplete }) => {  
  return (  
    <>  
      <motion.div   
        className={styles.wrapper}  
        initial={{ height: '105vh' }}
        // animate={{ scaleY: isLoaded ? 0 : 2 }}
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

  // const [isLoaded, setIsLoaded] = useState(false);  

 // useEffect(() => {  
  //   const checkImagesLoaded = () => {  
  //     if (!contentRef.current) {  
  //       setIsLoaded(true);  
  //       return;  
  //     }  
  //     const images = contentRef.current.querySelectorAll('img');  
  //     const promises = Array.from(images).map(img => {  
  //       if (img.complete) return Promise.resolve();  
  //       return new Promise(resolve => {  
  //         img.addEventListener('load', resolve);  
  //         img.addEventListener('error', resolve);  
  //       });  
  //     });  
  //     Promise.all(promises).then(() => {  
  //       setIsLoaded(true);  
  //     });  
  //   };  

  //   const timeoutId = setTimeout(checkImagesLoaded, 100);  

  //   return () => clearTimeout(timeoutId);  
  // }, [children]);  