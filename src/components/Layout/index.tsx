import {
  Container,
  ContainerProps,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { switchToNetwork } from "utils/connectors/switchNetwork";
import { connectorLocalStorageKey } from "utils/constants";
import theme from "utils/theme";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export function ChakraLayout(props: ContainerProps) {
  const { children, ...rest } = props;
  return (
    <Container
      width="90%"
      maxWidth="90%"
      padding={0}
      minHeight="calc(100vh - 440px)"
      {...rest}
    >
      {children}
    </Container>
  );
}

export function BaseLayout() {
  const { account, library, error } = useActiveWeb3React();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (error) {
      switchToNetwork({ library });
    } else if (!library && !account) {
      if (window.ethereum && window.ethereum.on) {
        // Listening to Event
        window.ethereum.on("accountsChanged", (accounts: any) => {
          if (accounts.length <= 0) {
            window.localStorage.removeItem(connectorLocalStorageKey);
          }
        });
      }
    }
  }, [account, error, library]);

  return (
    <Flex width="100%" minH="100vh">
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <Flex as="main" pl={{ base: 0, lg: 64 }} width="100%" direction="column">
        <Navbar onOpen={onOpen} />
        <Flex
          width="100%"
          height="100%"
          background={theme.colors.bg.primary}
          p={6}
        >
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}
