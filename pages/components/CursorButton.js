import cx from "classnames";
import Image from "next/image";

import styles from "styles/components.module.scss";

function CursorButton({ style, children }) {
  return (
    <div className={cx(style, styles.cardContainer, styles.animation)}>
      <div className={styles.card}>
        <span>{children}</span>
      </div>
      <div className={styles.cursorContainer}>
        <Image
          src="/assets/svg/right.svg"
          alt="right_cursor"
          width="6.25"
          height="10.5"
        />
      </div>
    </div>
  );
}

export default CursorButton;
