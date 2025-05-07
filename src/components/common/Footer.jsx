import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Heading,
  Link,
  Text,
  Input,
  IconButton,
  Flex,
  useColorModeValue,
  HStack,
  VStack,
  FormControl,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaPinterestP, FaInstagram, FaPaperPlane } from 'react-icons/fa';

export default function FooterSection() {
  const bg = useColorModeValue('gray.800', 'gray.900');
  const color = useColorModeValue('white', 'gray.200');

  return (
    <Box as="footer" bg={bg} color={color} py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={10}>
          {/* Contact Info & Newsletter */}
          <Stack spacing={4}>
            <Heading size="md">Contact</Heading>
            <Link href="mailto:contact@soulessencespa.in">contact@soulessencespa.in</Link>
            <Link href="tel:+919371457979">+91 93714 57979</Link>
            <Link href="tel:+919371357979">+91 93713 57979</Link>
            <Box as="form" onSubmit={e => e.preventDefault()}>
              <FormControl display="flex">
                <Input placeholder="Email address" bg="white" color="black" mr={2} required />
                <IconButton
                  type="submit"
                  icon={<FaPaperPlane />}
                  aria-label="Subscribe"
                />
              </FormControl>
            </Box>
          </Stack>

          {/* Services */}
          <Stack spacing={4}>
            <Heading size="md">Services</Heading>
            <VStack align="start" spacing={2}>
              <Link href="/express-therapy/">Express Therapy</Link>
              <Link href="/immunity-booster-therapy/">Immunity Booster Therapy</Link>
              <Link href="/anti-fatigue-therapy/">Anti-Fatigue Therapy</Link>
              <Link href="/pain-relief-therapy/">Pain Relief Therapy</Link>
              <Link href="/skincare-therapy/">Skincare Therapy</Link>
              <Link href="/relaxation-therapy/">Relaxation Therapy</Link>
            </VStack>
          </Stack>

          {/* Links */}
          <Stack spacing={4}>
            <Heading size="md">Links</Heading>
            <VStack align="start" spacing={2}>
              <Link href="/membership-plan/">Membership Plan</Link>
              <Link href="/gift-card/">Gift Card</Link>
              <Link href="/cart/">Cart</Link>
              <Link href="/checkout/">Checkout</Link>
              <Link href="/my-account/">My Account</Link>
              <Link href="/wishlist/">Wishlist</Link>
              <Link href="/franchise/">Ask for Franchise</Link>
            </VStack>
          </Stack>

          {/* Social & Address/Timing */}
          <Stack spacing={4}>
            <Heading size="md">Connect</Heading>
            <HStack spacing={3}>
              <Link href="#" isExternal><FaTwitter size="24" /></Link>
              <Link href="https://www.facebook.com/SoulEssenceSpa/" isExternal><FaFacebook size="24" /></Link>
              <Link href="#" isExternal><FaPinterestP size="24" /></Link>
              <Link href="https://www.instagram.com/soul_essencespa/" isExternal><FaInstagram size="24" /></Link>
            </HStack>
            <Text>
              <Link href="https://goo.gl/maps/Zv6N9Lr7cxreDh8g6" isExternal>
                Solaris Sports World 128/2, Mayur Colony, Kothrud, Pune, Maharashtra 411038
              </Link>
            </Text>
            <Heading size="sm">Timing</Heading>
            <Text>Monday to Sunday<br/>8:00 AM to 9:00 PM</Text>
          </Stack>
        </SimpleGrid>

        {/* Bottom Section */}
        <Flex
          pt={6}
          borderTopWidth={1}
          borderTopColor={useColorModeValue('gray.700', 'gray.700')}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
        >
          {/* Policies */}
          <HStack spacing={6} mb={{ base: 4, md: 0 }}>
            <Link href="/refund_returns-policy/">Refund Policy</Link>
            <Link href="/privacy-policy-2/">Privacy Policy</Link>
          </HStack>

          {/* Copyright */}
          <Text textAlign="center">© Copyright 2023 by <Link href="/">SoulEssenceSpa</Link></Text>

          {/* Developer */}
          <Text>
            Developed &amp; Maintained by <Link href="https://craftycode.in" isExternal>craftycode.in</Link>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
