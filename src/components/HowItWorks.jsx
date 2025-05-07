import { Box, Container, Flex, Heading, Text, Image } from "@chakra-ui/react";

const HowItWorks = () => {
  const imageSize = 200; 

  return (
    <Box as="section" py={20} px={[4,8,16]} bg="#fdf5f3" position="relative">
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        {/* Heading Section */}
        <Box textAlign="center" mb={12}>
          <Text as="h3" color="red.500" fontSize="xl" textTransform={'uppercase'} fontWeight="semibold" mb={2}>
            3 easy steps
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} color="gray.800">
            How It works?
          </Heading>
        </Box>

        {/* Wrapper for line and steps */}
        <Box position="relative" mb={12}>
          {/* Horizontal red line with rounded ends */}
          <Box
            position="absolute"
            top={`${imageSize / 2}px`}
            left={0}
            w="100%"
            h="2px"
            bg="red.500"
            borderRadius="full"
            zIndex={0}
          />

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="flex-start"
            gap={{ base: 12, md: 4 }}
            position="relative"
            zIndex={1}
          >
            {/* Step */}
            {[
              {
                id: "01",
                title: "Consultation",
                text:
                  "Our skilled therapists will assess your needs and preferences to customize the perfect massage and oil combination for you.",
                image:
                  "http://demo.ovatheme.com/mellis/wp-content/uploads/2022/08/process-01.jpg",
              },
              {
                id: "02",
                title: "Treatment",
                text:
                  "Experience specialized Treatment such as sleep-enhancing techniques, anxiety-relieving massages, designed to promote wellness and balance.",
                image:
                  "http://demo.ovatheme.com/mellis/wp-content/uploads/2022/08/process-02.jpg",
              },
              {
                id: "03",
                title: "Finalizing",
                text:
                  "Our therapists may provide you with self-care recommendations, lifestyle changes, or relaxation techniques to incorporate into your daily routine for long-term well-being.",
                image:
                  "http://demo.ovatheme.com/mellis/wp-content/uploads/2022/08/process-03.jpg",
              },
            ].map((step, index) => (
              <Box
                key={index}
                flex="1"
                textAlign="center"
                px={{ base: 4, md: 6 }}
                py={6}
                borderRadius="lg"
                position="relative"
              >
                <Box position="relative" mb={6}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    p={'10px'}
                    borderRadius="full"
                    border="2px solid"
                    borderColor="red.500"
                    objectFit="cover"
                    w={`${imageSize}px`}
                    h={`${imageSize}px`}
                    mx="auto"
                    zIndex={1}
                    bg="white"
                  />
                </Box>
                <Text
                  bg="red.500"
                  color="white"
                  borderRadius="full"
                  w="40px"
                  h="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight="bold"
                  fontSize="lg"
                  mx="auto"
                  mb={3}
                  zIndex={2}
                  position="relative"
                >
                  {step.id}
                </Text>
                <Heading as="h4" fontSize="xl" mb={3} color="gray.800">
                  {step.title}
                </Heading>
                <Text color="gray.600">{step.text}</Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
