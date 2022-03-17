import { useState } from "react";
import Image from "next/image";
import cx from "classnames";

import styles from "styles/Experience.module.scss";
import expList from "utils/experience";

function Experience() {
  const [selected, setSelected] = useState(0);
  return (
    <div className={styles.container} id="Experience">
      <div className={styles.illustration}>
        <Image
          alt="Illustration"
          src="/assets/svg/exp_illustration.svg"
          width="100"
          height="130"
        />
      </div>
      <div className={styles.label}>Experience</div>
      <div className={styles.body}>
        <div className={styles.names}>
          {expList.map((exp, index) => (
            <div
              key={exp.name}
              className={cx(
                styles.name,
                index === selected && styles.selectedName
              )}
              onClick={() => setSelected(index)}
            >
              {exp.name}
            </div>
          ))}
        </div>
        <div className={styles.details}>
          <div className={styles.detailsLeft}>
            <div className={styles.firstRow}>
              <div className={styles.firstLeft}>{expList[selected].title}</div>
              <div className={styles.firstRight}>
                <Image
                  src="/assets/svg/rect_frame.svg"
                  width="80"
                  height="80"
                  alt="Rect Frame"
                />
              </div>
            </div>
            <div className={styles.secondRow}>
              <div className={styles.secondLeft}>
                <div className={styles.secondBlack}>
                  <div>{expList[selected].startDate}</div>
                  <div>{expList[selected].endDate}</div>
                </div>
              </div>
              <div className={styles.secondRight}>
                <div>{expList[selected].label}</div>
              </div>
            </div>
          </div>
          <div className={styles.detailsRight}>
            {expList[selected].data.map((row) => (
              <div key={row} className={styles.detailsRow}>
                <div className={styles.leftRect} />
                <div className={styles.detailsRowRight}>{row}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
