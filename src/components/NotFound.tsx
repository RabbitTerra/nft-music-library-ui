import { Center, Link, VStack } from "@chakra-ui/react";
import theme from "utils/theme";
import { ChakraLayout } from "./Layout";
import { ChakraHeading, ChakraText } from "./Typography";

interface ErrorCodeProps {
  code?: 404 | 500;
}

function NotFound(props: ErrorCodeProps) {
  const { code = 404 } = props;
  const errorText =
    code === 404
      ? "The page you were looking for doesn't exist."
      : "Sorry! Server-side error occurred.";

  return (
    <ChakraLayout display="flex">
      <Center width="100%" height="100vh">
        <VStack
          align="center"
          justify="center"
          textAlign="center"
          flex={1}
          my={{ base: 16, lg: "auto" }}
          spacing={12}
        >
          <ChakraHeading
            color={theme.colors.func.error}
            fontSize="9xl"
            type="h1"
          >
            {code}
          </ChakraHeading>
          <ChakraHeading maxWidth="800px" type="h2">
            {errorText}
          </ChakraHeading>
          <Link href="/">
            <ChakraText fontSize="2xl" size="regular">
              Go to homepage
            </ChakraText>
          </Link>
        </VStack>
      </Center>
    </ChakraLayout>
  );
}

export default NotFound;
