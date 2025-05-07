import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { motion } from "framer-motion";
  import pic1 from "../assets/service/pic1.jpg";
  import pic2 from "../assets/service/pic2.png";
  import pic3 from "../assets/service/pic3.jpg";
  
  function HomeService() {
    const services = [
      {
        title: "Pain Relief Therapy",
        description: "Alleviate pain and discomfort with targeted treatments.",
        link: "/pain-relief-therapy",
        img: pic1,
      },
      {
        title: "Relaxation Therapy",
        description:
          "Experience tranquility and stress relief with calming treatments.",
        link: "/relaxation-therapy",
        img: pic2,
      },
      {
        title: "Anti-Fatigue Therapy",
        description: "Restore energy and vitality with rejuvenating treatments.",
        link: "/anti-fatigue-therapy",
        img: pic3,
      },
      {
        title: "Immunity Booster Therapy",
        description: "Strengthen the immune system for overall wellness.",
        link: "/immunity-booster-therapy",
        img: pic1,
      },
      {
        title: "Skincare Therapy",
        description: "Enhance skin health and radiance with beauty treatments.",
        link: "/skincare-therapy",
        img: pic2,
      },
      {
        title: "Express Therapy",
        description:
          "Quick and effective solutions for relaxation and rejuvenation.",
        link: "/express-therapy",
        img: pic3,
      },
    ];
  
    const ServiceCard = ({ service, index }) => (
      <motion.div
        key={service.title}
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Box
          position="relative"
          height="400px"
          borderRadius="none"
          overflow="hidden"
          boxShadow="md"
        >
          {/* Background Image */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundImage={`url(${service.img})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            zIndex={0}
          />
  
          {/* Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.5)"
            zIndex={1}
          />
  
          {/* Content */}
          <Box
            position="relative"
            zIndex={2}
            color="white"
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            px={4}
          >
            <Text fontSize="3xl" mb={4}>
              {service.title}
            </Text>
            <Heading as="h3" fontSize="xl" mb={6}>
              {service.description}
            </Heading>
            <Button
              as="a"
              href={service.link}
              borderRadius="none"
              size="lg"
              color="white"
              bg="#8d312a"
              _hover={{
                border: "1px solid #8d312a",
                color: "#8d312a",
                bg: "transparent",
              }}
            >
              know more
            </Button>
          </Box>
        </Box>
      </motion.div>
    );
  
    return (
      <Box bg="#fcf5f5" py={20} px={[4, 8, 16]}>
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={8}
            mb={12}
          >
            <Box>
              <Text color="#943e38" textTransform="uppercase" mb={4}>
                Our treatments
              </Text>
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
                What We're Offering
              </Heading>
            </Box>
            <Box>
              <Text color="#b9b4b8">
                Our spa offers a wide range of services that are designed to help
                you relax, unwind, and connect with your inner self.
              </Text>
            </Box>
          </Grid>
  
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard service={service} index={index} key={service.title} />
            ))}
          </SimpleGrid>
  
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {services.slice(3).map((service, index) => (
              <ServiceCard
                service={service}
                index={index + 3}
                key={service.title}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  
  export default HomeService;
  