import { Box, Flex, Heading, Text, List, ListItem, Icon, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <Box px={[4, 8, 24]} py={16} bg="white">
      <Flex
        direction={["column", null, "row"]}
        align="center"
        justify="space-between"
        gap={10}
      >
        {/* Left Content */}
        <Box flex="1">
          <Text fontSize="md" textTransform="uppercase" color="red.700" mb={2}>
            how we started
          </Text>
          <Heading fontSize={["2xl", "3xl", "4xl"]} mb={4}>
            Rejuvenate. Renew. Thrive.
          </Heading>
          <Text mb={6} color="gray.600">
            Soul Essence Spa is a family-Spa holistic wellness sanctuary founded by Mr. Rakesh Chavan and Mr Shubham Surve. With a focus on personalized care and natural therapies, our spa offers rejuvenation for the mind, body, and soul. Using high-quality products and sustainable practices, we create a welcoming environment for our clients to achieve inner peace and balance. Come experience our exceptional service and embark on your journey towards greater health and wellbeing.
          </Text>
          <List spacing={3}>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaCheckCircle} color="red.500" mr={2} />
              Holistic wellness with passion & care.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaCheckCircle} color="red.500" mr={2} />
              Personalized approach for mind-body-soul balance.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaCheckCircle} color="red.500" mr={2} />
              Quality & sustainability: natural products, eco-friendly practices
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaCheckCircle} color="red.500" mr={2} />
              Relaxing, rejuvenating environment with expert therapists.
            </ListItem>
          </List>
        </Box>

        {/* Right Image */}
        <Box flex="1" position="relative">
          <Image
            src="https://soulessencespa.in/wp-content/uploads/2023/04/Ssde.jpg"
            alt="Soul Essence Spa"
            borderRadius="md"
            boxShadow="lg"
            width="100%"
          />
          {/* Optional decorative line */}
          <Box
            position="absolute"
            right={0}
            top="50%"
            height="2px"
            width="40px"
            bg="red.500"
            transform="translateY(-50%)"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
