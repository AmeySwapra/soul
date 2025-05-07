import {
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    Icon,
    Image,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import React, { useEffect, useRef, useState } from "react";
  import { FaQuoteLeft, FaStar } from "react-icons/fa";
  
  function Testimonials() {
    const testimonials = [
      {
        id: 1,
        quote: "A great place to rejuvenate yourself. The staff is well trained and gives you a perfect therapy...",
        name: "Mayank Golwalkar",
        role: "Customer",
      },
      {
        id: 2,
        quote: "I specially visited for a muscle pull and they recommended me for foot reflexology. It was one of the best relaxing massage I have ever had...",
        name: "Mr. Guru",
        role: "Customer",
      },
      {
        id: 3,
        quote: "It was an awesome experience... I felt so relaxed after massage and facial... they offered green tea after massage...",
        name: "Anuja Puranik",
        role: "Customer",
      },
      {
        id: 4,
        quote: "In the tiresome routine life of ours, we should take a day off and spend the time to relax ourselves...",
        name: "Sunny Sukre",
        role: "Customer",
      },
      {
        id: 5,
        quote: "Another wonderful experience at this spa. Highly recommended!",
        name: "Sarah Johnson",
        role: "Customer",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const cardWidth = useBreakpointValue({ base: "100%", md: "50%" });
    const visibleCards = 2;
  
    // Handle infinite loop by duplicating testimonials
    const extendedTestimonials = [...testimonials, ...testimonials.slice(0, visibleCards)];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // Reset to 0 when reaching the original testimonials length
          return nextIndex >= testimonials.length ? 0 : nextIndex;
        });
      }, 3000);
  
      return () => clearInterval(interval);
    }, [testimonials.length]);
  
    return (
      <Box bg="#fcf5f5" px={[4, 8, 16]} py={20} overflow="hidden">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} mb={12}>
            <Box>
              <Text color="#8d312a" textTransform="uppercase" mb={4}>
                Customer Reviews
              </Text>
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
                What They're Talking About Center
              </Heading>
            </Box>
            <Box>
              <Text color="#a8a4a9">
                There are many variations of passages of available but the
                majority have suffered in form, by injected words which don't
                look. There are many variations of passages.
              </Text>
            </Box>
          </Grid>
  
          <Box ref={containerRef} position="relative" width="100%" overflow="hidden">
            <Flex
              transition="transform 0.5s ease-in-out"
              transform={{
                base: `translateX(-${currentIndex * 100}%)`,
                md: `translateX(-${currentIndex * 50}%)`,
              }}
              width={{ base: `${extendedTestimonials.length * 100}%`, md: `${extendedTestimonials.length * 50}%` }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <Box
                  key={`${testimonial.id}-${index}`}
                  flexShrink={0}
                  width={{ base: "100%", md: "50%" }}
                  px={2}
                >
                  <Box
                    position="relative"
                    bg="white"
                    p={8}
                    borderRadius="lg"
                    boxShadow="md"
                    height="100%"
                  >
                    <Box mb={4} color="red.100" fontSize="2xl" position="absolute" top="5" right="10">
                      <Icon as={FaQuoteLeft} />
                    </Box>
                    <Flex mb={4} color="#8d312a">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} as={FaStar} />
                      ))}
                    </Flex>
                    <Text mb={6} fontStyle="italic" color="#a8a4a9">
                      {testimonial.quote}
                    </Text>
                    <Flex align="center" gap={4}>
                      <Image
                        src="https://soulessencespa.in/wp-content/uploads/2023/04/sesobject120x120-removebg-preview.png"
                        alt={testimonial.name}
                        width="60px"
                        height="60px"
                        borderRadius="full"
                      />
                      <Box>
                        <Text fontWeight="bold">{testimonial.name}</Text>
                        <Text color="#a8a4a9">{testimonial.role}</Text>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Container>
      </Box>
    );
  }
  
  export default Testimonials;