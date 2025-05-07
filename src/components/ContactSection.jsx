import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    Link,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    HStack,
    IconButton,
    AspectRatio,
  } from "@chakra-ui/react";
  import {
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaInstagram,
  } from "react-icons/fa";
  
  const ContactSection = () => {
    return (
      <Box as="section" bg="white" py={10} px={[4,8,16]}>
        <Container maxW="container.xl" py={16} px={{ base: 4, md: 8 }}>
          {/* Two-column grid: left info, right form */}
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 2fr" }}
            gap={10}
            mb={16}
          >
            {/* Left Column */}
            <GridItem>
              <Stack spacing={6}>
                {/* Heading */}
                <Box>
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="#8d312a"
                    mb={1}
                  >
                    Contact us
                  </Text>
                  <Heading as="h2" size="2xl">
                    Send a <Text as="span" color="#8d312a">Message</Text>
                  </Heading>
                  <Text color="gray.600" mt={2}>
                    Interested in our spa services? We want your spa experience to be a
                    memorable one.
                  </Text>
                </Box>
  
                {/* Spa Name */}
                <Heading as="h3" color="#8d312a" size="xl">
                  Soul Essence Spa
                </Heading>
  
                {/* Address & Hours */}
                <Box>
                  <Text fontWeight="bold">Address</Text>
                  <Link
                    href="https://goo.gl/maps/Zv6N9Lr7cxreDh8g6"
                    isExternal
                    display="block"
                  >
                    Solaris Sports World 128/2,<br />
                    Mayur Colony, Kothrud,<br />
                    Pune, Maharashtra 411038
                  </Link>
                </Box>
                <Box>
                  <Text fontWeight="bold">Hours</Text>
                  <Text>Mon - Sun: 9:00 to 21:00</Text>
                </Box>
  
                {/* Email & Phones */}
                <Box>
                  <Text fontWeight="bold">Email</Text>
                  <Link href="mailto:contact@soulessence.in">
                    contact@soulessence.in
                  </Link>
                </Box>
                <Box>
                  <Text fontWeight="bold">Phone</Text>
                  <Link href="tel:+919371457979" display="block">
                    +91 93714 57979
                  </Link>
                  <Link href="tel:+919371357979" display="block">
                    +91 93713 57979
                  </Link>
                </Box>
  
                {/* Social Icons */}
                <HStack spacing={4}>
                  <IconButton
                    as="a"
                    href="https://twitter.com/ovathemes"
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="https://www.facebook.com/ovatheme.envato/"
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="https://ovatheme.com/"
                    aria-label="Pinterest"
                    icon={<FaPinterest />}
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="https://www.instagram.com/"
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    variant="ghost"
                  />
                </HStack>
              </Stack>
            </GridItem>
  
            {/* Right Column - Contact Form */}
            <GridItem>
              <Stack
                as="form"
                spacing={6}
                onSubmit={(e) => {
                  e.preventDefault();
                  // handle form submission
                }}
              >
                <FormControl isRequired>
                  <FormLabel>Your Name</FormLabel>
                  <Input name="your-name" placeholder="Enter your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Your Number</FormLabel>
                  <Input name="your-number" placeholder="Enter your phone number" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Your Email</FormLabel>
                  <Input
                    type="email"
                    name="your-email"
                    placeholder="Enter your email"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Subject</FormLabel>
                  <Input name="your-subject" placeholder="Subject" />
                </FormControl>
                <FormControl>
                  <FormLabel>Your Message (optional)</FormLabel>
                  <Textarea
                    name="your-message"
                    placeholder="Write your message"
                    rows={6}
                  />
                </FormControl>
                <Button type="submit" color='white' bg={'#8d312a'}>
                  Submit
                </Button>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
  
       
       
      </Box>
    );
  };
  
  export default ContactSection;
  