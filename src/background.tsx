import { useEffect, useRef } from "react";

const NoiseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const pixelSize = 2.5; // Размер пикселя шума (чем больше, тем крупнее шум)

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = Math.ceil(window.innerWidth / pixelSize);
      const height = Math.ceil(window.innerHeight / pixelSize);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx?.scale(dpr, dpr);
    };

    const generateNoise = () => {
        if (!ctx) return;
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const buffer = new Uint32Array(imageData.data.buffer);
      
        for (let i = 0; i < buffer.length; i++) {
          const r = Math.random() * 155; // Красный
          const g = Math.random() * 155; // Зеленый
          const b = Math.random() * 155; // Синий
      
          buffer[i] = (255 << 24) | (r << 16) | (g << 8) | b; // Формируем цветной пиксель
        }
      
        ctx.putImageData(imageData, 0, 0);
      };

    let animationFrame: number;
    let lastUpdate = performance.now();

    const loop = () => {
      const now = performance.now();
      if (now - lastUpdate > 90) { // Обновляем шум раз в 50 мс
        generateNoise();
        lastUpdate = now;
      }
      animationFrame = requestAnimationFrame(loop);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    loop();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.15, // Регулируй уровень шума
        imageRendering: "pixelated", // Увеличивает пиксели без размытия
      }}
    />
  );
};

export default NoiseBackground;
