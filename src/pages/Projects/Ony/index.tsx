import { FC } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import Table from '../components/Table';
import NavigationBar from '../../../shared/navigationRouting';
import { useBreakpoints } from '../../../utils/use-breackpoints';
import tables from '../../../data/tableOny.json';

const Ony: FC = () => {
  const { isDown } = useBreakpoints()

  return (
    <div>
      <Header 
        image='ony/ony-header.webp'
        backgroundImage='url(ony/mountain.webp)'
      />

      <main className='work'>
        <Content 
          id='#about'
          title='Ony'
          bodyText={[
            {text: 'Стартап, разрабатывающий персонализированного ИИ помощника в области психологического здоровья.'},
            {text: 'Я создала приложение, которое поможет справиться с тревогой или просто поговорить о своих переживаниях — где угодно и когда угодно.'},
            {
              title: 'Пользователи',
              text: 'Мужчины и женщины, которые сталкиваются с тревожностью и хотят быстро справиться с её симптомами, а также те, кто ищет поддержку.',
            },
            {
              title: 'Команда',
              text: 'UI/UX Designer, Project Manager, Product Manager, frontend – разработчики, backend – разработчики, тестировщик, CEO.',
            },
            
          ]}
        />
          
        <Image image='ony/ony-double.webp'/>
        <Content 
          id='#searchAnalysis'
          subTitle='Исследование и анализ'
          bodyText={[
            {text: 'На основе данных, собранных в ходе нескольких проблемных интервью, я определила основные сегменты пользователей а также анализа аудитории конкурентов.'},
            {text: 'Для углубленного понимания потребностей я изучила отзывы пользователей о конкурирующих продуктах, что позволило выявить их основные боли и ожидания.'}
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
            {text: 'Прототип пользователя – Мария, 32 года, офисный работник, страдающая от социальной тревожности. Её ключевая боль – трудности в поиске быстрых и эффективных методов расслабления.'}]}
        />

        <Image image='ony/ony-breath.webp'/>
        <Content 
          id='#jobStories'
          subTitle='Job Stories'
        />
        <Table 
          draggable={false} 
          rows={tables.tableTwo.rows} 
          columns={tables.tableTwo.columns} 
          itemMaxWidth='50rem'
        />
        <Content 
          bodyText={[
            {text: 'После проведения проблемного интервью мы подтвердили, что пользователи хотят быстро получать доступ к самым популярным методам снятия тревожности.'}]}
          listTitle='В результате мы решили разработать:'
          listItems={[
            'Опцию создания персонализированного успокаивающего музыкального плейлиста', 
            'Мгновенный доступ к дыхательным упражнениям и прослушиванию музыки, который выходил бы за рамки приложения и использовал гироскоп телефона', 
            'Возможность выбрать из наиболее популярных и эффективных дыхательных упражнений'
          ]}
        />

        <Image image='ony/ony-children.webp'/>
        <Content 
          id='#cjm'
          subTitle='CJM'
          bodyText={[
            {text: 'Для оценки взаимодействия с приложением использовались AARRR-метрики:'}]}
        />
        <Table 
          draggable={true} 
          rows={tables.tableThree.rows} 
          columns={tables.tableThree.columns}  
          itemMaxWidth='52rem'
        />

        <Image image='ony/ony-shake.webp'/>
        <Content 
          id='#whatcanbe'
          subTitle='Что можно улучишть'
          listItems={[
            'Расширить функциональность за счёт интеграции с умными часами', 
            'Провести дополнительные тестирования с новой выборкой пользователей', 
            'Рассмотреть добавление образовательного контента о борьбе с тревожностью'
          ]}
        />

        <NavigationBar />
      </main>
    </div>
  )
}

export default Ony;


