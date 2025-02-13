import React from "react";
import AppRouter from './router';
// import { AnimatePresence } from "framer-motion";
import './styles/global.scss';
// import Loader from './shared/loader';
// import preloadImages from "./utils/preLoadImages";

const App: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const images = [
//       "Baikal/baikal-back.webp",
//       "Baikal/botel.webp",
//       "DailyUI/dailyUI.webp",
//       "DailyUI/dailyUI-back.webp",
//       "Form/form.webp",
//       "Form/form-phone.webp",
//       "/images/img2.jpg",
//       "Issue-tracker/issue-tracker.webp",
//       "Issue-tracker/issue-tracker-phone.webp",
//       "Knowledge-base/knowledge-base.webp",
//       "Knowledge-base/knowledge-base-phone.webp",
//       "Ony/mountain.webp",
//       "Ony/phone.webp",
//       "Profile/profile.webp",
//       "Shop-constructor/shop-constructor.webp",
//     ];

//     preloadImages(images)
//       .then(() => {
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
      
//         setIsLoading(false);
//       });
//   }, []);

  return (
    <>
      {/* <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      {!isLoading && <AppRouter />} */}
      <AppRouter />
    </>
  );
};

export default App;


