import {
  Box,
  Flex,
  Icon,
  Link,
  HStack,
  Button,
  useBreakpointValue,
  Circle,
} from "@chakra-ui/react";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail, MdPhone } from "react-icons/md";

const Topbar = () => {
  const display = useBreakpointValue({ base: "none", md: "none", lg: "flex" });

  return (
    <>
      <Box
        w="100%"
        bg="black"
        display={display}
        py={4}
        pr="300px"
        pl={8}
        position="relative"
      >
        <Flex
          justify="space-between"
          align="center"
          maxW="1200px"
          mx="auto"
          px={4}
          w="full"
        >
          {/* Left - Contact Info */}
          <HStack spacing={6}>
            <HStack spacing={2}>
              <Circle size="30px" bg="white">
                <Icon as={MdEmail} color="red.500" boxSize={4} />
              </Circle>
              <Link href="mailto:contact@soulessencespa.in" color="white">
                contact@soulessencespa.in
              </Link>
            </HStack>
            <HStack spacing={2}>
              <Circle size="30px" bg="white">
                <Icon as={MdPhone} color="red.500" boxSize={4} />
              </Circle>
              <Link href="tel:+919371457979" color="white">
                +91 9371457979
              </Link>
            </HStack>
            <HStack spacing={2}>
              <Circle size="30px" bg="white">
                <Icon as={MdPhone} color="red.500" boxSize={4} />
              </Circle>
              <Link href="tel:+919371357979" color="white">
                +91 9371357979
              </Link>
            </HStack>
          </HStack>

          {/* Right - Social Media Icons */}
          <HStack spacing={4}>
            <Link href="https://www.facebook.com/SoulEssenceSpa" isExternal>
              <Circle size="30px" bg="white">
                <Icon as={FaFacebook} color="red.500" boxSize={4} />
              </Circle>
            </Link>
            <Link href="https://www.instagram.com/soul_essencespa/" isExternal>
              <Circle size="30px" bg="white">
                <Icon as={FiInstagram} color="red.500" boxSize={4} />
              </Circle>
            </Link>
            <Link href="https://goo.gl/maps/7tnVZkAg2XavnSnJ8" isExternal>
              <Circle size="30px" bg="white">
                <Icon as={FaMapMarkerAlt} color="red.500" boxSize={4} />
              </Circle>
            </Link>
          </HStack>
        </Flex>
      </Box>

      <Box
        display={display}
        position="absolute"
        top="0"
        right="0"
        h="100%"
        w="200px"
        bg="white"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          as="a"
          href="https://dingg.app/booking/soul-essence-the-family-spa-mayur-colony"
          color="red.500"
          bg="white"
          _hover={{ bg: "red.50" }}
          size="lg"
          width="80%"
        >
          Book now
        </Button>
      </Box>
    </>
  );
};

export default Topbar;
