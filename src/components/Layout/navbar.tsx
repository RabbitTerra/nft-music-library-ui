import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  LinkOverlay,
} from "@chakra-ui/react";
import { NavbarSearchInput } from "components/Input";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { Link as ReactRouterLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaChevronLeft } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { WalletSVG } from "utils/icons";
import useAuth from "hooks/useAuth";
import { DesktopDropdownMenu } from "./profileMenu";
import { NavbarProps } from "utils/interface";

function Navbar(props: NavbarProps) {
  const { onOpen } = props;
  const { account } = useActiveWeb3React();
  const { logout } = useAuth();

  return (
    <Flex
      pt={6}
      px={6}
      align="center"
      justify="space-between"
      position="relative"
    >
      <HStack spacing={3} display={{ lg: "none" }}>
        <IconButton
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <IconButton
          variant="ghost"
          aria-label="open search"
          icon={<Icon fontSize={20} as={BiSearch} />}
        />
      </HStack>
      <HStack spacing={4} display={{ base: "none", lg: "flex" }}>
        <IconButton
          icon={<FaChevronLeft />}
          aria-label="back"
          variant="ghost"
        />
        <NavbarSearchInput />
      </HStack>
      {account ? (
        <DesktopDropdownMenu account={account} logout={logout} />
      ) : (
        <Button leftIcon={<WalletSVG />} variant="primary" size="small">
          <LinkOverlay as={ReactRouterLink} to="/connect">
            Connect Wallet
          </LinkOverlay>
        </Button>
      )}
    </Flex>
  );
}

export default Navbar;
