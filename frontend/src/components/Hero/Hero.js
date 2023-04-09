import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
        Using our facial recognition, you can keep track of every student's attendance in one location.
        </h2>
        <div className={styles.slogan}>
          <p>Increased accuracy, time-saving, enhanced security, contactless operation.</p>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://cdn.sanity.io/images/4y5gb0f2/production/99ce546807fcf13b7a8dca6621510b136e41c79c-600x338.gif"
          alt="" style={{height: "470px",width:"620px"}}
        />
      </div>
    </div>
  );
};
export default Hero;
