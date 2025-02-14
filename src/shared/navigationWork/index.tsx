import { FC, useEffect, useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { scrollToId } from "../../utils/scrollToId";
import { useBreakpoints } from "../../utils/use-breackpoints";
import ArrowIcon from "../arrowIcon";
import { motion } from "framer-motion";
import useElementInView from "../../utils/use-elementInView";

export interface NavItem {
  id: string;
  label: string;
}

export interface NavigationWorkProps {
  navigationItems: Record<string, { anchors: NavItem[]; address?: string }>;
  isVisible: boolean;
}

const NavigationWork: FC<NavigationWorkProps> = ({ navigationItems, isVisible }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();
  const { isDown } = useBreakpoints();
  const isFooterInView = useElementInView("navRouting");

  const currentProject = navigationItems[pathname];
  const website = currentProject?.address;

  useEffect(() => {
    if (isDown("md")) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isDown("md")]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  if (!currentProject) return null;

  return (
    <motion.div
      className={styles.navigation}
      initial={{ y: 100, x: '-50%' }}
      animate={{y: isVisible ? -10 : 0 }}
      exit={{ y: 100, }}
      transition={{
        duration: 1,
        delay: .6,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
    >
      <motion.div 
        animate={{ opacity: isFooterInView ? 0 : 1, }}
        transition={{ duration: 0.3 }}
        className={styles.navigation__buttonGroup}>
        {isOpen && (
          <div className={styles.navigation__links}>
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
          </div>
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
          animate={{ opacity: isFooterInView ? 0 : 1, }}
          transition={{ duration: 0.3 }}
        >
          {!isDown("md") ? "Посетить сайт" : <ArrowIcon className={styles.navigation__icon} />}
        </motion.a>
      )}
    </motion.div>
  );
};

export default NavigationWork;
