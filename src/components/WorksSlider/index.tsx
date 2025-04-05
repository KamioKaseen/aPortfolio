import styles from './style.module.scss';

export function WorksSlider () {
 
  return (
    <div className={styles.slider}>
      <div className={styles.slider__content}> 
        <div className={styles.slider__imageContainer}>
          <img width={610} height={424} className={styles.slider__image} src="home-page/social-network.png" alt="Image 3" />  
        </div>
        <div className={styles.slider__imageContainer}>
          <img className={styles.slider__image}  width={486} height={336} src="home-page/auth.png" alt="Image 1" />  
        </div>
        <div className={styles.slider__imageContainer}>
          <img className={styles.slider__image}  width={486} height={278} src="home-page/guillermo.png" alt="Image 2" />  
        </div>
        <div className={styles.slider__imageContainer}>
          <img className={styles.slider__image}  width={486} height={336} src="home-page/music.png" alt="Image 1" />  
        </div>
        <div className={styles.slider__imageContainer}>
          <img className={styles.slider__image}  width={486} height={336} src="home-page/music.png" alt="Image 1" />  
        </div>
      </div>
    </div>
  );  
};
