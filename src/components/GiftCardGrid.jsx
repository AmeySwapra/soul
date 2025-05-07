import {
    Box,
    Button,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    Badge,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom'; // or 'next/link' if you're using Next.js
  
  const giftCards = [
    {
      id: 1,
      title: 'GIFT FOR YOU',
      category: 'Gift Card',
      priceRange: '₹0.00 - ₹7,500.00',
      image:
        'https://soulessencespa.in/wp-content/uploads/2023/04/2-2-300x300.jpg',
      link: 'https://soulessencespa.in/product/gift-for-you/',
    },
    {
      id: 2,
      title: 'GIFT FOR YOU CUSTOM PRICE',
      category: 'Gift Card',
      priceRange: '',
      image:
        'https://soulessencespa.in/wp-content/uploads/2023/04/2-2-300x300.jpg',
      link: 'https://soulessencespa.in/product/gift-for-you-2/',
    },
  ];
  
  const GiftCardGrid = () => {
    return (
      <Box py={10} px={[4,8,16]}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {giftCards.map((card) => (
            <Box
              key={card.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              textAlign="center"
              boxShadow="md"
              bg="white"
            >
              <Link to={card.link} target="_blank" rel="noopener noreferrer">
                <Image src={card.image} alt={card.title} mx="auto" />
                <VStack spacing={2} p={4}>
                  <Badge colorScheme="red">{card.category}</Badge>
                  <Heading fontSize="lg">{card.title}</Heading>
                  {card.priceRange && (
                    <Text fontWeight="bold" color="red.600">
                      {card.priceRange}
                    </Text>
                  )}
                </VStack>
              </Link>
              <Stack p={4}>
                <Button
                  as="a"
                  href={card.link}
                 
                  rel="noopener noreferrer"
                  colorScheme="red"
                  width="100%"
                >
                  VIEW CARD
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default GiftCardGrid;
  