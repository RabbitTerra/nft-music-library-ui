import { Button, ButtonProps } from "@chakra-ui/react";
import theme from "utils/theme";

export function PrimaryButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button
      bg={theme.colors.button.primary.bg}
      border="1px solid"
      borderColor={theme.colors.border.secondary}
      borderRadius="lg"
      fontSize="md"
      fontWeight={600}
      px={3}
      py={3.5}
      size="lg"
      {...rest}
    >
      {children}
    </Button>
  );
}

export function SecondaryButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button
      bg={theme.colors.text.primary}
      borderRadius="lg"
      color={theme.colors.secondary}
      fontSize="md"
      fontWeight={600}
      px={3}
      py={3.5}
      size="lg"
      {...rest}
    >
      {children}
    </Button>
  );
}
