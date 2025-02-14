import { ReactNode, useRef,} from 'react';  
import { FC } from "react";  
import styles from './style.module.scss';  
import { motion } from 'framer-motion';  

export interface MotionWrapperProps {  
  children: ReactNode;  
  onAnimationComplete: () => void;
}  

const MotionWrapper: FC<MotionWrapperProps> = ({ children, onAnimationComplete }) => {  
  // const [isLoaded, setIsLoaded] = useState(false);  
  const contentRef = useRef<HTMLDivElement>(null);  

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

  return (  
    <>  
      <motion.div   
        className={styles.wrapper}  
        initial={{ scaleY: 2 }}
        // animate={{ scaleY: isLoaded ? 0 : 2 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 2 }}
        transition={{  
          duration: 1,  
          ease: 'easeInOut',  
        }}  
        onAnimationComplete={onAnimationComplete}
      />  
      <div ref={contentRef}>  
        {children}
      </div>  
    </>  
  );  
};  

export default MotionWrapper;