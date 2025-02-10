import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

const routes = [
  {
    route: "/ony",
    name: "Ony",
    image: "Preview/ony-preview.webp",
  },
  {
    route: "/form-redesign",
    name: "Редизайн, увеличивший конверсию",
    image: "Preview/form-preview.webp",
  },
  {
    route: "/dailyui",
    name: "DailyUI",
    image: "Preview/form-preview.webp",
  },
  // {
  //   route: "/issue-tracker",
  //   name: "Клиентский модуль в трекере задач",
  //   image: "Preview/form-preview.webp",
  // },
  {
    route: "/shop-constructor",
    name: "Конструктор интернет-магазинов",
    image: "Preview/shop-preview.webp",
  },
  {
    route: "/baikal",
    name: "Легенда Байкала",
    image: "Preview/baikal-preview.webp",
  },
  // {
  //   route: "/knowledge-base",
  //   name: "Корпоративная база знаний",
  //   image: "Preview/form-preview.webp",
  // },
  {
    route: "/profile",
    name: "Личный кабинет кандидата",
    image: "Preview/profile-preview.webp",
  },
];

const NavigationBar = () => {
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
    <div className={styles.navigationBar}>
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

export default NavigationBar;
