import { FC, useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";

export interface TemplateProps {
  columns: string[];
  rows: string[][];
  draggable: boolean;
  firstColumnWidth?: string;
  lastColumnWidth?: string;
  itemMaxWidth?: string;
}

const Table: FC<TemplateProps> = ({ draggable, firstColumnWidth, itemMaxWidth, lastColumnWidth, columns, rows }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const motionProps = {  
    ref: gridRef,  
    drag: draggable ? 'x' : false,  
    dragConstraints: constraints,  
    dragElastic: 0.2,  
    dragTransition: { bounceStiffness: 100, bounceDamping: 10 },  
    whileTap: { cursor: draggable ? "grabbing" : "default"},  
    whileHover: { cursor: draggable ? "grabbing" : "default"},  
};  

  const tableStyle = {  
    gridTemplateColumns: `repeat(${columns.length}, auto)`, // Для основного стиля  
  };  
  
  const tableCustomStyle = {  
    gridTemplateColumns: `${firstColumnWidth} repeat(${columns.length - 2}, auto) ${lastColumnWidth}`, // Для кастомного стиля  
  };  


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
        {...motionProps}
        className={styles.gridContainer__grid}
        style={firstColumnWidth ? tableCustomStyle : tableStyle}
      >
        {columns.map((title, index) => (
          <div key={index} className={classNames(styles.gridContainer__title)}>
            {title}
          </div>
        ))}

        {rows.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className={styles.gridContainer__item} style={{maxWidth: itemMaxWidth ? itemMaxWidth : '74rem'}}>
              {cell}
            </div>
          ))
        )}
      </motion.div>
    </section>
  );
};

export default Table;
