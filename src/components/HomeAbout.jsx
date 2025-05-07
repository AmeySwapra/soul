import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function HomeAbout() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Container maxW="container.xl" py={20} px={[4, 8, 20]}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
        <Box position="relative" sx={{ perspective: "1000px" }}>
          <Image
            src="https://soulessencespa.in/wp-content/uploads/elementor/thumbs/IMG_82202210539-q8eem0j4vy97h7dhvhbdxmkthyq1hyz68zamreni8w.jpg"
            alt="Spa Interior"
            borderRadius="lg"
          />

          {!isMobile && (
            <MotionBox
              position="absolute"
              bottom="90px"
              right="-10px"
              zIndex={1}
             
              boxShadow="1px 1px 30px gray"
              width="230px"
              height="288px"

             
              initial={{ rotateY: 0 }}
              whileInView={{ rotateY: 360 }}
              viewport={{ amount: 0.8, once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <Image
                src="https://soulessencespa.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-07-26-at-1.04.59-PM-2-q8eemto1uk9nlwm7jxu0ic01famicdh4koi9vmaytc.jpeg"
                alt="Spa Decoration"
                width="230px"
                height="288px"
                 border="10px solid white"
               
              />
            </MotionBox>
          )}
        </Box>

        <Box>
          <Text color="#8d312a" textTransform="uppercase" mb={4}>
            About us
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "6xl" }} mb={6}>
            An Incredible{' '}
            <Box as="span" color="#8d312a">
              Spa Experience
            </Box>
          </Heading>
          <Text mb={6}>
            Welcome to Soul Essence the family spa where you can find
            rejuvenation for your mind, body, and soul. Our spa offers a wide
            range of services that are designed to help you relax, unwind, and
            connect with your inner self.
          </Text>
          <Text mb={8}>
            We believe that self-care is an essential part of overall
            wellness, and we are dedicated to providing our clients with the
            best possible spa experience. Our team of highly skilled
            therapists and estheticians are committed to delivering
            personalized treatments that are tailored to meet the individual
            needs of each client.
          </Text>
          <Flex align="center" gap={8}>
            <Button
              as="a"
              href="#"
              borderRadius="none"
              _hover={{ border: '1px solid #8d312a', bg: 'white', color: '#8d312a' }}
              color="white"
              bg="#8d312a"
              size="sm"
              px={12}
              py={6}
            >
              Book now
            </Button>

            <Flex align="center" gap={4}>
              <Box
                p={2}
                border="1px solid gray"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaPhone} color="#8d312a" fontSize="2xl" />
              </Box>

              <Box
                position="relative"
                _hover={{
                  _after: { width: '100%' },
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '2px',
                  width: '0%',
                  bg: '#8d312a',
                  transition: 'width 0.4s ease-in',
                }}
              >
                <Text fontSize="sm" color="gray.500">
                  Call Anytime
                </Text>
                <Text fontWeight="bold">+919371457979</Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Grid>
    </Container>
  );
}

export default HomeAbout;
