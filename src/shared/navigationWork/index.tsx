import { FC, useEffect, useState } from "react";  
import styles from './style.module.scss';  
import classNames from 'classnames';  
import { useLocation } from "react-router-dom";
import { scrollToId } from "../../utils/scrollToId";
import { useBreakpoints } from "../../utils/use-breackpoints";

export interface NavigationWorkProps {  
  navigationItems: { id: string, label: string }[];
}  

const NavigationWork: FC<NavigationWorkProps> = ({ navigationItems }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();
  const { isDown } = useBreakpoints();

  const projectName = navigationItems[pathname];
  const website = projectName?.find(e => e.address);

  useEffect(() => {
    if (isDown("md")) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isDown("md")]);

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };

  if (!projectName || projectName.length === 0) return null;

  return (  
    <div className={styles.navigation}>
      {isOpen && (
        <div className={styles.navigation__links}>  
          {projectName.map(({ id, label }, index) => (  
            <button   
              key={`${pathname}${index}`}   
              className={styles.navigation__link}   
              onClick={() => scrollToId(`#${id}`)}
            >  
              {label}  
            </button>  
          ))}  
        </div>  
      )}  
      
      {isDown("md") && ( 
        <button 
          className={styles.navigation__openButton}
          onClick={handleOpen}
        >
          {isOpen ? 'Закрыть' : 'Навигация'}
        </button>
      )}
      
      {website?.address && website.address !== "#" && (
        <a 
          href={website.address} 
          target="_blank" 
          rel="noopener noreferrer"
          className={classNames(styles.navigation__siteLink, styles.navigation__link)}
        >
          Посетить сайт
        </a>  
      )}
    </div>  
  );  
};  

export default NavigationWork;
