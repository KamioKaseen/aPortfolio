import { useEffect, useState } from 'react';

interface UseBreakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const breakpoints: UseBreakpoints = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};

export function useBreakpoints() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDown = (breakpoint: keyof UseBreakpoints): boolean => {
    const size = breakpoints[breakpoint];
    return windowSize.width < size;
  };

  return { isDown };
}
