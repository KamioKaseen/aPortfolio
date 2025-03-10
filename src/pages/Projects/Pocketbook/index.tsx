import Header from '../components/Header';
import Image from '../components/Image';
import NavigationBar from '../../../shared/navigationRouting';
import Content from '../components/Content';

const Pocketbook = () => {
  return (
    <>
      <Header 
        image='pocketbook/pocketbook-header.webp'
        backgroundColor='bg-green'
      />
    
      <main className='work'>
        <Content 
          id='#about'
          title='Интернет-магазин Pocketbook'
          bodyText={[
            {text: 'Pocketbook — крупный мировой производитель E Ink ридеров. Их устройства — это не просто гаджеты, а настоящие помощники для любителей книг. '},
            {text: 'Мы провели полный цикл разработки интернет-магазина, чтобы покупка книг и ридеров стала удобной и приятной.'},
          ]}
        />

        <Content 
          bodyText={[
            {title: 'Пользователи', text: 'Мужчины и женщины, которые  ищут удобное, технологичное устройство, которое сделает процесс чтения приятным и простым.'},
            {title: 'Команда', text: 'UI/UX Designer, Project Manager, Product Manager, frontend – разработчики, backend – разработчики, тестировщик, CEO.'}
          ]}
        />
 
        <Image image='pocketbook/pocketbook-choose-reader.webp' />
        <Image image='pocketbook/pocketbook-product.webp' />

        <NavigationBar />
      </main>
    </>
  )
}

export default Pocketbook;
