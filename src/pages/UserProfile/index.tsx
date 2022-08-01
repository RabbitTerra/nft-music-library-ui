import { Box, Button, Flex, HStack, IconButton } from "@chakra-ui/react";
import coverImg from "assets/images/template_user_cover.png";
import { VideoCard } from "components/Card";
import { ChakraHeading, ChakraText } from "components/Typography";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { memo, useMemo } from "react";
import { BsPlusLg, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { shortenAddress } from "utils/functions";
import { BadgeSVG, EthereumIcon } from "utils/icons";
import theme from "utils/theme";

function Index() {
  const { account } = useActiveWeb3React();
  const user = {
    avatar:
      "https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg",
  };
  const defaultAvatar = useMemo(() => {
    if (user.avatar) {
      return user.avatar;
    } else if (account) {
      return `https://avatars.dicebear.com/api/micah/${account.toLowerCase()}.png`;
    }
    return null;
  }, [account, user.avatar]);
  return (
    <Box
      position="relative"
      width="100%"
      borderRadius="xl"
      bg={theme.colors.bg.tertiary}
      p={6}
    >
      <Box
        background={`${theme.colors.bg.profile_cover}, url(${coverImg})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        borderRadius="xl"
        width="100%"
        height={250}
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        position="relative"
        top={-70}
      >
        <Box
          background={`url(${defaultAvatar})`}
          backgroundSize="cover"
          backgroundPosition="top"
          border="3px solid"
          borderColor={theme.colors.bg.tertiary}
          borderRadius="2xl"
          mb="9px"
          width={152}
          height={122}
        />
        <HStack spacing={2} mb="10px">
          <ChakraHeading type="h3">Snoop Dogg</ChakraHeading>
          <BadgeSVG />
        </HStack>
        <HStack spacing={3} mb="7px">
          {account && (
            <Button
              border="none"
              borderRadius="base"
              height={8}
              bg="primary.500"
            >
              <HStack spacing={2}>
                <EthereumIcon />
                <ChakraText size="small" pt={1}>
                  {shortenAddress(account.toLowerCase())}
                </ChakraText>
              </HStack>
            </Button>
          )}
          <IconButton
            aria-label="twitter"
            bg="twitter.500"
            border="none"
            borderRadius="base"
            height={8}
            minWidth={8}
            icon={<BsTwitter />}
          />
          <IconButton
            aria-label="instagram"
            bg="instagram.500"
            border="none"
            borderRadius="base"
            height={8}
            minWidth={8}
            icon={<FaInstagramSquare />}
          >
            Instagram
          </IconButton>
        </HStack>
        <ChakraText size="xsmall" type="primary" textAlign="center" mb="23px">
          An elite society of 3333 unique 3D Fac Ilustrations entering the
          <br /> Solana realm to claim their kingdom!
        </ChakraText>
        <HStack>
          <Button border="none" borderRadius="xl" height={14} variant="primary">
            Listed Collections (2)
          </Button>
          <Button
            border="none"
            borderRadius="xl"
            height={14}
            colorScheme="gray"
          >
            Sold Collections (25)
          </Button>
          <Button
            border="none"
            borderRadius="xl"
            height={14}
            colorScheme="gray"
          >
            <HStack spacing={3}>
              <BsPlusLg />
              <ChakraText size="small" type="primary" textAlign="center">
                New Collection
              </ChakraText>
            </HStack>
          </Button>
        </HStack>
      </Flex>
      <HStack spacing={4} width="100%">
        {data.map((_data, _i) => (
          <VideoCard key={_i} data={_data} />
        ))}
      </HStack>
    </Box>
  );
}

export default memo(Index);

const data = [
  {
    cover: "https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg",
    title: "Baby",
    artist: {
      name: "Justin Bieber",
      avatar:
        "https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg",
    },
    likes: 65,
    order: {
      price: {
        value: 2.5,
        currency: "0x0000000000000000000000000000000000000000",
      },
    },
  },
  {
    cover: "https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg",
    title: "Baby",
    artist: {
      name: "Justin Bieber",
      avatar:
        "https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg",
    },
    likes: 65,
  },
];
