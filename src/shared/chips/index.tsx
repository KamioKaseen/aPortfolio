import { ReactNode } from 'react';  
import { FC } from 'react';  
import styles from './style.module.scss';  
import classNames from 'classnames';

export interface ChipsProps {  
  children: ReactNode;  
  className?: string; 
  color?: string; 
  borderCicle?: boolean;
}  

const Chips: FC<ChipsProps> = ({ children, className = '', color, borderCicle=false }) => {  
  return (  
    <div 
      className={classNames(styles.chips, className)}
      style={{
        color: color,
        borderRadius: borderCicle ? '50%' : '3.5rem'
      }}
    >  
      {children}  
    </div>  
  );  
};  

export default Chips;