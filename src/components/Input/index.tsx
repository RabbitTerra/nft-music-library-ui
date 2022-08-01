import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { MicSVG } from "utils/icons";
import theme from "utils/theme";

export function NavbarSearchInput() {
  return (
    <InputGroup width={{ base: "100%", md: "md" }}>
      <InputLeftElement
        pointerEvents="none"
        fontSize="lg"
        children={<RiSearchLine />}
        height="100%"
      />
      <Input
        bg={theme.colors.bg.input}
        border="1px solid"
        borderColor={theme.colors.border.secondary}
        borderRadius="xl"
        placeholder="Search for Artists, Videos, or Collections"
        size="lg"
      />
      <InputRightElement children={<MicSVG />} height="100%" />
    </InputGroup>
  );
}
