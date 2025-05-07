import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState, useRef } from "react";
import before from "../assets/promotion/before.jpg";
import after from "../assets/promotion/after.jpg";

const BeforeAfterSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const slides = [
    {
      id: 1,
      beforeImage: after,
      afterImage: before,
      beforeText: "BEFORE",
      afterText: "AFTER",
      description: "Project transformation showcase",
    },
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const position =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  return (
    <Box py={16}>
      {/* Heading */}
      <Box textAlign="center" my={8}>
        <Heading fontSize={'xl'} color="red.700">Check out work</Heading>
        <Text fontSize="4xl" color="black.500">Before & After Results</Text>
      </Box>

      {/* Slider */}
      <Box
        position="relative"
        width="100%"
        height="500px"
        overflowX="hidden"
        bg="gray.800"
        ref={containerRef}
        onMouseLeave={() => setSliderPosition(50)}
      >
        <Flex position="absolute" width="100%" height="100%" overflow="hidden">
          {/* Before Image */}
          <Box
            position="absolute"
            width="100%"
            height="100%"
            backgroundImage={`url(${slides[activeSlide].beforeImage})`}
            backgroundSize="cover"
            backgroundPosition="center center"
            zIndex="1"
          />

          {/* After Image */}
          <Box
            position="absolute"
            width={`${sliderPosition}%`}
            height="100%"
            overflow="hidden"
            zIndex="2"
          >
            <Box
              width="100vw"
              height="100%"
              backgroundImage={`url(${slides[activeSlide].afterImage})`}
              backgroundSize="cover"
              backgroundPosition="center center"
            />
          </Box>

          {/* Slider Handle */}
          <Box
            position="absolute"
            left={`${sliderPosition}%`}
            top="0"
            height="100%"
            width="2px"
            bg="whiteAlpha.500"
            border={'2px solid white'}
            zIndex="5"
            transform="translateX(-1px)"
            cursor="ew-resize"
            onMouseDown={handleMouseDown}
          >
            <Flex
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="45px"
              height="45px"
              border={'2px solid white'}
              borderRadius="full"
              bg="transparent"
              color="white"
              fontSize="35px"
              alignItems="center"
              justifyContent="center"
              cursor="move"
            >
              <Text mr="10px" color="white">←</Text>
              <Text ml="10px" color="white">→</Text>
            </Flex>
          </Box>
        </Flex>

        
      
      </Box>
    </Box>
  );
};

export default BeforeAfterSlider;
