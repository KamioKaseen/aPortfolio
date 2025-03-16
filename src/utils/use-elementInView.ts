import { useEffect, useState } from "react";

const useElementInView = (id: string) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -20px 0px" } // Можно настроить
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);

  return isVisible;
};

export default useElementInView;
