import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import Table from '../components/Table';
import NavigationBar from '../../../shared/navigationBar';
import { useBreakpoints } from '../../../utils/use-breackpoints';
import { motion } from 'framer-motion';
import tables from '../../../data/tableOny.json';

// const pageVariants = {
//   initial: { opacity: 0, y: "100%" },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Быстро поднимается
//   exit: { opacity: 0, y: 0, transition: { duration: 0.3 } },
// };

const ShopConstructor: FC = () => {
  const { isDown } = useBreakpoints()

  return (
    <motion.div
      initial="initial" 
      animate="animate" 
      exit="exit" 
      // variants={pageVariants}
    >
      <Header 
        image='Ony/ony-header.webp'
      />

      <main className='work'>
        <Content 
          title='Ony'
          bodyText={[
            'Стартап, разрабатывающий персонализированного ИИ помощника в области психологического здоровья.',
            'Я создала приложение, которое поможет справиться с тревогой или просто поговорить о своих переживаниях — где угодно и когда угодно.'
          ]}
          groupText={
            [{
              title: 'Пользователи',
              text: 'Мужчины и женщины, которые сталкиваются с тревожностью и хотят быстро справиться с её симптомами, а также те, кто ищет поддержку.',
            },
            {
              title: 'Команда',
              text: 'UI/UX Designer, Project Manager, Product Manager, frontend – разработчики, backend – разработчики, тестировщик, CEO.',
            },
          ]}
        />
          
        <Image image='Ony/ony-double.webp'/>
        <Content 
          subTitle='Исследование и анализ'
          bodyText={[
            'На основе данных, собранных в ходе нескольких проблемных интервью, я определила основные сегменты пользователей а также анализа аудитории конкурентов.',
            'Для углубленного понимания потребностей я изучила отзывы пользователей о конкурирующих продуктах, что позволило выявить их основные боли и ожидания.'
            ]}
        />

        {!isDown('sm') && <Table 
          draggable={true} 
          rows={tables.tableOne.rows} 
          columns={tables.tableOne.columns} 
          firstColumnWidth='40rem' 
          lastColumnWidth='100rem'
        />}
        <Content 
          bodyText={[
            'Прототип пользователя – Мария, 32 года, офисный работник, страдающая от социальной тревожности. Её ключевая боль – трудности в поиске быстрых и эффективных методов расслабления.']}
        />

        <Image image='Ony/ony-breath.webp'/>
        <Table 
          draggable={false} 
          rows={tables.tableTwo.rows} 
          columns={tables.tableTwo.columns} 
          itemMaxWidth='70rem'
        />
        <Content 
          bodyText={[
            'После проведения проблемного интервью мы подтвердили, что пользователи хотят быстро получать доступ к самым популярным методам снятия тревожности.']}
          listTitle='В результате мы решили разработать:'
          listItems={[
            'Опцию создания персонализированного успокаивающего музыкального плейлиста.', 
            'Мгновенный доступ к дыхательным упражнениям и прослушиванию музыки, который выходил бы за рамки приложения и использовал гироскоп телефона', 
            'Возможность выбрать из наиболее популярных и эффективных дыхательных упражнений.'
          ]}
        />

        <Image image='Ony/ony-children.webp'/>
        <Content 
          subTitle='CJM'
          bodyText={[
            'Для оценки взаимодействия с приложением использовались AARRR-метрики:']}
        />
        <Table 
          draggable={true} 
          rows={tables.tableThree.rows} 
          columns={tables.tableThree.columns}  
          itemMaxWidth='55.8rem'
        />

        <Image image='Ony/ony-shake.webp'/>
        <Content 
          subTitle='Что можно улучишть'
          listItems={[
            'Расширить функциональность за счёт интеграции с умными часами.', 
            'Провести дополнительные тестирования с новой выборкой пользователей.', 
            'Рассмотреть добавление образовательного контента о борьбе с тревожностью.'
          ]}
        />

        <NavigationBar />
      </main>
    </motion.div>
  )
}

export default ShopConstructor;


