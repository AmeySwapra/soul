import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    AbsoluteCenter,
    useBreakpointValue
  } from "@chakra-ui/react";
  
  const CorporateSpaPackages = () => {
    const flexDirection = useBreakpointValue({ base: "column", md: "row" });
    const imageSize = useBreakpointValue({ base: "100%", md: "20%" });
  
    return (
      <Box py={12} px={[4,8,16]}>
        <Container maxW="container.xl">
          <Flex direction={flexDirection} gap={8}>
            {/* Left Column - Content */}
            <Box flex={1} position="relative">
              <Box mb={6}>
                <Text fontSize="xl" color="red.900" mb={2}>
                  Corporate Spa Packages
                </Text>
                <Heading as="h2" size="xl" mb={4}>
                  Reward Your Hard-Working Team with Relaxing Spa Services
                </Heading>
                <Text fontSize="md" color="gray.400">
                  Reward your team for a job well done with relaxing spa services at Natural Body. 
                  Spending a day pampering your hard-working employees not only promotes unity 
                  and camaraderie among your team, but ensures they'll receive the rest and 
                  relaxation they need. Gift cards also make the perfect gift for your employees.
                </Text>
              </Box>
  
              <Button 
                color='white'
                size="lg"
                bg={'black'} 
                borderRadius={'none'}
                as="a" 
                href="/contact" 
                _hover={{border: '1px solid black', bg:'white', color: 'black'}}
              >
                contact us
              </Button>
            </Box>
  
            {/* Right Column - Image */}
            <Box flex={1} position="relative">
              <Image
                src="https://soulessencespa.in/wp-content/uploads/elementor/thumbs/promotion_page-q5rzibt91hr7k1xfqvh4fwoj1z8am5qusuht1in47m.jpg"
                alt="promotion_page"
                w="100%"
                h="auto"
                borderRadius="md"
                loading="lazy"
              />
              
              <AbsoluteCenter left={'00px'} top={50}>
                <Image
                  src="https://soulessencespa.in/wp-content/uploads/2022/08/flower_page.png"
                  alt="flower decoration"
                  w="193px"
                  h="158px"
                  loading="lazy"
                />
              </AbsoluteCenter>
            </Box>
          </Flex>
        </Container>
      </Box>
    );
  };
  
  export default CorporateSpaPackages;