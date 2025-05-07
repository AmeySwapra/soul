import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const Carsosel = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative" height="830px" bg="gray.800" overflow="hidden">
        <Image
          src="https://soulessencespa.in/wp-content/uploads/2023/04/Spa-1-scaled.jpeg"
          alt="Spa Background"
          objectFit="cover"
          width="100%"
          height="100%"
          opacity={0.7}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="blackAlpha.600"
        />
        <Container
          maxW="container.xl"
          height="100%"
          position="relative"
          zIndex="1"
        >
          <Flex
            direction="column"
            justify="center"
            height="100%"
            pl={{ base: 4, md: 70 }}
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.600"
              textTransform="uppercase"
              letterSpacing="3px"
              fontWeight="500"
              mb={4}
            >
              Welcome to Soul Essence Spa
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
              color="white"
              fontWeight="400"
              lineHeight={{ base: "35px", md: "70px" }}
              mb={8}
            >
              Unwind and Rejuvenate with
              <br />
              Your Family at Soul Essence Spa
            </Heading>
            <Button
              as="a"
              href="/about-us"
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
            >
              Discover More
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Carsosel;
