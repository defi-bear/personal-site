import Image from "next/image";
import styles from "styles/Hobbies.module.scss";

function Hobbies() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.label}>Hobbies</div>
      </div>
      <div className={styles.right}>
        <Image
          src="/assets/svg/computer.svg"
          width="514"
          height="521"
          alt="Computer"
        />
      </div>
    </div>
  );
}

export default Hobbies;
