import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    AbsoluteCenter,
    useBreakpointValue
  } from "@chakra-ui/react";
  
  const SoulEssenceSection = () => {
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  
    return (
      <Box py={12} px={[4, 8, 16]}>
        <Container maxW="container.xl">
          <Flex direction={flexDirection} gap={8}>
            {/* Left Column - Content */}
            <Box flex={1} position="relative">
              <Box mb={6}>
                <Text fontSize="xl" color="red.900" mb={2}>
                  Welcome to
                </Text>
                <Heading as="h2" size="xl" mb={4}>
                  Soul Essence - The Family Spa
                </Heading>
                <Text fontSize="md" color="gray.400" mb={4}>
                  We are thrilled to offer you the opportunity to become a part of our successful
                  brand as a franchisee. At Soul Essence The Family Spa, we are dedicated to providing
                  our customers with exceptional service and top-quality products, and we believe that
                  our franchise model is the best way to expand our reach and bring our vision to
                  communities around the world.
                </Text>
                <Text fontSize="md" color="gray.400">
                  Our spa franchise offers a unique opportunity to make a positive impact on people’s
                  lives, providing a space where clients can find relaxation, rejuvenation, and inner
                  peace. With our focus on holistic wellness and natural therapies, our franchisees
                  have the opportunity to make a real difference in their communities.
                  <br />
                  <br />
                  If you’re interested in learning more about our franchise opportunities, please
                  don’t hesitate to reach out. We’d be happy to discuss the process and answer any
                  questions you may have.
                </Text>
              </Box>
  
              <Button
                color="white"
                size="lg"
                bg="black"
                borderRadius="none"
                as="a"
                href="https://soulessencespa.in/contact/"
                target="_blank"
                _hover={{ border: "1px solid black", bg: "white", color: "black" }}
              >
                contact us
              </Button>
            </Box>
  
            {/* Right Column - Image */}
            <Box flex={1} position="relative">
              <Image
                src="https://soulessencespa.in/wp-content/uploads/elementor/thumbs/Spa-1-scaled-q8eeouzjy1sfjnwhs7kjm4oo6qg8e4a0iqyr9amt5e.jpeg"
                alt="Spa 1"
                w="100%"
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
  
              <AbsoluteCenter left="0px" top={50}>
                <Image
                  src="https://soulessencespa.in/wp-content/uploads/2022/08/flower_page.png"
                  alt="Flower decoration"
                  w="193px"
                  h="158px"
                  loading="lazy"
                />
              </AbsoluteCenter>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  };
  
  export default SoulEssenceSection;
  