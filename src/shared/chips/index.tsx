import { ReactNode, useState } from 'react';  
import { FC } from 'react';  
import styles from './style.module.scss';  
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

export interface ChipsProps {  
  children: ReactNode;  
  className?: string; 
  color?: string; 
  borderCicle?: boolean;
}  

const Chips: FC<ChipsProps> = ({ children, className = ""}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className={classNames(styles.chips, className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={hovered ? "hover" : "default"}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          style={{fontSize: 'inherit'}}
          transition={{ duration: .2 }}
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default Chips;