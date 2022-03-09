import cx from "classnames";
import { Button } from "@chakra-ui/react";

import styles from "styles/components.module.scss";

function Card({ style, children }) {
  return (
    <div className={cx(style, styles.card)}>
      <span>{children}</span>
    </div>
  );
}

export default Card;
