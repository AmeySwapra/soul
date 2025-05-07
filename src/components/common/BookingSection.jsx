import { Box, Flex, Image, Heading, Text, Button } from "@chakra-ui/react";

const BookingSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      w="100%"
      bg="#bc3f38"
      color="white"
    >
      {/* Left Image */}
      <Box w={{ base: "100%", md: "33.33%" }}>
        <Image
          src="https://soulessencespa.in/wp-content/uploads/2022/08/background-revslider-07.jpg"
          alt="Spa Background"
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      {/* Right Content */}
      <Box
        w={{ base: "100%", md: "66.66%" }}
        p={{ base: 6, md: 12 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={6}
          mb={4}
        >
          <Box>
            <Text fontSize="lg" color="gray.300">
              Book our services
            </Text>
            <Heading size="lg" color="white">
              Need to Relax? <br /> Want a Recharge?
            </Heading>
          </Box>

          <Button
            color='white'
            bg={'#8d312a'}
            size="lg"
            as="a"
            borderRadius={'none'}
          
          >
            Book now
          </Button>
        </Flex>

        <Text fontSize="sm" color="gray.400">
          * Excluding bank charges &amp; interest. Government taxes, as
          applicable, will be added to the price above
        </Text>
      </Box>
    </Flex>
  );
};

export default BookingSection;
