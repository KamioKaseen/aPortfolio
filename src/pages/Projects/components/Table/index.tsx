import { FC, useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export interface TemplateProps {
  columns: string[];
  rows: string[][];
}

const Table: FC<TemplateProps> = ({ columns, rows }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && gridRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gridWidth = gridRef.current.scrollWidth;

        if (gridWidth > containerWidth) {
          setConstraints({ left: -(gridWidth - containerWidth), right: 0 });
        } else {
          setConstraints({ left: 0, right: 0 });
        }
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [columns, rows]);

  return (
    <section ref={containerRef} className={styles.gridContainer}>
      <motion.div
        ref={gridRef}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        whileTap={{ cursor: "grabbing" }}
        className={styles.gridContainer__grid}
        style={{
          gridTemplateColumns: `repeat(${columns.length}, auto)`,
        }}
      >
        {columns.map((title, index) => (
          <div key={index} className={styles.gridContainer__title}>
            {title}
          </div>
        ))}

        {rows.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className={styles.gridContainer__item}>
              {cell}
            </div>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default Table;
