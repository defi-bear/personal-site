import { Box, Text, Link } from "@chakra-ui/react";
import styles from "styles/components.module.scss";

function Label({ label, text, link, ...props }) {
  return (
    <Box {...props}>
      <Text fontFamily="SpaceMono" color="#4f4f4f" fontSize="14">
        {label}
      </Text>
      <Link href={link} isExternal className={styles.labelLink}>
        <Text fontFamily="SpaceMono" color="white" fontSize="14" mt="12px">
          {text}
        </Text>
      </Link>
    </Box>
  );
}

export default Label;
