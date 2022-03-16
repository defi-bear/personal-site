import { Input } from "@chakra-ui/react";

function CustomInput(props) {
  return (
    <Input
      variant="flushed"
      color="white"
      _placeholder={{ color: "#383838" }}
      borderColor="#383838"
      {...props}
    />
  );
}

export default CustomInput;
