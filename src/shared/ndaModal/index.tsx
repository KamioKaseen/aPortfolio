import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";
import styles from './style.module.scss';
import { createPortal } from "react-dom";
import LeftIcon from "../leftIcon";
import classNames from "classnames";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const dropIn = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.3 } },
  exit: { x: "100%", transition: { duration: 0.2 } },
};

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {

  const handleSubmit = (e) => {
    console.log(e.value);

    
  }

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onMouseDown={onClose}
        >
          <motion.div 
            className={styles.modal} 
            variants={dropIn} 
            initial="hidden" 
            animate="visible" 
            exit="exit"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button className={styles.modal__backButton} onMouseDown={onClose}>
              <LeftIcon className={styles.modal__back} />
            </button>

            <form className={styles.modal__form} onSubmit={handleSubmit}>
              <img src="/Icons/blur-photo.svg" alt="blur-photo" className={styles.modal__photo} />

              <div className={styles.modal__block}>
                <p className={styles.modal__text} style={{ fontSize: 24,fontWeight: 600}}>Введите пароль</p>
                <p className={styles.modal__text}>Это проект, защищенный NDA, для доступа 
                вам необходим пароль</p>
              </div>

              <div className={styles.modal__block}>
                <input className={styles.modal__input} type="text" placeholder="*****"/>
                <button className={classNames(styles.modal__button, styles.modal__continue)}>Продолжить</button>
              </div>

              <p className={styles.modal__text}>Или свяжитесь со мной</p>

              <div className={styles.modal__block}>
                <button className={classNames(styles.modal__button, styles.modal__bgGray)}>kisialin@gmail.com</button>
                <button className={classNames(styles.modal__button, styles.modal__bgGray)}>Telegram</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>, 
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
