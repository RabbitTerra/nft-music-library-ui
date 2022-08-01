import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { VideoCard } from "components/Card";
import { ChakraHeading, ChakraText } from "components/Typography";
import { memo } from "react";
import theme from "utils/theme";

function Index() {
  return (
    <Box
      position='relative'
      width={'100%'}
      borderRadius="xl"
      bg={theme.colors.bg.tertiary}
      px={7}
      py={6}
    >
      <Box
        width={'100%'}
        borderRadius="xl"
        bg='gray.300'
        mb={30}
      >
        <Image
          width={'100%'}
          height={'auto'}
          src='https://fakeimg.pl/250x50/'
          alt='Dan Abramov'
          borderRadius='xl'
        />
        <Flex h='100px' paddingX={35}>
          <Box position='relative' width={152}>
            <Image
              position='absolute'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNROwpaSLOJBEabsepqpCVZnKKMkk5zrT1g&usqp=CAU"
              alt='avatar'
              width={152}
              borderRadius='xl'
              top='-84px'
            />
          </Box>
          <Flex direction='column' justify='center' paddingLeft={18}>
            <ChakraHeading type="h3">Snoop Dogg</ChakraHeading>
            <ChakraText size="small" type="tertiary">
              @snoopdogg
            </ChakraText>
          </Flex>
        </Flex>
      </Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={'12px'}>
        <GridItem colSpan={2}>
          <ProfileBlock>
            <ChakraHeading type="h4">Portfolio</ChakraHeading>
            <HStack
              spacing={4}
              width="100%"
            >
              {data.map((_data, _i) =>
                <VideoCard key={_i} is_group={false} data={_data} />
              )}
            </HStack>
          </ProfileBlock>
        </GridItem>
        <GridItem>
          <Grid templateRows='repeat(2, 1fr)' gap={'12px'}>
            <GridItem>
              <ProfileBlock>
                <ChakraHeading type="h4">Bio</ChakraHeading>
                <ChakraText size="xsmall" type="tertiary">
                  Snoop Dogg is an American rapper, singer, songwriter, producer, media personality, entrepreneur, and actor.
                  <br /><br />
                  His music career began in 1992 when he was discovered by Dr. Dre and featured on Dre's solo debut, "Deep Cover", and then on Dre's solo debut album, The Chronic. He has since sold over 23 million albums in the United States and 35 million albums worldwide.
                </ChakraText>
              </ProfileBlock>
            </GridItem>
            <GridItem>
              <ProfileBlock>
                <ChakraHeading type="h4" marginBottom='12px'>Social Media</ChakraHeading>
                <Flex gap={3}>
                  <Button
                    border="none"
                    borderRadius="xl"
                    height={14}
                    bg='twitter.500'
                  >
                    Twitter
                  </Button>
                  <Button
                    border="none"
                    borderRadius="xl"
                    height={14}
                    bg='instagram.500'
                  >
                    Instagram
                  </Button>
                </Flex>
              </ProfileBlock>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>

    </Box>
  );
}

export default memo(Index);
const ProfileBlock = styled(Box)`
  background: ${theme.colors.blackAlpha[200]};
  border-radius: 10px;
  padding: 17px 17px 46px 17px;
`;
const data = [
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    artist: {
      name: 'Justin Bieber',
      avatar: 'https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg'
    },
    likes: 65
  },
  {
    cover: 'https://miro.medium.com/max/1400/0*4SaN9eqK3dGYWvmA.jpg',
    title: 'Baby',
    artist: {
      name: 'Justin Bieber',
      avatar: 'https://64.media.tumblr.com/4da2b845c54c4c150afb8f1039218c24/06146b0254f4595e-83/s1280x1920/ab0f007ac1bbdce547c57f052fb5c26fe6338a61.jpg'
    },
    likes: 65
  },
]