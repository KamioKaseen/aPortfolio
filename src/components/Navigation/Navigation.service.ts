import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return scrollPosition;
};

export const useIconToggle = (pathname: string) => {
  const [showAlternateIcon, setShowAlternateIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlternateIcon(pathname !== '/');
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleIconChange = () => {
    setTimeout(() => {
      setShowAlternateIcon(false);
    }, 300);
  };

  return { showAlternateIcon, handleIconChange };
};
