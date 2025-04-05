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
      className={classNames(styles.navigation)}
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
          </li>
        </div>
      </ul>
    </nav>
  )
};
