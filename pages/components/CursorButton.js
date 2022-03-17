import cx from "classnames";
import Image from "next/image";

import styles from "styles/components.module.scss";

function CursorButton({ style, reversed, children, link }) {
  return (
    <div
      className={cx(
        style,
        styles.cardContainer,
        styles.animation,
        reversed && styles.reversed
      )}
    >
      <div
        className={styles.card}
        onClick={() =>
          link && window.open(link, "_blank", "noopener,noreferrer")
        }
      >
        <span>{children}</span>
      </div>
      <div className={styles.cursorContainer}>
        <Image
          src={
            reversed ? "/assets/svg/whiteRight.svg" : "/assets/svg/right.svg"
          }
          alt="right_cursor"
          width="6.25"
          height="10.5"
        />
      </div>
    </div>
  );
}

export default CursorButton;
