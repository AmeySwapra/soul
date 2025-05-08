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
      py={[10, 12, 20]}
      px={[4, 6, 16]}
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
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={[8, 10, 12]}>
          {stats.map((stat, index) => (
            <Flex key={index} align="center" gap={[3, 4, 6]}>
              <Icon as={stat.icon} color="#8d312a" fontSize={["3xl", "4xl", "6xl"]} />
              <Box>
                <Heading as="h3" fontSize={["2xl", "3xl", "5xl"]} mb={1} color="gray.800">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix || ""}
                    />
                  )}
                </Heading>
                <Text color="#a6a2a7" fontSize={["sm", "md", "lg"]}>
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
