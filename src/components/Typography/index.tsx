import { Heading, Text } from "@chakra-ui/react";
import { ChakraHeadingProps, ChakraTextProps } from "utils/interface";
import theme, { fonts } from "utils/theme";

export function ChakraHeading(props: ChakraHeadingProps) {
  const { children, type, ...rest } = props;
  return (
    <Heading
      as={type}
      color={theme.colors.text.primary}
      {...fonts.heading[type]}
      {...rest}
    >
      {children}
    </Heading>
  );
}

export function ChakraText(props: ChakraTextProps) {
  const { children, type, size, ...rest } = props;
  const fontColor = type ? theme.colors.text[type] : theme.colors.text.primary;
  return (
    <Text color={fontColor} {...fonts.text[size]} {...rest}>
      {children}
    </Text>
  );
}

export function ChakraErrorText(props: ChakraTextProps) {
  const { children, type, size, ...rest } = props;
  return (
    <Text color={theme.colors.func.error} {...fonts.text[size]} {...rest}>
      {children}
    </Text>
  );
}
