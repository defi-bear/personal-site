import Image from "next/image";

import Card from "pages/components/Card";
import styles from "styles/Skills.module.scss";
import skills from "utils/skills";

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSkill}>
        <Image
          alt="Skill Img"
          src="/assets/svg/skills_img.svg"
          width="578"
          height="462"
        />
        <div className={styles.cursor}>
          <Image
            alt="Curved Cursor"
            src="/assets/svg/curved_arrow.svg"
            width="97"
            height="82"
          />
        </div>
      </div>
      <div className={styles.rightSkill}>
        <div className={styles.highlights}>Skill Highlights</div>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Card key={skill} style={styles.skillCard}>
              {skill}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
