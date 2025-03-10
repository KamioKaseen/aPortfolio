// import { motion  } from 'framer-motion';
import Header from '../components/Header';
import Content from '../components/Content';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationRouting';

const CandidateLK = () => {
  return (
    <>
      <Header backgroundColor='bg-gray' image='candidate-lk/candidate-lk-header.webp'/>
    
      <main className='work'>
        <Content 
          id='#about'
          title='Личный кабинет кандидата'
          bodyText={[
            {text: 'Студия прошла этап ребрендинга и активно искала новых талантливых специалистов. Моей задачей было разработать личный кабинет для кандидатов, которые подают заявки на вакансии компании через сторонние платформы или сайт студии.'},
            {title: 'Пользователи', text: 'Кандидаты на вакансию, которые прошли этап Hr-собеседования.'},
            {title: 'Команда', text: 'UI/UX Designer, Project Manager, frontend – разработчик, backend – разработчик.'},
          ]}
        />
        <Content 
          id='#task'
          subTitle='Задача'
          bodyText={[
            {textItem: 'Упростить взаимодействие между кандидатами и работодателем'},
            {textItem: 'Сделать процесс трудоустройства максимально прозрачным и комфортным'},
          ]}
        />
        <Content 
          id='#hypothesesSolutions'
          subTitle='Гипотезы и решения'
          bodyText={[
           {title: 'Гипотеза', text: 'Если показать потенциальному кандидату список будущих коллег с ссылками на их соцсети, это повысит NPS и конверсию принятия оффера.'},
          ]}
        />
         
        <Image image='candidate-lk/candidate-lk-team.webp'/>
        <Content 
          bodyText={[{text: 'Проверили гипотезу проведя интервью с кандидатами, которые прошли отбор в компанию.'}]}
        />
        <Image image='candidate-lk/candidate-lk-test-task.webp'/>
        
        <Content 
          id='#result'
          subTitle='Результаты'
          listTitle='Разработала интерфейс личного кабинета, который позволяет:'
          listItems={[
            'Отслеживать статус заявки', 
            'Получать уведомления о новых этапах собеседовани',
            'Видеть контакты ответственных лиц и будущих коллег'
          ]}
        />
        <Image image='candidate-lk/candidate-lk-backoffice.webp'/>

        <Content 
          bodyText={[{text: 'Во время работы я придерживалась гайдлайнов и UI-кит студии.'}]}
        />
        <Image image='candidate-lk/candidate-lk-uikit.webp'/>

        <NavigationBar />
      </main>
    </>
  )
}

export default CandidateLK;

