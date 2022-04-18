import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.scss";
import "utils/firebase";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
