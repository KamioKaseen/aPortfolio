import AppRouter from './router';
import './styles/global.scss';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./loader.scss";

// Функция для предварительной загрузки изображений
function preloadImages(imageUrls: string[]): Promise<void[]> {
    return Promise.all(
      imageUrls.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Failed to load image ${src}`));
        });
      })
    );
  }
  
  const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Соберите список всех URL изображений, которые используются на странице
      const images = [
        "Baikal/baikal-back.webp",
        "Baikal/botel.webp",
        "DailyUI/dailyUI.webp",
        "DailyUI/dailyUI-back.webp",
        "Form/form.webp",
        "Form/form-phone.webp",
        "/images/img2.jpg",
        "Issue-tracker/issue-tracker.webp",
        "Issue-tracker/issue-tracker-phone.webp",
        "Knowledge-base/knowledge-base.webp",
        "Knowledge-base/knowledge-base-phone.webp",
        "Ony/mountain.webp",
        "Ony/phone.webp",
        "Profile/profile.webp",
        "Shop-constructor/shop-constructor.webp",
      ];
  
      preloadImages(images)
        .then(() => {
          // Когда все изображения загрузятся, скрываем лоадер
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          // В случае ошибки можно также скрыть лоадер или обработать ошибку
          setIsLoading(false);
        });
    }, []);
  
    return (
      <>
        <AnimatePresence>
          {isLoading && <Loader key="loader" />}
        </AnimatePresence>
        {!isLoading && <AppRouter />}
      </>
    );
  };
  
  export default App;

const Loader: React.FC = () => {
  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Пример спиннера */}
      <div className="spinner" />
    </motion.div>
  );
};

