import { Box, Flex, Text } from "@chakra-ui/react";

import Image from "next/image";
import CursorButton from "pages/components/CursorButton";
import CustomInput from "pages/components/Input";
import Label from "pages/components/Label";
import styles from "styles/Footer.module.scss";

function Footer() {
  return (
    <Box
      backgroundColor="#202020"
      height="100vh"
      width="100%"
      borderRadius="4px"
    >
      <Flex direction="row" justifyContent="space-between" height="100%">
        <Flex
          direction="column"
          pl="220px"
          pt="80px"
          pb="50px"
          justifyContent="space-between"
        >
          <Flex direction="column">
            <Text
              fontFamily="CeraPro"
              fontSize="48"
              fontWeight="Bold"
              color="white"
              width="400px"
            >
              Lets start new project
            </Text>
            <CustomInput placeholder="Name" mt="10" />
            <CustomInput placeholder="Email" mt="5" />
            <CustomInput placeholder="Attach Project Details" mt="5" />
            <CursorButton reversed style={styles.cursorButton}>
              Lets Start
            </CursorButton>
          </Flex>
          <Flex direction="column" width="350px">
            <Text
              fontFamily="CeraPro"
              fontSize="48"
              fontWeight="Bold"
              color="white"
              width="400px"
            >
              Contact Me
            </Text>
            <Flex direciton="row" justifyContent="space-between">
              <Flex direction="column">
                <Label
                  label="Email"
                  text="talenteyedev@gmail.com"
                  link="mailto:talenteyedev@gmail.com"
                />
                <Label
                  label="Linkedin"
                  text="Shing Ho Tan"
                  mt="15px"
                  link="https://www.linkedin.com/in/shing-ho-tan-9ba9181aa/"
                />
              </Flex>
              <Flex direction="column">
                <Label
                  label="Github"
                  text="Shing-Ho"
                  link="https://github.com/Shing-Ho"
                />
                <Label
                  label="Discord"
                  text="PuppyNinja#0466"
                  mt="15px"
                  link="https://discord.com/users/572265467788394498"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box position="absolute" right="0" bottom="0">
          <Image
            src="/assets/svg/footer_illustration.svg"
            width="1094"
            height="772"
            alt="Footer Illustration"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
