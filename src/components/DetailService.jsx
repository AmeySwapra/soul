import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    List,
    ListItem,
    ListIcon,
    Image,
    useBreakpointValue
  } from "@chakra-ui/react";
  import { FaCheckCircle } from "react-icons/fa";
 
import { useParams } from "react-router-dom";
import pic from '../assets/images/pic.jpg'
import logo from '../assets/images/pic2.png'
  
  const DetailService = () => {
    const param = useParams();
    const { title } = param;
    const formatTitle = (str) => {
        if (!str) return "Page";
        return str
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      };
    
    
    const urlTitle = title || "Skincare Therapy";

    const pageTitle = formatTitle(urlTitle);
    
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    const therapies = [
      {
        title: "Radiance Enhancing Massage with Jojoba Oil",
        description: "It is a gentle massage that uses Aromatherapy massage techniques and skin-smoothening properties of Jojoba, nourishing Wheatgerm, Vitamin E-rich Almond and age-delaying, extra virgin Olive oil to give you soft, glowing skin.",
        prices: [
          { duration: "60 Minutes", price: "₹2600" },
          { duration: "90 Minutes", price: "₹3500" }
        ]
      },
      {
        title: "Skin Toning Massage With Vanilla & Nutmeg Cream",
        description: "The massage includes Swedish technique combined with Vanilla and Nutmeg cream. Vanilla is rich in antioxidants, known to prevent and reverse skin damage caused by free radicals. Nutmeg is also known for its anti-microbial properties.",
        prices: [
          { duration: "60 Minutes", price: "₹2400" },
          { duration: "90 Minutes", price: "₹3300" }
        ]
      },
      {
        title: "Skin Firming Massage",
        description: "This is a classic Aromatherapy technique combined with the antioxidant rich Grapeseed Oil and Rose wine extracts for the massage. Grapeseed strengthens immunity while boosting the skin's protective system, keeping at bay the effects of ageing, stress and pollution.",
        prices: [
          { duration: "60 Minutes", price: "₹2400" },
          { duration: "90 Minutes", price: "₹3400" }
        ]
      },
      {
        title: "Scrubassage",
        description: "This Signature Therapy is a wonderful combination of massage and scrub that gives dual benefit of exfoliation and relaxation. Please feel free to choose from the two options available; Charcoal Scrub is best known for its antioxidant properties. Cocoa Butter & Coconut Scrub is best known for being rich in vitamins and maintains the moisture levels leaving the skin smooth and firm.",
        prices: [
          { duration: "60 Minutes", price: "₹2800" },
          { duration: "90 Minutes", price: "₹4000" }
        ]
      }
    ];
  
    const bodyPolishes = [
      {
        title: "Essential Nutrient-Rich Body Wrap",
        description: "It begins with Neem & Tulsi body polish followed with an application of Sandalwood body wrap. Sandalwood is excellent against acne causing bacteria, exfoliates dead skin, removes Suntan and also reduces signs of aging such as dry skin and wrinkles.",
        prices: [
          { duration: "60 Minutes", price: "₹2500" }
        ]
      },
      {
        title: "Skin Firming Body Wrap",
        description: "It begins with Coffee Oil polish followed with an application of masque which includes Grapefruit and Palmarosa. Grapefruit is best known for its antioxidant properties and Palmarosa eliminates harmful impurities and cures infection.",
        prices: [
          { duration: "60 Minutes", price: "₹3000" }
        ]
      }
    ];
  
    const facials = [
      {
        title: "Skin Whitening Facial",
        description: "It contains the goodness of Saffron- a traditionally popular ingredient that is highly regarded as much for its skin lightening properties as its nourishing, healing and collagen boosting properties.",
        prices: [
          { duration: "60 Minutes", price: "₹2200" }
        ]
      },
      {
        title: "Inflammation Reducing Facial (Acne-prone Skin)",
        description: "It contains the goodness of lavender and almond. Lavender is known for its antiseotic properties and is therefore helpful in treating acne. Almond oil gives glowing,flawless skin.",
        prices: [
          { duration: "60 Minutes", price: "₹2000" }
        ]
      },
      {
        title: "Hydrating Facial (Normal & Dry Skin)",
        description: "It contains goodness of Neroli that belongs to the citrus family. It is an effective re-hydrating and antiseptic oil that both heals and maintains the right skin moisture and oil balance.",
        prices: [
          { duration: "60 Minutes", price: "₹2000" }
        ]
      },
      {
        title: "Purity Facial (Combination & Oily Skin)",
        description: "It contains the goodness of Geranium that is natural Astringent reducing inflammation and irritation. It also reduces skin's oiliness and makes it Radiant.",
        prices: [
          { duration: "60 Minutes", price: "₹1800" }
        ]
      }
    ];
  
    return (
      <Box>
        {/* Hero Section */}
        <Container maxW="container.xl" py={12} px={[4,8,24]}>
          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            <Box flex={1}>
              <Text color="red.900" fontSize={'xl'} mb={2}>Services</Text>
              <Heading as="h1" size="2xl" color="red.900" mb={6}>
                {pageTitle}
              </Heading>
              
              <Text mb={6} color={'gray.500'}>
                Elevate your skincare routine with our Skincare Programs. These programs are designed to rejuvenate and nourish your skin, promoting a healthy and glowing complexion. Our Radiance Enhancing Massage with Jojoba Oil, Skin Toning Massage with Vanilla & Nutmeg Cream, and Coffee Oil Polish are aimed at enhancing the radiance and tone of your skin. We also offer specialized facials such as the Inflammation Reducing Facial for acne-prone skin, the Hydrating Facial for normal and dry skin, and the Purity Facial for combination and oily skin. Additionally, our Skin Firming Body Wrap, Skin Firming Massage, Scrubassage, and Essential Nutrient-Rich Body Wrap are designed to promote firmness, elasticity, and nourishment for your skin.
              </Text>
              
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  Rejuvenated and Nourished Skin
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  Targeted Skincare Solutions
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  Enhanced Skin Firmness and Elasticity
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.500" />
                  Relaxation and Self-Care
                </ListItem>
              </List>
            </Box>
            
            <Box flex={1}>
              <Image 
                src={pic} 
                alt="Client treatment" 
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h={{ base: "300px", md: "500px" }}
              />
            </Box>
          </Flex>
        </Container>
        
        {/* Therapies Section */}
        <Box px={[4,8,16]} py={12}>
          <Container maxW="container.xl">
            <Heading as="h2" textAlign="center" mb={12}>
              Therapies & <Text as="span" color="brand.500">Programs</Text>
            </Heading>
            
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              {therapies.map((therapy, index) => (
                <GridItem key={index}>
                  <Box bg="white" p={8} borderRadius="lg" boxShadow="md" position="relative" h="100%">
                    <Box 
                      position="absolute" 
                      top={-10} 
                      left={0} 
                      w="120px" 
                      h="120px" 
                     
                    >
                      <Image src={logo} alt="Spa object" />
                    </Box>
                    
                    <Heading as="h3" size="lg" mt={6}>{therapy.title}</Heading>
                    <Text mb={6} color={'gray.500'}>{therapy.description}</Text>
                    
                    <Box>
                      {therapy.prices.map((price, i) => (
                        <Flex key={i} justify="space-between" py={2} borderBottom="1px" borderColor="gray.100">
                          <Text color={'gray.500'}>{price.duration}</Text>
                          <Text fontWeight="bold" color={'red.900'}>{price.price}</Text>
                        </Flex>
                      ))}
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </Box>
        
        {/* Body Polish Section */}
        <Box px={[4,8,16]} py={12}>
          <Container maxW="container.xl">
            <Heading as="h2" textAlign="center" mb={12}>
              Body <Text as="span" color="red.900">Polish</Text>
            </Heading>
            
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              {bodyPolishes.map((polish, index) => (
                <GridItem key={index}>
                  <Box bg="white" p={8} borderRadius="lg" boxShadow="md" position="relative" h="100%">
                    <Box 
                      position="absolute" 
                      top={-10} 
                      left={0}
                      w="120px" 
                      h="120px" 
                      
                    >
                      <Image src={logo} alt="Spa object" />
                    </Box>
                    
                    <Heading as="h3" size="lg" mt={6}>{polish.title}</Heading>
                    <Text mb={6} color={'gray.500'}>{polish.description}</Text>
                    
                    <Box>
                      {polish.prices.map((price, i) => (
                        <Flex key={i} justify="space-between" py={2} borderBottom="1px" borderColor="gray.100">
                          <Text color={'gray.500'}>{price.duration}</Text>
                          <Text fontWeight="bold" color={'red.900'}>{price.price}</Text>
                        </Flex>
                      ))}
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </Box>
        
        {/* Facials Section */}
        <Box px={[4,8,16]} py={12}>
          <Container maxW="container.xl">
            <Heading as="h2" textAlign="center" mb={12}>
              Therapeutic <Text as="span" color="red.900">Facials</Text>
            </Heading>
            
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              {facials.map((facial, index) => (
                <GridItem key={index}>
                  <Box bg="white" p={8} borderRadius="lg" boxShadow="md" position="relative" h="100%">
                    <Box 
                      position="absolute" 
                      top={-10} 
                      left={0} 
                      w="120px" 
                      h="120px" 
                      
                    >
                      <Image src={logo} alt="Spa object" />
                    </Box>
                    
                    <Heading as="h3" size="lg" mt={6}>{facial.title}</Heading>
                    <Text mb={6} color={'gray.500'}>{facial.description}</Text>
                    
                    <Box>
                      {facial.prices.map((price, i) => (
                        <Flex key={i} justify="space-between" py={2} borderBottom="1px" borderColor="gray.100">
                          <Text color={'gray.500'}>{price.duration}</Text>
                          <Text fontWeight="bold" color={'red.900'}>{price.price}</Text>
                        </Flex>
                      ))}
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    );
  };
  
  export default DetailService;