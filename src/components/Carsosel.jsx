import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import WaterWave from "react-water-wave";
import pic1 from "../assets/images/pic3.jpeg";
import pic2 from "../assets/images/pic4.jpg";
import pic3 from "../assets/images/pic5.jpg";

const slides = [
  {
    title: "Welcome to Soul Essence Spa",
    heading: "Unwind and Rejuvenate with Your Family at Soul Essence Spa",
    buttonText: "Discover More",
    buttonLink: "/about-us",
    bgImage: pic1,
  },
  {
    title: "Revitalize Your Soul",
    heading: "Immerse Yourself in Relaxation with Your Loved Ones at Soul Essence Spa",
    buttonText: "Discover More",
    buttonLink: "/about-us",
    bgImage: pic2,
  },
  {
    title: "Unwind and Recharge",
    heading: "Embrace Serenity with Your Family at Soul Essence Spa",
    buttonText: "Discover More",
    buttonLink: "/about-us",
    bgImage: pic3,
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const headingSize = useBreakpointValue({
    base: "2xl",
    md: "4xl",
    lg: "5xl",
  });
  const titleSize = useBreakpointValue({ base: "md", md: "lg" });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const textSlideIn = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 10, stiffness: 100, delay: 0.3 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <Box
      position="relative"
      height={{ base: "500px", md: "700px", lg: "600px" }}
      overflow="hidden"
    >
      <WaterWave
        imageUrl={slides[currentSlide].bgImage}
        dropRadius={15}
        perturbance={0.03}
        style={{ width: "100%", height: "100%" }}
      >
        {(methods) => (
          <Box position="relative" width="100%" height="100%">
            {/* Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="blackAlpha.600"
              zIndex={1}
            />

            {/* Foreground Content */}
            <Container
              maxW="container.xl"
              height="100%"
              position="relative"
              zIndex={2}
            >
              <Flex
                direction="column"
                justify="center"
                height="100%"
                pl={{ base: 4, md: 70 }}
              >
                <Box
                  as={motion.div}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Box as={motion.div} variants={textSlideIn}>
                    <Text
                      fontSize={titleSize}
                      color="whiteAlpha.800"
                      textTransform="uppercase"
                      letterSpacing="3px"
                      fontWeight="600"
                      mb={4}
                      textShadow="0 0 10px rgba(0,0,0,0.8)"
                    >
                      {slides[currentSlide].title}
                    </Text>
                  </Box>

                  <Box as={motion.div} variants={textSlideIn}>
                    <Heading
                      as="h1"
                      fontSize={headingSize}
                      color="white"
                      fontWeight="400"
                      lineHeight={{ base: "35px", md: "70px" }}
                      mb={8}
                      textShadow="0 0 15px rgba(0,0,0,0.9)"
                    >
                      {slides[currentSlide].heading}
                    </Heading>
                  </Box>

                  <Box as={motion.div} variants={textSlideIn}>
                    <Button
                      as={motion.a}
                      href={slides[currentSlide].buttonLink}
                      bg="#61201d"
                      color="white"
                      px={12}
                      py={6}
                      textTransform="uppercase"
                      letterSpacing="2px"
                      fontSize="sm"
                      fontWeight="bold"
                      _hover={{ bg: "#de968d", color: "white" }}
                      maxW="fit-content"
                      textShadow="0 0 5px rgba(0,0,0,0.6)"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {slides[currentSlide].buttonText}
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Container>
          </Box>
        )}
      </WaterWave>

      {/* Navigation dots */}
      <Box
        position="absolute"
        bottom="30px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={4}
        display="flex"
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            as={motion.div}
            w="12px"
            h="12px"
            borderRadius="full"
            bg={currentSlide === index ? "white" : "rgba(255,255,255,0.5)"}
            mx={1}
            cursor="pointer"
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
