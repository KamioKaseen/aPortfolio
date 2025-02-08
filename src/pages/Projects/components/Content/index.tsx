import { FC } from "react";  
import styles from "./style.module.scss";  

export interface ContentProps {  
  title?: string;  
  subTitle?: string;  
  bodyText?: string;
  group?: { title: string; text: string }[];
  listTitle?: string;
  listItems?: string[];
}  

const Content: FC<ContentProps> = ({   
    title, 
    subTitle,   
    bodyText,
    group = [], 
    listTitle,
    listItems = [],
}) => {  
  
  return (  
    <div className={styles.content}>  
      
      
        <div className={styles.content__header}>  
          {title && <h1 className={styles.content__title}>{title}</h1>}  
          {subTitle && <h3 className={styles.content__subTitle}>{subTitle}</h3>}  
        </div>
      

      <div className={styles.content__body}>  
        {bodyText && <p className={styles.content__text}>{bodyText}</p>}

        {listItems.length > 0 && (
          <div>
            {listTitle && <p className={styles.content__listTitle}>{listTitle}</p> } 
            <ul className={styles.content__list}>
              {listItems.map((item, index) => (
                <li key={index} className={styles.content__listItem}>{item}</li>
              ))}
            </ul>
          </div>
          
        )}

        {group.length > 0 && (
          <div className={styles.group}>  
            {group.map(({title, text}, index) => (
              <div key={index} className={styles.group__item}>  
                <p className={styles.group__title}>{title}</p>  
                <p className={styles.group__text}>{text}</p>  
              </div>  
            ))}
          </div>
        )}
      </div>  
    </div>  
  );  
};  

export default Content;
