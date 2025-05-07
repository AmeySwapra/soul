import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import pic1 from "../assets/promotion/pic1.png";
import pic2 from "../assets/promotion/pic2.png";

function Promotion() {
  const cardData = [
    {
      image: pic2,
      heading: "Holistic packages",
    },
    {
      image: pic1,
      heading: "Bride & Groom Packages",
    },
  ];

  return (
    <Container maxW="container.xl" py={20} px={[4,8,16]}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            position="relative"
            bg="gray.100"
            p={12}
            borderRadius="lg"
            textAlign="left"
            backgroundImage={`url(${card.image})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            maxH="400px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              w="80%"
              h="100%"
              zIndex="0"
              bgGradient="linear(to-r, gray.100 0%, whiteAlpha.900 30%, whiteAlpha.800 45%, gray.100 60%, transparent 80%)"
              backdropBlur="md"
              pointerEvents="none"
            />

            {/* Discount Circle */}
            <Box
              position="absolute"
              top="6"
              left="300"
              bg="red.700"
              color="white"
              w="100px"
              h="100px"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              fontWeight="bold"
              fontSize="sm"
              boxShadow="lg"
              zIndex="1"
            >
              <Text fontSize="lg">30%</Text>
              <Text fontSize="xs">OFF</Text>
            </Box>

            {/* Content */}
            <Box zIndex="1" maxW="60%">
              <Heading
                fontSize="4xl"
                mb={4}
                color="gray.800"
                fontStyle="italic"
                fontWeight="semibold"
              >
                {card.heading}
              </Heading>

              <Button
                as="a"
                href="#"
                bg="white"
                color="black"
                size="lg"
                borderRadius="none"
                textTransform="uppercase"
                fontWeight="bold"
                _hover={{
                  bg: "transparent",
                  border: "1px solid #8d312a",
                  color: "red.400",
                }}
              >
                Discover More
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Promotion;
