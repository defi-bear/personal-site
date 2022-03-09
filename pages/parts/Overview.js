import Image from "next/image";

import Card from "pages/components/Card";
import styles from "styles/Overview.module.scss";

function Overview() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/assets/png/summary_vector.png"
          alt="summary_vector"
          width="1388"
          height="1375"
          className={styles.vector}
        />
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <Image
              src="/assets/svg/logo_text.svg"
              alt="shinghotan_logo"
              width="100"
              height="35"
              className={styles.logo}
            />
            <div className={styles.headerItem}>Summary</div>
            <div className={styles.headerItem}>Skills</div>
            <div className={styles.headerItem}>Experience</div>
            <div className={styles.headerItem}>Education</div>
          </div>
          <div className={styles.headerRight}>
            <Card style={styles.rightButton}>Click and Hire Me</Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
