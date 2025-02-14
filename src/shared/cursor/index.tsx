import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 90, damping: 15 };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        zIndex: 1111,
        position: 'fixed',
        top: 0,
        left: 0,
        width: 55,
        height: 55,
        borderRadius: '50%',
        backgroundColor: 'gray',
        x: x,
        y: y,
        pointerEvents: 'none',
      }}
    />
  );
}

export default CursorFollower;
