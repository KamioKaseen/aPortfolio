import { FC } from 'react';
import Header from '../components/Header';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationBar';
import Content from '../components/Content';

const ShopConstructor: FC = () => {
  return (
    <>
      <Header 
        image='Form/form-header.webp'
      />
    
      <main className='work'>
        <Content 
          title='Редизайн, увеличивший конверсию'
          bodyText={[
            'Integlab — это студия разработки (ранее dlc-master), которая специализируется на e-commerce и корпоративных решениях.',
            'Главная студии не приносила той конверсии заявок, которой ожидали, поэтому я провела ux-аудит сайта и редизайн ключевых страниц.',
            'Сайт стал выглядеть современнее и необходимые метрики были повышенны.'
          ]}
          groupText={[
            {title: 'Пользователи', text: 'Менеджеры, маркетологи и владельцы малого и среднего бизнеса в сфере продаж.'},
            {title: 'Команда', text: 'UI/UX Designer, Project Manager, frontend – разработчик, backend – разработчик.'
            },
          ]}
        />
        <Content 
          subTitle='Задача'
          listItems={[
            'Повысть конверсию заявок с сайта.',
            ' Один из продуктов студии — маркетплейс решений для Битрикс24 и 1С, включая их лицензии. Моей задачей было увеличение CTR по карточкам товаров в этом маркетплейсе.',
          ]}
        />
        <Content 
          subTitle='Анализ'
          bodyText={['Для начала я посмотрела на то, что мы уже имеем на ключевых страницах студии и выписать то, что мне понравилось и не понравилось.']}
        />

        <Image image='Form/form-scroll-one.webp'/>
        <Content 
          listTitle='Плюсы'
          listItems={[
            'На главной странице нас сразу встречает яркий и сочный текст — это цепляет.'
          ]}
        />  

        <Content 
          listTitle='Минусы'
          listItems={[
            'Нет призыва к действию (КТА), который бы вел к форме обратной связи для клиентов, уже знакомых со студией. Вместо этого форма расположена прямо тут  и предлагает клиенту сразу перейтик заполнению.',
            'Форма обратной связи была слишком перегружена — это был полноценный брифинг клиента, который только в конце превращался в классическую форму обратной связи.',
            'Проекты находятся в самом низу страницы, прямо перед футером. Из-за этого они теряются и не привлекают должного внимания.'
          ]}
        />    
        <Content 
          subTitle='Бенчамаркинг'
          bodyText={[
            'Я провела анализ известных конкурентов, в числе которых были: Ony, Tubik, Студия Лебедева, Only, Magma, Crauch, Луч.',
            'Моей целью было понять как выглядит их презентация студии и почему она работает.']}
        />
        <Content 
          subTitle='Гипотезы и решения'
          bodyText={[
            'Если сделаем акцент на сочных изображениях проекта, повысим количество кликов на проекты и количетсво заявок в форме обратной связи.'
          ]}
        />
  
        <Image image='Form/form-baikal.webp'/>
        <Content 
          bodyText={['Проверила гипотезу коридорным тестированием, а также ее косвенно подтвердил анализ конкурентов — на сайтах других студий акцент всегда на больших и сочных фото проектов.']}
        />
        <Content 
          groupText={[
            {title: 'Гипотеза', text: 'Если добавим возможность оставить заявку без заполнения полноценного брифа, мы увеличим конверсию заполнения заявок.'}
          ]}
        />

        <Image image='Form/form-flow.webp'/>
        <Content 
          bodyText={['Скринфлоу новой версии формы обратной связи. Новая версия позволяет избежать необходимоти отвечать на 19 вопросов (основновной сценарий) для пользователей.']}
        />

        <Image image='Form/form-discuss.webp'/>
        <Content 
          bodyText={[
            'Продвигать эту гипотезу было непросто. Стейкхолдеры хотели минимизировать взаимодействие с менеджерами и автоматизировать начало работы с клиентом.',
            'Я создала свою версию флоу формы, провела коридорное тестирование и презентовала его результаты стейкхолдерам. Это помогло убедить их в необходимости изменений и стало подтверждением моей гипотезы.']}
        />
        <Content 
          subTitle='Выводы'
          listTitle='Итоговое решение'
          listItems={[
            'Имеет улучшенную структуру, которая акцентирует внимание на ключевых аспектах, помогающих принять решение о сотрудничестве.',
            'Сниженизило когнитивную нагрузку на пользователя при заполнении формы обратной связи.'
          ]}
        />
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
