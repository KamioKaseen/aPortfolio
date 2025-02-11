import { FC } from 'react';
// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationBar';

const ShopConstructor: FC = () => {
 
  return (
    <>
      <Header backgroundImage='url(Profile/profile-header.webp)'/>
    
      <main className='work'>
        <Content 
          title='Личный кабинет кандидата'
          bodyText={[
            {text: 'Студия прошла этап ребрендинга и активно искала новых талантливых специалистов. Моей задачей было разработать личный кабинет для кандидатов, которые подают заявки на вакансии компании через сторонние платформы или сайт студии.'},
            {title: 'Пользователи', text: 'Кандидаты на вакансию, которые прошли этап Hr-собеседования.'},
            {title: 'Команда', text: 'UI/UX Designer, Project Manager, frontend – разработчик, backend – разработчик.'},
          ]}
        />
        <Content 
          subTitle='Задача'
          bodyText={[
            {textItem: 'Упростить взаимодействие между кандидатами и работодателем.'},
            {textItem: 'Сделать процесс трудоустройства максимально прозрачным и комфортным.'},
          ]}
        />
        <Content 
          subTitle='Гипотезы и решения'
          bodyText={[
           {title: 'Гипотеза', text: 'Если показать потенциальному кандидату список будущих коллег с ссылками на их соцсети, это повысит NPS и конверсию принятия оффера.'},
          ]}
        />
         
        <Image image='Profile/profile-team.webp'/>
        <Content 
          bodyText={[{text: 'Проверили гипотезу проведя интервью с кандидатами, которые прошли отбор в компанию'}]}
        />

        <Image image='Profile/who.png'/>
        <Image image='Profile/profile-tasks.webp'/>
        <Content 
          subTitle='Результаты'
          bodyText={[
            {title: 'Разработала интерфейс личного кабинета, который позволяет:'},
            {textItem: 'Отслеживать статус заявки'},
            {textItem: 'Получать уведомления о новых этапах собеседовани'},
            {textItem: 'Видеть контакты ответственных лиц и будущих коллег'}
          ]}
        />

        <Image image='Profile/profile-tests.webp'/>
        <Content 
          bodyText={[{text: 'Во время работы я придерживалась гайдлайнов и UI-кит студии'}]}
        />

        <Image image='Profile/profile-uikit.webp'/>
        <NavigationBar />
      </main>
    </>
  )
}

export default ShopConstructor;

