import styles from "./Growth.module.css";
import { growth } from "../../constants/growth";
import GrowthBox from "./GrowthBox";

const imgURL1 =
  "https://s3.us-east-1.amazonaws.com/files.tvisha.aws/posts/crm/panel/attachments/1652269687/face-recognition-attendance-system.jpg";

const Growth = () => {
  return (
    <div className={`${styles.growthWrapper} center`}>
      <div className={`${styles.growthWrapperInner} center`}>
        <div className={styles.growthHeading}>
          <p>Helping people all over the campus</p>
        </div>
        <div className={styles.growthImg}>
          <img className={styles.img1} src={imgURL1} alt="" />
        </div>
        <div className={`${styles.growthList} center`}>
          {growth.map(({ field }) => {
            return <GrowthBox field={field} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Growth;
