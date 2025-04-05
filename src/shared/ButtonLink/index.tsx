import { ReactNode } from 'react';
import styles from './style.module.scss';
import LinkIcon from '@assets/icons/link.svg?react';
import { useBreakpoints } from '@utils';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  isHaveIcon?: boolean;
  isMobile?: boolean;
}

export function ButtonLink({ href, children, isHaveIcon = true}: ButtonLinkProps) {
  const { isDown } = useBreakpoints()

  return (
    <a 
      className={styles.link}
      href={href}
      target='_blank' 
      rel="noopener noreferrer"
    >
      {children}
      {!isDown('md') && isHaveIcon && <LinkIcon width={20} height={20} />}
    </a>
  )
}
