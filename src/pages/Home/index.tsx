import styles from './style.module.scss';
import Card from '../../components/Card';

const Home = () => {

  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>
        Привет, меня зовут Алина <br/> 
        <span className={styles.home__subtitle}>Я UI/UX дизайнер</span>
      </h1>

      <div className={styles.home__grid}>
        
        <Card 
          size='middle'
          type='Пет-проект' 
          title='Ony – твой психолог'
          backdrop='./mountain.png'        
          image='./phone.png'
          backgroundColor='$backgroundGray'  
          chipsColor={'black'}
          className={styles.home__item1}/>
          
        <Card
          size='large'
          type='Integlab' 
          title='Корпоративная база знаний'
          backdrop='./knowledge-base.png'    
          image='./knowledge-base-phone.png'   
          backgroundColor='black'    
          className={styles.home__item2}/>
       
        <Card
          size='small'
          type='Integlab' 
          backdrop='' 
          image='./dailyUI.png'     
          backgroundColor='black'     
          className={styles.home__item3}/>

        <Card
          size='large'
          type='Integlab' 
          title='Клиентский модуль в трекере задач'
          backdrop='./issue-tracker.png'  
          image='./issue-tracker-phone.png'
          backgroundColor='rgba(55, 74, 250, 1)'         
          className={styles.home__item4}/>

        <Card
          size='large'
          type='Integlab' 
          title='Конструктор интернет-магазинов'
          backdrop='./shop-constructor.png'
          backgroundColor='rgba(90, 48, 239, 1)'          
          className={styles.home__item5}/>
        
        <Card
          size='middle'
          type='Baikal' 
          title='Легенда Байкала'
          backdrop='./baikal.png' 
          backgroundColor='rgb(243, 243, 243)'   
          // image='./phone.png'
          chipsColor='black'
          className={styles.home__item6}/>

        <Card
          size='large'
          type='Integlab' 
          title='Улучшение формы'
          backdrop='./form.png'        
          image='./form-phone.png'
          backgroundColor='#191722'  
          className={styles.home__item7}/>
        
        <Card
          size='small'
          type='Integlab' 
          backdrop='./notebook.png'  
          className={styles.home__item8}/>
      </div>
    </div>
  )
}

export default Home;