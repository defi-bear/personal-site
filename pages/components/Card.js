import cx from "classnames";

import styles from "styles/components.module.scss";

function Card({ style, children }) {
  return (
    <div className={cx(style, styles.card, styles.animation)}>
      <span>{children}</span>
    </div>
  );
}

export default Card;
