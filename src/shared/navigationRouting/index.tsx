import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

const routes = [
  {
    route: "/ony",
    name: "Ony",
    image: "preview/ony-preview.webp",
  },
  {
    route: "/candidate-lk",
    image: "preview/candidate-lk-preview.webp",
  },
  {
    route: "/daily-ui",
    image: "preview/daily-ui-preview.webp",
  },
  {
    route: "/pocketbook",
    image: "preview/pocketbook-preview.webp",
  },
  {
    route: "/redesign",
    image: "preview/redesign-preview.webp",
  },
  {
    route: "/client-lk",
    name: "Корпоративная база знаний",
    image: "preview/client-lk-preview.webp",
  },
  {
    route: "/shop-constructor",
    image: "preview/shop-constructor-preview.webp",
  },
];

const NavigationRouting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Ищем индекс текущего маршрута; если не найден – берём 0
  const currentIndex = routes.findIndex(route => route.route === location.pathname);
  const index = currentIndex === -1 ? 0 : currentIndex;

  // Циклическая навигация: если на первом элементе и нажимаем "назад",
  // переходим на последний, а если на последнем – переходим к первому.
  const goPrev = () => {
    const prevIndex = (index - 1 + routes.length) % routes.length;
    navigate(routes[prevIndex].route);
  };

  const goNext = () => {
    const nextIndex = (index + 1) % routes.length;
    navigate(routes[nextIndex].route);
  };

  // Для превью используем предыдущий и следующий элементы по циклу:
  const prevRoute = routes[(index - 1 + routes.length) % routes.length];
  const nextRoute = routes[(index + 1) % routes.length];

  return (
    <div id="navRouting" className={styles.navigationBar}>
      <button className={styles.navigationBar__button} onClick={goPrev}>
        <div className={styles.navigationBar__arrow}>
          <img className={styles.navigationBar__svg} src="Icons/left.svg" alt="left" />
        </div>
        <div className={styles.navigationBar__preview}>
          <img className={styles.navigationBar__img} src={prevRoute.image} alt="preview" />
        </div>
      </button>

      <button className={styles.navigationBar__button} onClick={goNext}>
        <div className={styles.navigationBar__preview}>
          <img className={styles.navigationBar__img} src={nextRoute.image} alt="preview" />
        </div>
        <div className={styles.navigationBar__arrow}>
          <img className={styles.navigationBar__svg} src="Icons/right.svg" alt="right" />
        </div>
      </button>
    </div>
  );
};

export default NavigationRouting;
