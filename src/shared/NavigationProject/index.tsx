import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { scrollToId } from "../../utils/scrollToId";
import { useBreakpoints } from "../../utils/use-breackpoints";
import { useFooterVisibility } from "../../utils/useFooterVisibility";
import ArrowIcon from "../../icons/arrowIcon";
import { motion } from "framer-motion";

export interface NavItem {
  id: string;
  label: string;
}

export interface NavigationProjectProps {
  navigationItems: Record<string, { anchors: NavItem[]; address?: string }>;
  isVisible: boolean;
}

export function NavigationProject ({ navigationItems, isVisible }: NavigationProjectProps) {
  const [isOpen, setIsOpen] = useState(true);
  const shouldHide = useFooterVisibility(100);
  const { pathname } = useLocation();
  const { isDown } = useBreakpoints();
  
  const currentProject = navigationItems[pathname];
  const website = currentProject?.address;
  
  const isMobile = isDown("md");

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  if (!currentProject) return null;

  return (
    <motion.div
      className={styles.navigation}
      initial={{ y: 90, x: '-50%' }}
      animate={{ y: isVisible && !shouldHide ? -10 : 90 }}
      exit={{ y: 90 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      <motion.div 
        className={styles.navigation__buttonGroup}>
        {isOpen && currentProject.anchors.length != 0 && (
          <motion.div 
            className={styles.navigation__links}
            initial={{opacity: isDown('sm') ? 0 : 1 , y: 0, }}
            animate={{opacity: 1, y: isDown('sm') ? -10 : 0 }}
            exit={{opacity: isDown('sm') ? 0 : 1 , y: 0, }}
            transition={{
            duration: .6,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 10
        }}
          >
            {currentProject.anchors.map(({ id, label }, index) => (
              <button
                key={`${pathname}${id}${index}`}
                className={styles.navigation__link}
                onClick={() => {
                  scrollToId(`#${id}`);
                  if (isDown("md")) {
                    setIsOpen(false);
                  }
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}

        {isDown("md") && (
          <button
            className={styles.navigation__openButton}
            onClick={handleOpen}
          >
            Разделы
          </button>
        )}
      </motion.div>

      {website && website !== "#" && (
        <motion.a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames(
            styles.navigation__siteLink,
            styles.navigation__link
          )}
        >
          {!isDown("md") ? "Посетить сайт" : <ArrowIcon className={styles.navigation__icon} />}
        </motion.a>
      )}
    </motion.div>
  );
};

