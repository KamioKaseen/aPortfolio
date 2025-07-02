import styles from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { BackButton, ButtonLink } from '@shared';
import { useIconToggle } from './Navigation.service';
import PhotoIcon from '@assets/icons/photo.svg?react';
import MailIcon from '@assets/icons/mail.svg?react';
import { useBreakpoints } from '@utils';

export function Navigation () {
  const {pathname} = useLocation();
  // const scrollPosition = useScrollPosition();
  const { showAlternateIcon, handleIconChange } = useIconToggle(pathname);

  const { isDown } = useBreakpoints()

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
      <p className={styles.navigation__list}>
        ПРИВЕТ, МЕНЯ ЗОВУТ АЛИНА<br>
        </br>Я UI/UX ДИЗАЙНЕР
      </p>

      <ul className={styles.navigation__list}>
        <div className={styles.navigation__group}>
          <li>
            <a href="https://docs.google.com/document/d/1RYpjw79RMxLphci1BVQrnaw7TsHP2MMF14Mre9m0VtM/edit?tab=t.0">CV</a>
          </li>
          <li>
            <a href="mailto:kisialin@gmail.com">KISIALIN@GMAIL.COM</a>
          </li>
        </div>
        
        <li className={styles.navigation__telegram}>
          <PhotoIcon width={24} height={24}></PhotoIcon>
          <a href="https://t.me/noytox1c">TELEGRAM</a>
        </li>
      </ul>

      <p className={styles.navigation__title}>МОИ РАБОТЫ</p>
    </nav>
  )
};

{/* <div className={styles.navigation__contacts}>
          <li>
            <ButtonLink href="https://docs.google.com/document/d/1RYpjw79RMxLphci1BVQrnaw7TsHP2MMF14Mre9m0VtM/edit?tab=t.0">
              <p>CV</p>
            </ButtonLink>
          </li>

          <li>
            {!isDown('md') 
              ?
              <ButtonLink href="mailto:kisialin@gmail.com">
                <p>kisialin@gmail.com</p>
              </ButtonLink>
              :
              <ButtonLink href="mailto:kisialin@gmail.com">
                <MailIcon height={25} width={25} />
              </ButtonLink>
            }
            <Link to="/">
          {showAlternateIcon ? (
            <BackButton onClick={handleIconChange} />
            ) : (
              <PhotoIcon width={32} height={32}></PhotoIcon>
            )}
          </Link>
          </li>
        </div> */}