import {
  Box,
  Container,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import pic from "../assets/banner/pic1.jpg";

function Offers() {
  const features = [
    "Aroma Therapy",
    "Body Massage",
    "Body Wrap",
    "Hand & Feet",
    "Face Masks",
    "Hot Stone",
    "Spring Water",
    "Manicure",
  ];
  return (
    <>
      <Box
        bg="brand.50"
        py={20}
        px={[4,8,16]}
        position="relative"
        backgroundImage={`url(${pic})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "blackAlpha.600",
          zIndex: 0,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex="1">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
            <Box>
              <Text color="white"  textTransform="uppercase" fontSize={'xl'} mb={4}>
                What else we do
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "5xl" }}
                color="white"
                mb={8}
              >
                Get An Incredible Spa Experience with
                <br />
                SoulEssence - The Family Spa Center
              </Heading>
            </Box>
            <Box>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
                <List spacing={4}>
                  {features.slice(0, 4).map((feature) => (
                    <ListItem key={feature} color={'white'}>
                      <ListIcon as={FaCheckCircle} color="#8d312a" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
                <List spacing={4}>
                  {features.slice(4).map((feature) => (
                    <ListItem key={feature} color={'white'}>
                      <ListIcon as={FaCheckCircle} color="#8d312a" />
                      {feature}
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Offers;
