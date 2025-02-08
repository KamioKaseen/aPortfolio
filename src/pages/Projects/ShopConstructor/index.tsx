import { FC, useEffect } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
// import Content from '../components/Content';
// import Image from '../components/Image';
// import Table from '../components/Table';
import NavigationBar from '../../../shared/navigationBar';

// const columns = ["Кто", "Возраст", "Описание", "Как выбирают", "Что выбирают", "Почему покупают"];  
// const rows = [  
//   [  
//     "Малый и средний бизнез",   
//     "30-45",   
//     "Владельцы и менеджеры небольших магазинов, торгующих физическими товарами (одежда, электроника, аксессуары).",   
//     "Ориентируются на простоту настройки, наличие шаблонов, и возможность интеграции с доставкой и оплатой.",  
//     "Shopify (простота настройки), Tilda (гибкость дизайна), Wix (удобные шаблоны).",  
//     "Быстрое и удобное создание интернет-магазина с минимальными затратами на дизайн.",    
//   ],  
//   [  
//     "Максим",   
//     "20-35",   
//     "Молодые предприниматели, использующие дропшиппинг для заработка на популярных платформах.",   
//     "Ищут интеграцию с поставщиками, удобное управление каталогом и маркетинговые инструменты.",  
//     "Oberlo (интеграция с дропшиппингом), Shopify (управление каталогами), WooCommerce (гибкость настройки).",  
//     "Легкий старт бизнеса и минимизация рисков на начальном этапе.",  
//   ],  
//   [  
//     "Ольга",   
//     "20-50",   
//     "Владельцы уникальных продуктов или брендов, которые ищут платформу для создания индивидуального сайта.",   
//     "Упор на возможность кастомизации дизайна, чтобы подчеркнуть уникальность бренда.",  
//     "Squarespace (визуальная кастомизация), Shopify Plus (мультиязычность), WordPress с Elementor (гибкий дизайн).",  
//     "Желание выделиться на фоне конкурентов и отразить ценности бренда в дизайне.",  
//   ],  
// ];

const ShopConstructor: FC = () => {
  useEffect(() => {  
    window.scrollTo(0, 0);
  });  

  return (
    <>
      <Header 
        image='Shop-constructor/constructor-header.webp'
      />
    
      <main className='work'>
        {/* <Content title='Конструктор инернет-магазинов'>
          <p className='description'>Универсальный конструктор сайтов, охватывающий весь спектр необходимых функций 
          для e-commerce.  Включает широкий набор блоков, а также предоставляет пользователям возможность настроить визуальные элементы сайта (иконки, кнопки, закругления).</p>

          <p className='title'>Пользователи</p>
          <p className='description'>Владельцы среднего и малого бизнеса, которые не хотят тратить ресурсы на полноценную разработку</p>

          <p className='title'>Дизайн-система</p>
          <p className='description'>Создала полноценную вариативную дизайн-систему</p>
        </Content>
        <Image image='Shop-constructor/constructor-chair.webp'/>
        <Table draggable={true} columns={columns} rows={rows} itemMaxWidth='60rem'/>
        <Image image='Shop-constructor/constructor-sales.webp'/>
        <Image image='Shop-constructor/constructor-main-сontent.webp'/>
        <Content >
          <p className='title'>Пользователи</p>
          <p className='description'>Пользователи могут менять цвета, шрифты, размеры кнопок, а также радиус закруглений элементов, чтобы сайт соответствовал их бренду 
          и стилю</p>
        </Content>
        <Image image='Shop-constructor/constructor-color.webp'/>
        <Content subTitle='Что можно улучшить?'>
          <ul>
            <li className='description'>Расширить аудиторию, предложив больше вариантов креативных блоков для главной страницы и баннеров</li>
            <li className='description'>Реализовать интеграцию с дропшиппинг-сервисами для упрощения работы пользователей</li>
            <li className='description'>Увеличить выборку участников для интервью</li>
            <li className='description'>Разработать мобильный адаптив для оверлея настройки сайта</li>
          </ul>
        </Content> */}
        <NavigationBar />
      </main>
    </>
  )
}

export default ShopConstructor;

// const pageVariants = {
//   initial: { opacity: 1, y: "100%" }, // Начинает внизу
//   animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }, // Поднимается плавно
//   exit: { opacity: 0, y: "100%" }, // Начинает внизу
// };
