import { Box, Flex, Heading, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const SpaIntroduction = () => {
  return (
    <Box py={10} px={[4,8,16]} bg="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
        gap={10}
      >
        {/* Image Section */}
        <Box flex="1">
          <Image
            src="https://soulessencespa.in/wp-content/uploads/2023/04/Spa-1-scaled.jpeg"
            alt="Spa"
            objectFit="cover"
            borderRadius="100%"  
            w="100%"
            h="600px"
          />
        </Box>

        {/* Content Section */}
        <Box flex="1">
          <Stack spacing={4}>
            <Text fontSize="xl" color="gray.500" fontWeight="bold">
              Our introduction
            </Text>
            <Heading as="h2" size="xl" fontWeight="bold">
              We’re Experienced Spa & Beauty Experts
            </Heading>
            <Text fontSize="md" color="gray.700">
              Soul Essence Spa is a family-friendly spa that offers a wide range of personalized services for
              relaxation and rejuvenation. Our spa features high-quality, all-natural products and a peaceful
              atmosphere for a calming experience. From massages to facials, body treatments to couples'
              packages, our team of skilled therapists and estheticians are dedicated to providing exceptional
              service to exceed your expectations. Discover the essence of your soul at Soul Essence Spa and
              experience the benefits of self-care for your mind, body, and soul.
            </Text>
            <List spacing={3} pt={2}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Rejuvenate mind, body, and soul with personalized treatments
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Wide range of services including massages, facials, and more.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Specialized services for couples and families available.
              </ListItem>
            </List>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default SpaIntroduction;
