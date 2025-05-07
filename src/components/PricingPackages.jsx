import { Box, Container, Flex, Heading, Text, List, ListItem, Button, Icon, Divider } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const PricingPackages = () => {
  return (
    <Box as="section" py={20} px={[4,8,20]} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        {/* Section Heading */}
        <Box textAlign="center" mb={16}>
          <Text as="h3" color="#8d312a" fontSize="xl" fontWeight="semibold" mb={2}>
            Our
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} color="black">
            Holistic packages
          </Heading>
        </Box>

        {/* Pricing Packages Grid */}
        <Flex direction="column" gap={12}>
          {/* Row 1 - Bridal & Groom Packages */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Pre Bridal Package */}
            <PackageCard
              title="Pre Bridal Package"
              price="9000"
              period=""
              icon="spa-candles"
              features={[
                "Bridal facial",
                "Signature Pedicure & Manicure",
                "Aroma Therapy",
                "Body Polish with Wrap",
                "D-tan",
                "Many More"
              ]}
            />

            {/* Groom Package */}
            <PackageCard
              title="Groom Package"
              price="9000"
              period=""
              icon="spa-candles"
              features={[
                "Groom facial",
                "Signature Pedicure & Manicure",
                "Aroma Therapy",
                "Body Polish with Wrap",
                "D-tan",
                "Many More"
              ]}
            />
          </Flex>

          {/* Row 2 - Ladies Bliss Packages */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Ladies Bliss - Express */}
            <PackageCard
              title="Ladies Bliss Package - Express"
              price="3500"
              period="/ 90 min"
              icon="spa-candles"
              features={[
                "Swedish Massage with Clove Oil",
                "Soothing Head",
                "Neck and Shoulder Massage"
              ]}
            />

            {/* Ladies Bliss - Special */}
            <PackageCard
              title="Ladies Bliss Package - Special"
              price="4000"
              period="/ 2 hrs"
              icon="lotus-flower"
              features={[
                "Swedish Massage with Wintergreen",
                "Bayleaf and Clove",
                "Skin Whiting Facial"
              ]}
            />
          </Flex>

          {/* Row 3 - Gentleman Retreat Packages */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Gentleman Retreat - Express */}
            <PackageCard
              title="Gentleman Retreat Package - Express"
              price="3500"
              period="/ 90 min"
              icon="spa-candles"
              features={[
                "Swedish Massage with Clove Oil",
                "Soothing Head",
                "Neck and Shoulder Massage"
              ]}
            />

            {/* Gentleman Retreat - Special */}
            <PackageCard
              title="Gentleman Retreat Package - Special"
              price="4000"
              period="/ 2 hrs"
              icon="lotus-flower"
              features={[
                "Swedish Massage with Wintergreen",
                "Bayleaf and Clove",
                "Skin Whiting Facial"
              ]}
            />
          </Flex>

          {/* Row 4 - Special Packages */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Orientel Secret */}
            <PackageCard
              title="Orientel Secret"
              price="4800"
              period="/ 2 hrs 30 min"
              icon="spa-candles"
              features={[
                "(Yoga Massage) Thai Massage",
                "Refreshing Foot Reflexology",
                "Skin Type Facial"
              ]}
            />

            {/* Ayurvedic Wisdom */}
            <PackageCard
              title="Ayurvedic Wisdom"
              price="4000"
              period="/ 2 hrs"
              icon="lotus-flower"
              features={[
                "Ayurvedic Massage",
                "Shirodhara"
              ]}
            />
          </Flex>

          {/* Row 5 - Working Professionals */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Working Professionals - Express */}
            <PackageCard
              title="Working Professionals - Express Packages"
              price="2000"
              period="/ 60 min"
              icon="spa-candles"
              features={[
                "Comforting Back Massage",
                "Eam impedit molestie ett",
                "Soothing Head",
                "Neck Shoulder Massage"
              ]}
            />

            {/* Working Professionals - Special */}
            <PackageCard
              title="Working Professionals - Special Packages"
              price="2800"
              period="/ 90 Min"
              icon="lotus-flower"
              features={[
                "Express Therapy Combination",
                "Add list text service"
              ]}
            />
          </Flex>

          {/* Row 6 - Home Makers */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Home Makers - Express */}
            <PackageCard
              title="Home Makers - Express Package"
              price="3300"
              period="/ 90 min"
              icon="spa-candles"
              features={[
                "Energy Restoring Massage",
                "Refresher foot Reflexology"
              ]}
            />

            {/* Home Makers - Special */}
            <PackageCard
              title="Home Makers - Special Package"
              price="3300"
              period="/ 90 min"
              icon="lotus-flower"
              features={[
                "Thai Massage",
                "Comforting Back Massage"
              ]}
            />
          </Flex>

          {/* Row 7 - Sports & Relaxation */}
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Sports Special */}
            <PackageCard
              title="Sports Special Package"
              price="3200"
              period="/ 90 min"
              icon="spa-candles"
              features={[
                "Deep Tissue Massage with Wintergreen Oil",
                "Refresher Foot Reflexology"
              ]}
            />

            {/* Deep Relaxation */}
            <PackageCard
              title="Deep Relaxation Package"
              price="3200"
              period="/ 90 min"
              icon="lotus-flower"
              features={[
                "Swedish Massage with Clove",
                "Soothing Head",
                "Neck and Shoulder Massage"
              ]}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};


const PackageCard = ({ title, price, period, icon, features }) => {
  return (
    <Box
      flex="1"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl", bg: '#fcf5f5' }}
    >
      {/* Title with Icon */}
      <Flex justify="space-between" align="center" mb={4}>
        <Heading  fontSize="4xl" color="black">
          {title}
        </Heading>
        <Icon as={icon === "lotus-flower" ? FlaticonLotus : FlaticonSpa} boxSize={6} color="primary.500" />
      </Flex>
        <Divider />

      {/* Price */}
      <Box mb={4}>
        <Flex align="baseline">
          <Text fontSize="sm" fontWeight="bold" color="gray.500" mr={1}>
            ₹
          </Text>
          <Text fontSize="3xl" fontWeight="bold" color="gray.800">
            {price}
          </Text>
          <Text fontSize="sm" color="gray.500" ml={1}>
            {period}
          </Text>
        </Flex>
      </Box>

      {/* Features List */}
      <List spacing={2} mb={6}>
        {features.map((feature, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <Icon as={FaCheck} color="#8d312a" mr={2} />
            <Text color="gray.600">{feature}</Text>
          </ListItem>
        ))}
      </List>

      {/* Book Now Button */}
      <Button
        color={'white'}
        bg={'#de968d'}
        borderRadius={'none'}
        size={'lg'}
        as="a"
        href="#"
       
      >
        Book now
      </Button>
    </Box>
  );
};


const FlaticonSpa = () => <span>🕯️</span>;
const FlaticonLotus = () => <span>🌸</span>;

export default PricingPackages;