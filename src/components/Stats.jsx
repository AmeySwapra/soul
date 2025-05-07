import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import CountUp from "react-countup";
  import { useInView } from "react-intersection-observer";
  import { FaSpa, FaUsers, FaSmile } from "react-icons/fa";
  import { GiHerbsBundle } from "react-icons/gi";
  import pic from "../assets/banner/pic2.jpg";
  
  function Stats() {
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
  
    const stats = [
      { icon: FaSpa, number: 10, label: "Years Experience" },
      { icon: FaUsers, number: 260, label: "Members", suffix: "+" },
      { icon: GiHerbsBundle, number: 52, label: "Herbal Treatment" },
      { icon: FaSmile, number: 1127, label: "Happy Clients", suffix: "+" },
    ];
  
    return (
      <Box
        position="relative"
        py={20}
        px={[4, 8, 16]}
        ref={ref}
        backgroundImage={`url(${pic})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        overflow="hidden"
      >
        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="#fbf4f4"
          opacity={0.92}
          zIndex={0}
        />
  
        {/* Content */}
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={12} textAlign="left">
            {stats.map((stat, index) => (
              <Flex key={index} align="center" gap={4}>
                <Icon as={stat.icon} color="#8d312a" fontSize="6xl" />
                <Box>
                  <Heading as="h3" fontSize="5xl" mb={1} color="gray.800">
                    {inView && (
                      <CountUp
                        end={stat.number}
                        duration={2}
                        suffix={stat.suffix || ""}
                      />
                    )}
                  </Heading>
                  <Text color="#a6a2a7" fontSize="lg">
                    {stat.label}
                  </Text>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  
  export default Stats;
  