import {
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { ChakraHeading, ChakraText } from "components/Typography";
import { SUPPORTED_WALLETS } from "utils/connectors";
import { WalletModalProps } from "utils/interface";

export function WalletModal(props: WalletModalProps) {
  const { isOpen, onClose, onClick } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
      <ModalOverlay />
      <ModalContent rounded="2xl">
        <ModalHeader p={0}>
          <Flex
            width="full"
            pt={6}
            px={8}
            justify="space-between"
            align="center"
          >
            <ChakraHeading type="h3">Connect Wallet</ChakraHeading>
            <ModalCloseButton position="relative" top={0} right={0} />
          </Flex>
        </ModalHeader>
        <ModalBody p={8} zIndex={1}>
          <VStack width="100%" spacing={4}>
            <VStack width="100%" spacing={2}>
              {Object.keys(SUPPORTED_WALLETS).map((key) => {
                const option = SUPPORTED_WALLETS[key];
                return (
                  <Button
                    width="100%"
                    variant="primary"
                    size="medium"
                    onClick={() => onClick(option.connector, option.name)}
                    key={key}
                  >
                    <HStack align="center" width="100%" spacing={4}>
                      <Image src={option.icon} alt={option.name} />
                      <ChakraText size="small">{option.name}</ChakraText>
                    </HStack>
                  </Button>
                );
              })}
            </VStack>
            <VStack width="100%" spacing={0}>
              <ChakraText size="small">New to Ethereum?</ChakraText>
              <Link href="https://ethereum.org/wallets/" isExternal>
                Learn more about wallets
              </Link>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
