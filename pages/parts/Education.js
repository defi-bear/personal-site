import { Flex, Box, Text, Image } from "@chakra-ui/react";

function Education() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      minHeight="100vh"
    >
      <Box position="absolute" left="-100px" top="-100px">
        <Image
          src="/assets/svg/edu_illustration.svg"
          width="80"
          height="120"
          alt="Education"
        />
      </Box>
      <Text fontFamily="CeraPro" fontSize="42" fontWeight="bold">
        Education
      </Text>
      <Text fontFamily="SpaceMono" fontSize="20" mt="50">
        Bachelor of Computer Science
      </Text>
      <Text fontFamily="SpaceMono" fontSize="20">
        <b>2015</b> University of Portsmouth
      </Text>
      <Image
        src="/assets/svg/education.svg"
        width="1150"
        height="520"
        alt="Education"
      />
    </Flex>
  );
}

export default Education;
