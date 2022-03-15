import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import styles from "styles/Hobbies.module.scss";
import Card from "pages/components/Card";

function Hobbies() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.label}>Hobbies</div>
        <div className={styles.hobbiesList}>
          <Flex mt="17" ml="20px" direction="row">
            <Card style={styles.card}>Dota 2</Card>
            <Card style={styles.card}>Swimming</Card>
            <Image
              src="/assets/svg/blue_frame.svg"
              width="200"
              height="65"
              alt="Blue Frame"
            />
          </Flex>
          <Flex mt="17" direction="row">
            <Image
              src="/assets/svg/frame.svg"
              width="200"
              height="65"
              alt="Frame"
            />
            <Box ml="3">
              <Card style={styles.card}>Basketball</Card>
            </Box>
          </Flex>
          <Flex mt="17" ml="40px" direction="row">
            <Card style={styles.card}>Cooking and Reading books</Card>
          </Flex>
          <Flex mt="17" ml="20px" direction="row">
            <Card style={styles.card}>Tabletennis</Card>
            <Card style={styles.card}>Watching Film</Card>
          </Flex>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="/assets/svg/computer.svg"
          width="514"
          height="521"
          alt="Computer"
        />
        <div className={styles.cursor}>
          <Image
            src="/assets/svg/left_curved_arrow.svg"
            width="96"
            height="81"
            alt="Left Curved Cursor"
          />
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
