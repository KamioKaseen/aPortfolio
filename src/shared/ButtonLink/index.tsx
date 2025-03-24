import styles from './style.module.scss';
import LinkIcon from '@assets/icons/link.svg?react';

interface ButtonLinkProps {
  href: string;
  text: string;
}

export function ButtonLink({href, text}: ButtonLinkProps) {
  return (
    <a 
      className={styles.link}
      href={href}
      target='_blank' 
      rel="noopener noreferrer"
    >
      <span>
        {text}
      </span>

      <LinkIcon width={20} height={20} />
    </a>
  )
}
