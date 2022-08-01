import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import Logo from "assets/images/logo.png";
import WalletIcon from "assets/images/wallet.png";
import { PrimaryButton, SecondaryButton } from "components/Button";
import { WalletModal } from "components/Modal";
import { ChakraHeading, ChakraText } from "components/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectGuides, connectorLocalStorageKey } from "utils/constants";
import { PolygonIconSVG } from "utils/icons";
import theme from "utils/theme";

function ConnectWalletPage() {
  const [isWalletModal, setWalletModal] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { activate, active, error } = useWeb3React();

  const tryActivation = async (
    connector:
      | (() => Promise<AbstractConnector>)
      | AbstractConnector
      | undefined,
    name = ""
  ) => {
    const conn =
      typeof connector === "function" ? await connector() : connector;

    conn &&
      (await activate(conn, undefined, true).catch((error) => {
        console.error(error);
        if (error instanceof UnsupportedChainIdError) {
          activate(conn); // a little janky...can't use setError because the connector isn't set
          setWalletModal(false);
        } else {
          toast({
            title: `Something went wrong. please try again later.`,
            status: "error",
            isClosable: true,
          });
        }
      }));

    window.localStorage.setItem(connectorLocalStorageKey, name);
  };

  useEffect(() => {
    if (!active && error) {
      toast({
        title: `Wrong network connected. Switch to Polygon network.`,
        status: "error",
        isClosable: true,
      });
    } else if (active) {
      navigate("/");
    }
  }, [active, error, navigate, toast]);

  return (
    <Box as="main" minHeight="100vh">
      <Flex bg={theme.colors.bg.secondary} justify="center" py={3.5}>
        <Image src={Logo} alt="logo" />
      </Flex>
      <Stack
        align="center"
        direction={{ base: "column", md: "row" }}
        padding={9}
        spacing={8}
        width="100%"
      >
        <VStack
          align="center"
          bg={theme.colors.bg.tertiary}
          borderRadius="xl"
          flex={1.5}
          padding={6}
          width="100%"
          spacing={8}
        >
          <ChakraHeading type="h3" fontWeight={700} textAlign="center">
            How to Buyback Your Tokens!
          </ChakraHeading>
          <VStack align="flex-start" spacing={5} width="100%">
            {ConnectGuides.map((text, idx) => (
              <HStack
                bg="rgba(255,255,255,0.04)"
                borderRadius="lg"
                px={2}
                py={5}
                spacing={3.5}
                key={idx}
                width="100%"
              >
                <Box position="relative">
                  <Icon as={PolygonIconSVG} fontSize={40} />
                  <ChakraHeading
                    type="h2"
                    position="absolute"
                    top="40%"
                    left="45%"
                    transform="translate(-50%, -50%)"
                    fontWeight={300}
                  >
                    {idx + 1}
                  </ChakraHeading>
                </Box>
                <ChakraText size="small" type="secondary">
                  {text}
                </ChakraText>
              </HStack>
            ))}
          </VStack>
          <Flex
            px={8}
            py={6}
            width="100%"
            bg={theme.colors.text.primary}
            borderRadius="lg"
            justify="space-between"
            align="center"
          >
            <VStack align="flex-start" spacing={1}>
              <HStack spacing={4}>
                <ChakraText size="regular" type="black" fontWeight={700}>
                  Amount of Fullsend:
                </ChakraText>
                <ChakraText size="regular" type="black" fontWeight={700}>
                  ---
                </ChakraText>
              </HStack>
              <HStack spacing={4}>
                <ChakraText size="regular" type="black" fontWeight={700}>
                  Value of Fullsend:
                </ChakraText>
                <ChakraText size="regular" type="black" fontWeight={700}>
                  ---
                </ChakraText>
              </HStack>
              <HStack spacing={4}>
                <ChakraText size="regular" type="black" fontWeight={700}>
                  Amount of Arcadix you receive:
                </ChakraText>
                <ChakraText size="regular" type="black" fontWeight={700}>
                  ---
                </ChakraText>
              </HStack>
            </VStack>
            <PrimaryButton
              bg={theme.colors.button.secondary.bg}
              borderColor="transparent"
            >
              Redeem Arcadix
            </PrimaryButton>
          </Flex>
        </VStack>
        <VStack flex={1} width="100%" spacing={12}>
          <ChakraHeading type="h2" fontWeight={800}>
            Migration
          </ChakraHeading>
          <VStack
            px={6}
            py={9}
            spacing={12}
            width="100%"
            maxW={96}
            bg={theme.colors.bg.wallet}
            borderRadius="3xl"
          >
            <Image src={WalletIcon} alt="wallet" />
            <SecondaryButton
              height={16}
              width="100%"
              fontWeight={700}
              onClick={() => setWalletModal(true)}
            >
              Connect Wallet
            </SecondaryButton>
          </VStack>
        </VStack>
      </Stack>
      <WalletModal
        isOpen={isWalletModal}
        onClose={() => setWalletModal(false)}
        onClick={tryActivation}
      />
    </Box>
  );
}

export default ConnectWalletPage;
