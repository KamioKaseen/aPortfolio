import { FC } from "react";  
import styles from "./style.module.scss";  

// Определение типов для элементов списка и текста  
export interface TextItem {  
  type: "text";  
  element: JSX.Element; // Может быть любой JSX элемент (в данном случае это <p>)  
}  

export interface ListItem {  
  type: "list";  
  list: JSX.Element[]; // Массив элементов списка (<li>)  
}  

// Комбинированный тип для содержимого  
export type ContentItem = TextItem | ListItem;  

// Интерфейс для Props  
export interface BodyTextItem {  
  text?: string;  
  textItem?: string;  
  title?: string; // Добавляем возможность указания заголовка  
}  

export interface ContentProps { 
  id?: string; 
  title?: string;  
  subTitle?: string;  
  bodyText?: BodyTextItem[];  
  listTitle?: string;  
  listItems?: string[];  
}  

const Content: FC<ContentProps> = ({   
    id,
    title,   
    subTitle,   
    bodyText,  
    listTitle,  
    listItems = [],  
}) => {  
  
  return (  
    <section id={id} className={styles.content}>  
      <div className={styles.content__header}>  
        {title && <h1 className={styles.content__title}>{title}</h1>}  
        {subTitle && <h3 className={styles.content__subTitle}>{subTitle}</h3>}  
      </div>  
      
      <div className={styles.content__body}>   
      {bodyText &&   
        <>  
          {bodyText.reduce((acc: ContentItem[], { text, textItem, title }, index) => {  
            const prev = acc[acc.length - 1];  
          
            if (textItem) {  
              // Если предыдущий элемент - список, добавляем новый элемент в него  
              if (prev && prev.type === "list") {  
                prev.list.push(<li key={`item_${index}`} className={styles.content__listItem}>{textItem}</li>);  
              } else {  
                // Создаем новый список и добавляем в него первый элемент  
                acc.push({ type: "list", list: [<li key={`item_${index}`} className={styles.content__listItem}>{textItem}</li>] });  
              }  
            } else {  
              // Если предыдущий элемент - текст, добавляем новый параграф с заголовком  
              if (title) {  
                const paragraphElement = (  
                  <div key={`group_${index}`} className={styles.group}>  
                    <h4 className={styles.group__title}>{title}</h4>  
                    <p className={styles.content__text}>{text}</p>  
                  </div>  
                );  
                acc.push({ type: "text", element: paragraphElement });  
              } else {  
                // Если нет заголовка, просто добавляем параграф  
                const paragraphElement = <p key={`paragraph_${index}`} className={styles.content__text}>{text}</p>;  
                acc.push({ type: "text", element: paragraphElement });  
              }  
            }  
          
            return acc;  
          }, []).map((item, i) =>  
            item.type === "text" ? item.element : <ul key={`list_${i}`} className={styles.content__list}>{item.list}</ul>  
          )}  
        </>  
      }  
        {listItems.length > 0 && (  
          <div>  
            {listTitle && <p className={styles.content__listTitle}>{listTitle}</p>}   
            <ul className={styles.content__list}>  
              {listItems.map((item, index) => (  
                <li key={index} className={styles.content__listItem}>{item}</li>  
              ))}  
            </ul>  
          </div>  
        )}  
      </div>  
    </section>  
  );  
};  

export default Content;