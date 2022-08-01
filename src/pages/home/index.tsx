import {
  Box,
  Flex,
  HStack,
  IconButton,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { VideoCard } from "components/Card";
import { ChakraHeading } from "components/Typography";
import { memo, useRef, useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Slider from "react-slick";
import {
  TemplatePopularGenres,
  TemplateRecentVideos,
  TemplateTrendingVideos,
} from "utils/constants";
import { SlideArrowProps, SlideContainerProps } from "utils/interface";
import theme from "utils/theme";

function SlideContainer(props: SlideContainerProps) {
  const { is_group, title, data } = props;
  const [isLarger600, isLarger1024] = useMediaQuery([
    "(min-width: 600px)",
    "(min-width: 1024px)",
  ]);
  const slideToShow = isLarger1024 ? 3 : isLarger600 ? 2 : 1;
  const sliderRef = useRef<Slider | null>(null);
  const [curPos, setCurPos] = useState(0);

  const settings = {
    arrows: false,
    autoplay: false,
    centerMode: false,
    dots: false,
    infinite: false,
    beforeChange: beforeChange,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 3440,
        settings: {
          variableWidth: true,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          variableWidth: true,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          variableWidth: true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1560,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          variableWidth: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          variableWidth: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1270,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function CustomSlideArrow(props: SlideArrowProps) {
    const { dir, isDisabled, onClick } = props;
    return (
      <IconButton
        aria-label="slide button"
        border="1px solid"
        borderColor={theme.colors.text.primary}
        bg={theme.colors.bg.tertiary}
        minW={14}
        onClick={onClick}
        isDisabled={isDisabled}
        icon={
          dir === "left" ? (
            <MdOutlineArrowBackIos />
          ) : (
            <MdOutlineArrowForwardIos />
          )
        }
      />
    );
  }

  function beforeChange(prev: number, next: number) {
    setCurPos(next);
  }

  const handleNextSlick = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevSlick = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <VStack align="flex-start" position="relative" spacing={4} width="100%">
      <Flex align="center" justify="space-between" width="100%">
        <ChakraHeading type="h3" textTransform="capitalize">
          {title}
        </ChakraHeading>
        <HStack spacing={3}>
          <CustomSlideArrow
            dir="left"
            isDisabled={curPos === 0}
            onClick={handlePrevSlick}
          />
          <CustomSlideArrow
            dir="right"
            isDisabled={curPos === data.length || data.length <= slideToShow}
            onClick={handleNextSlick}
          />
        </HStack>
      </Flex>
      <Box width="100%">
        <Slider ref={sliderRef} {...settings}>
          {data.map((video) => (
            <VideoCard is_group={is_group} data={video} key={video.title} />
          ))}
        </Slider>
      </Box>
    </VStack>
  );
}

function Index() {
  return (
    <VStack
      bg={theme.colors.bg.tertiary}
      borderRadius="xl"
      px={7}
      py={6}
      spacing={8}
      width="100%"
    >
      <SlideContainer title="Trending Videos" data={TemplateTrendingVideos} />
      <SlideContainer
        is_group
        title="Popular Genres"
        data={TemplatePopularGenres}
      />
      <SlideContainer
        title="recently played videos"
        data={TemplateRecentVideos}
      />
    </VStack>
  );
}

export default memo(Index);
