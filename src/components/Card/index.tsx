import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { ChakraHeading, ChakraText } from "components/Typography";
import { BsPlusLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { abbreviateNumber } from "utils/functions";
import { HeartSVG, VideoSVG } from "utils/icons";
import { VideoCardProps } from "utils/interface";
import theme from "utils/theme";

export function VideoCard(props: VideoCardProps) {
  const { data, is_group } = props;

  const numberFormat = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 3,
    }).format(val);
  };

  return (
    <Box
      bg={theme.colors.border.video_card}
      borderRadius="3xl"
      boxShadow={theme.colors.boxShadow.video_card}
      padding="2.4px"
      minW={{ base: "100%", sm: 72 }}
      maxW={{ sm: 72, xxxl: "300px" }}
    >
      <VStack
        bg={theme.colors.bg.video_card}
        borderRadius="3xl"
        padding={3}
        spacing={5}
      >
        <Box
          borderRadius="xl"
          position="relative"
          bgImage={data?.cover}
          bgPos="center"
          bgSize="cover"
          width="100%"
          minH={40}
        >
          <IconButton
            aria-label="plus"
            bg={theme.colors.text.primary}
            color={theme.colors.text.button}
            icon={<BsPlusLg />}
            position="absolute"
            right={4}
            top={4}
          />
        </Box>
        <Flex align="center" justify="space-between" width="100%">
          <HStack spacing={2.5}>
            {!is_group && <Avatar src={data.artist.avatar} />}
            <VStack align="flex-start" spacing={1}>
              <ChakraHeading type="h4">{data.title}</ChakraHeading>
              <ChakraText size="small" type="tertiary">
                {is_group
                  ? `${numberFormat(data.total)} songs`
                  : data.artist.name}
              </ChakraText>
            </VStack>
          </HStack>
          <Button variant="ghost" leftIcon={<HeartSVG />}>
            <ChakraText size="small" type="button">
              {abbreviateNumber(data.likes)}
            </ChakraText>
          </Button>
        </Flex>
        {is_group ? (
          <Button
            rightIcon={
              <Box
                position="absolute"
                right={5}
                top="50%"
                transform="translate(-50%, -40%)"
              >
                <MdOutlineArrowForwardIos />
              </Box>
            }
            variant="primary"
            size="medium"
            width="100%"
          >
            <ChakraText size="regular" type="primary">
              Browse
            </ChakraText>
          </Button>
        ) : (
          <HStack spacing={1.5} width="100%">
            <Button
              leftIcon={<VideoSVG />}
              width="100%"
              variant="primary"
              size="medium"
            >
              <ChakraText size="regular" type="primary">
                View Video
              </ChakraText>
            </Button>
            <IconButton
              aria-label="play"
              icon={<FaPlay fontSize={16} />}
              variant="primary"
              size="medium"
              minW={14}
            />
          </HStack>
        )}
        {data.order && (
          <Flex justify="space-between" align="flex-start" width="100%">
            <ChakraText size="small" type="tertiary">
              Purchase Price
            </ChakraText>
            <VStack spacing="5px"></VStack>
          </Flex>
        )}
      </VStack>
    </Box>
  );
}
