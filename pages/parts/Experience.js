import Image from "next/image";
import styles from "styles/Experience.module.scss";

import expList from "utils/experience";

function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <Image
          alt="Illustration"
          src="/assets/svg/exp_illustration.svg"
          width="100"
          height="130"
        />
      </div>
      <div className={styles.label}>Experience</div>
      <div className={styles.body}></div>
    </div>
  );
}

export default Experience;
