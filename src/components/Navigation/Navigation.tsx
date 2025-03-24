import styles from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { BackButton, ButtonLink } from '@shared';
import PhotoIcon from '@assets/icons/photo.svg?react';
import { useIconToggle } from './Navigation.service';

export function Navigation () {
  const {pathname} = useLocation();
  // const scrollPosition = useScrollPosition();
  const { showAlternateIcon, handleIconChange } = useIconToggle(pathname);

  // const changeNavStyles = () => {
  //   if(scrollPosition != 0 || pathname != '/') {
  //     return (
  //       {
  //         opacity: 0
  //       }
  //     )
  //   }
  //   else {
  //     return(
  //       {
  //         opacity: 1
  //       }
  //     )
  //   }
  // }
  
  return (
    <nav 
      className={classNames(styles.navigation, 'container')}
    >
      <ul 
        className={styles.navigation__list}
      >
        <Link to="/">
          {showAlternateIcon ? (
            <BackButton onClick={handleIconChange} />
          ) : (
            <PhotoIcon width={32} height={32}></PhotoIcon>
          )}
        </Link>

        <div className={styles.navigation__contacts}>
          <li>
            <ButtonLink 
              href="https://docs.google.com/document/d/1RYpjw79RMxLphci1BVQrnaw7TsHP2MMF14Mre9m0VtM/edit?tab=t.0" 
              text="CV" 
            />
          </li>

          <li>
            <ButtonLink 
              href="mailto:kisialin@gmail.com" 
              text="kisialin@gmail.com" 
            />
          </li>
        </div>
      </ul>
    </nav>
  )
};
