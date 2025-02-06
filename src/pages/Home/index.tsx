import styles from './style.module.scss';
import Card from '../../components/Card';


const Home = () => {
  return (
    <div id="home__title" className={styles.home}>
      <h1 className={styles.home__title}>
        Привет, меня зовут Алина <br/> 
        <span className={styles.home__subtitle}>Я UI/UX дизайнер</span>
      </h1>

      <div className={styles.home__grid}>
        <Card
          route='ony' 
          size='middle'
          type='OnyAI' 
          title='Ony – твой психолог'
          image='Ony/phone.png'
          backgroundColor='$backgroundGray' 
          backgroundImage='url(Ony/mountain.png)' 
          chipsBlack={true}
          className={styles.home__item1}/>
          
        <Card
          route='form-redesign'
          size='large'
          type='Integlab' 
          title='Редизайн, увеличивший конверсию'
          backdrop='Form/form.png'        
          phoneLarge='Form/form-phone.png'
          backgroundColor='#191722'  
          className={styles.home__item2}/>
       
        <Card
          route='dailyui'
          size='small'
          type='Integlab' 
          backdrop='' 
          image='DailyUI/dailyUI.png'     
          backgroundImage='url(DailyUI/dailyUI-back.png)'    
          className={styles.home__item3}/>
        <Card
          route='shop-constructor'
          size='large'
          type='Integlab' 
          title='Конструктор интернет-магазинов'
          backdrop='Shop-constructor/shop-constructor.png'     
          className={styles.home__item4}/>

        <Card
          route='issue-tracker'
          size='large'
          type='Orbite' 
          title='Клиентский модуль в трекере задач'
          backdrop='Issue-tracker/issue-tracker.png'  
          phoneLarge='Issue-tracker/issue-tracker-phone.png'       
          className={styles.home__item5}/>

        <Card
          route='baikal'
          size='middle'
          type='Integlab' 
          title='Легенда Байкала'  
          backgroundImage='url(Baikal/baikal-back.png)' 
          image='Baikal/botel.png'
          className={styles.home__item6}/>

        <Card
          route='knowledge-base'
          size='large'
          type='Orbite' 
          title='Корпоративная база знаний'
          backdrop='Knowledge-base/knowledge-base.png'    
          phoneLarge='Knowledge-base/knowledge-base-phone.png'   
          className={styles.home__item7}/>  
        
        <Card
          route='profile'
          size='small'
          type='Integlab' 
          backgroundImage='url(Profile/profile.png)' 
          className={styles.home__item8}/>
      </div>
    </div>
  )
}

export default Home;