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
          image='./phone.png'
          backgroundColor='$backgroundGray' 
          backgroundImage='url(./mountain.png' 
          chipsBlack={true}
          className={styles.home__item1}/>
          
        <Card
          size='large'
          type='Orbite' 
          title='Корпоративная база знаний'
          backdrop='./knowledge-base.png'    
          phoneLarge='./knowledge-base-phone.png'   
          backgroundColor='black'    
          className={styles.home__item2}/>
       
        <Card
          size='small'
          type='Integlab' 
          backdrop='' 
          image='./dailyUI.png'     
          backgroundColor='black'  
          backgroundImage='url(./dailyUI-back.png'    
          className={styles.home__item3}/>

        <Card
          size='large'
          type='Orbite' 
          title='Клиентский модуль в трекере задач'
          backdrop='./issue-tracker.png'  
          phoneLarge='./issue-tracker-phone.png'
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
          backgroundColor='rgb(243, 243, 243)'   
          backgroundImage='url(./baikal-back.png)' 
          image='./botel.png'
          className={styles.home__item6}/>

        <Card
          size='large'
          type='Integlab' 
          title='Редизайн, увеличивший конверсию'
          backdrop='./form.png'        
          phoneLarge='./form-phone.png'
          backgroundColor='#191722'  
          className={styles.home__item7}/>
        
        <Card
          size='small'
          type='Integlab' 
          backgroundImage='url(./profile.png)' 
          className={styles.home__item8}/>
      </div>
    </div>
  )
}

export default Home;