import { FC, useRef } from "react";
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

  const tableStyle = {  
    gridTemplateColumns: `repeat(${columns.length}, auto)`,
  };  
  
  const tableCustomStyle = {  
    gridTemplateColumns: `${firstColumnWidth} repeat(${columns.length - 2}, auto) ${lastColumnWidth}`,
  };  
  
  return (
    <section ref={containerRef} className={styles.gridContainer}>
      <motion.div
        drag={draggable ? 'x' : false}
        dragConstraints={containerRef} 
        dragElastic={0.2} 
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        whileTap={{ cursor: draggable ? "grabbing" : "default"}}
        whileHover={{ cursor: draggable ? "grabbing" : "default"}}
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
