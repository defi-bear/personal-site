import cx from "classnames";

import styles from "styles/components.module.scss";

function Card({ style, children, link }) {
  return (
    <div
      className={cx(style, styles.card, styles.animation)}
      onClick={() => link && window.open(link, "_blank", "noopener,noreferrer")}
    >
      <span>{children}</span>
    </div>
  );
}

export default Card;
