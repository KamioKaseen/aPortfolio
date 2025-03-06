import styles from './styles.module.scss';
import Chips from './../../shared/chips';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackButton from '../../shared/backButton';

const Navigation = () => {
  const [showAlternateIcon, setShowAlternateIcon] = useState(false);
  const {pathname} = useLocation();

  // Todo: жесткий костыль, пофикси!!!!!!!!!
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (pathname === '/') {
      timer = setTimeout(() => {
        setShowAlternateIcon(false);
      }, 300); 
    } else {
      timer = setTimeout(() => {
        setShowAlternateIcon(true);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);
  

  const handleIconChange = () => {
    setTimeout(() => {
      setShowAlternateIcon(false);
    }, 300);
  }
  
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
      <Link to="/">
      {showAlternateIcon ? (
        <BackButton onClick={handleIconChange} />
      ) : (
        <img
          className={styles.navigation__image}
          src="Icons/photo.svg"
          alt="Алина Воронкова"
        />
      )}
    </Link>

        <div className={styles.navigation__contacts}>
          <li>
            <a href="mailto:kisialin@gmail.com" target='_blank' rel="noopener noreferrer">
              <span className={styles.navigation__text}>
                <Chips>
                  kisialin@gmail.com
                </Chips>
              </span>
              
              <button className={styles.navigation__iconContainer}>
                <img src='Icons/mail.svg' alt='mail' className={styles.navigation__icon} />
              </button>
            </a>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/1SuNP2SE_l5Ks4G76O0Ra-Wo_VHuF0IB0/view" target='_blank' rel="noopener noreferrer">
              <Chips>Резюме</Chips>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navigation;