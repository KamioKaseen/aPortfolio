import { FC } from "react";  
import styles from "./style.module.scss";

export interface ContentProps {  
  title?: string;  
  subTitle?: string;  
  bodyText?: string[];
  groupText?: { title: string; text: string }[];
  listTitle?: string;
  listItems?: string[];
}  

const Content: FC<ContentProps> = ({   
    title, 
    subTitle,   
    bodyText,
    groupText = [], 
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
        {bodyText && 
          <div>
            {bodyText.map((text, index) => {
            return <p key={index} className={styles.content__text}>{text}</p>
          })}
          </div>
        }
        
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

        {groupText.length > 0 && (
          <div className={styles.group}>  
            {groupText.map(({title, text}, index) => (
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
