import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Input,
    Button,
    FormControl,
    FormLabel,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const Wishlist = () => {
    return (
      <Box py={10} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Container maxW="6xl">
          <Box id="main-content">
            <Box as="article" id="post-14">
              {/* Wishlist Title */}
              <Box mb={8} textAlign="center">
                <Heading as="h2" size="lg">
                  My Wishlist
                </Heading>
              </Box>
  
              {/* Wishlist Content */}
              <VStack
                spacing={6}
                border="1px dashed"
                borderColor="gray.300"
                p={6}
                rounded="md"
                bg={useColorModeValue('white', 'gray.700')}
              >
                <Text fontSize="md" color="gray.500">
                  No products added to the wishlist
                </Text>
              </VStack>
  
              {/* Wishlist Footer */}
              <Box mt={10}>
                <Box className="wishlist-actions">
                  {/* You can add actions like Clear Wishlist or Go Shopping buttons here */}
                </Box>
              </Box>
  
              {/* Hidden Inputs (if needed for future integration) */}
              <Input type="hidden" name="yith_wcwl_edit_wishlist" value="aab99d2cd3" />
              <Input type="hidden" name="_wp_http_referer" value="/wp-admin/admin-ajax.php" />
              <Input type="hidden" name="wishlist_id" value="" />
            </Box>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default Wishlist;
  