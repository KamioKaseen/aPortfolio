import { FC } from 'react';
// import { motion  } from 'framer-motion';
import table from '../../../data/tableShop.json';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import Table from '../components/Table';
import NavigationBar from '../../../shared/navigationRouting';

const ShopConstructor: FC = () => {
 
  return (
    <>
      <Header 
        image='Shop-constructor/constructor-header.webp'
        backgroundColor='bg-purple'
      />
    
      <main className='work'>
        <Content
          id='#about'
          title='Конструктор интернет-магазинов'
          bodyText={[
            {text: 'Конструктор сайтов, предназначенный для создания интернет-магазина.'},
            {text: 'Я разработала дизайн инструмента, который позволяет создавать современные и стильные сайты без необходимости глубоких технических.'},
            {title: 'Пользователи', text: 'Владельцы среднего и малого бизнеса, которые не хотят тратить ресурсы на полноценную разработку.'},
            {title: 'Команда', text: 'UI/UX Designer, Project Manager, frontend – разработчик, backend – разработчик'},
          ]}
        />

        <Image image='Shop-constructor/constructor-content.webp'/>
        <Content
          id='#task'
          subTitle='Задача'
          listItems={[
            'Разработать интерфейс, который позволяет даже новичкам легко создавать и настраивать сайты',
            'Создание широкого набор блоков, закрывающего потребности аудитории',
            'Возможность детальной настройки визуальных элементов для пользователей',
          ]}
        />
        <Content
          id='#benchmarking'
          subTitle='Бенчмаркинг'
          bodyText={[
            {text: 'Мы изучили существующие решения на рынке, такие как Wix, Tilda и Shopify.'},
            {text: 'Чтобы создать по-настоящему удобный и функциональный конструктор, мы провели следующие этапы:'},
            {textItem: 'Интервью с целевой аудиторией — владельцами малого бизнеса, чтобы понять их потребности и болевые точки.'},
            {textItem: 'Анализ отзывов пользователей, что помогло выделить основные проблемы и области для улучшения.'},
          ]}
        />
        <Content
          id='#analysis'
          subTitle='Анализ'
          bodyText={[{text: 'На основе проведенного конкурентного анализа я разработала сегментацию пользователей для сервиса, опираясь на ключевые болевые точки и потребности аудитории'}]}
        />
        <Table 
          draggable={true} 
          rows={table.rows} 
          columns={table.columns} 
          itemMaxWidth={'50rem'}
        />
        <Content
          id='#solutions'
          subTitle='Решения'
          bodyText={[{text: 'Поскольку проект был экспериментальным для студии, мы приняли решение сосредоточиться на разработке продукта для одного целевого сегмента на этапе MVP — представителей малого и среднего бизнеса'}]}
        />

        <Image image='Shop-constructor/constructor-catalog.webp'/>
        <Content
          bodyText={[
            {text: 'Для создания MVP мы провели тщательный анализ интернет-магазинов, которые подходят для нашей целевой аудитории. Это помогло выделить ключевые блоки и функции, которые пользователи используют чаще всего.'},
            {text: 'Чтобы убедиться, что наша структура работает, я провела серию интервью с клиентами студии. '}
          ]}
        />

        <Image image='Shop-constructor/constructor-color.webp'/>
        <Content
          id='#result'
          subTitle='Результат'
          bodyText={[
            {
              title: 'В итоге мы разработали MVP, которое включает:', 
            },
            {textItem: 'Гибкость управления блоками — пользователи могут легко перемещать или отключать элементы в зависимости от своих задач '},
            {textItem: 'Более 4 вариаций визуального оформления для всех блоков и отдельных элементов '},
            {textItem: '27+ вариантов шапок — чтобы каждый мог адаптировать сайт под свой бренд '}
          ]}
        />

        <Image image='Shop-constructor/constructor-head.webp'/>
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
