import { useState, useEffect } from 'react';

export const useFooterVisibility = (offset: number = 0) => {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (footerRect.top <= windowHeight + offset) {
        setShouldHide(true);
      } else {
        setShouldHide(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return shouldHide;
}; 