import { motion, AnimatePresence, PanInfo, useAnimationControls } from "framer-motion";
import { FC, useState } from "react";
import styles from './style.module.scss';
import { createPortal } from "react-dom";
import LeftIcon from "../leftIcon";
import classNames from "classnames";
import { useBreakpoints } from "../../utils/use-breackpoints";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  route: string;
  isOpen: boolean;
  onClose: () => void;
}

const dropIn = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.3, type: "spring"  }, },
  exit: { x: "100%", transition: { duration: 0.3, type: "spring"  }, },
};

const mobileDropIn = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 0.3, type: "spring" } },
  exit: { y: "100%", transition: { duration: 0.3, type: "spring"  }, },
};

const errorAnim = {  
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 , type: "spring" } }, 
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, type: "spring" } },   
};  

const Modal: FC<ModalProps> = ({ isOpen, onClose, route }) => {
  const [ isError, setIsError ] = useState(false);
  const { isDown } = useBreakpoints();
  const navigate = useNavigate();
  
  const handleClose = () => {
    setIsError(false)
    onClose();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();
    const password = (e.target as HTMLFormElement).password.value;

    if(password !== "505166") {
      setIsError(true)
    } else {
      navigate(route)
      setIsError(false)
    }
  };  

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100) {
      handleClose();
    }
  };

  const controls = useAnimationControls();
 
  const handleClick = () => {
    controls.start("flip");
  };


  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className={styles.modal}
            variants={isDown('lg') ? mobileDropIn : dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            {...(isDown('lg') && {
              drag: "y",
              dragConstraints: { top: 0, bottom: 200 },
              onDragEnd: handleDragEnd,
            })}
          >
            <button className={styles.modal__backButton} onClick={handleClose}>
                <LeftIcon className={styles.modal__back} />
            </button>

            <form className={styles.modal__form} onSubmit={handleSubmit}>
              <img src="Icons/blur-photo.svg" alt="blur-photo" className={styles.modal__photo} />

              <div className={styles.modal__block}>
                <p className={styles.modal__text} style={{ fontSize: 24, fontWeight: 600 }}>
                  Введите пароль
                </p>
                <p className={styles.modal__text}>
                  Это проект, защищенный NDA, для доступа вам необходим пароль
                </p>
              </div>

              <div className={styles.modal__block}>
                <input type="password" name="password" maxLength={6} className={styles.modal__input} placeholder="*****" />
                <button className={classNames(styles.modal__button, styles.modal__continue)} onClick={handleClick}>
                  Продолжить
                </button>
                {isError && 
                  <AnimatePresence>  
                    <motion.div 
                      variants={{
                        initial: {  
                          x: 0,  
                          y: 0,  
                        },  
                        flip: {  
                          x: [-15, 15, -15, 0],
                          transition: { duration: 0.3, },  
                        },
                      }} 
                      initial="initial"
                      animate={controls}
                    >
                      <motion.p   
                        variants={errorAnim}  
                        initial="hidden"  
                        animate="visible"  
                        exit="exit"  
                        className={styles.modal__error}  
                      >  
                        Неверный пароль, попробуйте еще раз  
                      </motion.p> 
                    </motion.div>
                  </AnimatePresence>}
              </div>

              <p className={styles.modal__text}>Или свяжитесь со мной</p>

              <div className={styles.modal__block}>
                <a href="mailto:kisialin@gmail.com" target="_blank" className={classNames(styles.modal__button, styles.modal__bgGray)}>kisialin@gmail.com</a>
                <a href="https://t.me/noytox1c" target='_blank' className={classNames(styles.modal__button, styles.modal__bgGray)}>Telegram</a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") ?? document.body
  );
};

export default Modal;