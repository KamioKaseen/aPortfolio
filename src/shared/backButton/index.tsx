import { FC, useState } from "react";
import styles from './style.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import LeftIcon from "../../icons/leftIcon";
import classNames from "classnames";

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
}

const BackButton: FC<BackButtonProps> = ({ onClick, className = '' }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <button
          className={classNames(styles.back, className)}
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={styles.back__button}>
            <AnimatePresence mode="wait">
                <motion.span
                  key={hovered ? "hover" : "default"}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <LeftIcon className={styles.back__icon}/>
                </motion.span>
            </AnimatePresence>
          </div>
    </button>
  );
};

export default BackButton;

