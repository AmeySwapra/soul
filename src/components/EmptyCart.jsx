import { Box, Container, Text } from "@chakra-ui/react";

const EmptyCart = () => {
  return (
    <Box className="row_site">
      <Container className="container_site" maxW="container.xl">
        <Box id="main-content" className="main">
          <Box as="article" id="post-10" className="post-wrap post-10 page type-page status-publish hentry">
            <Box className="woocommerce">
              <Box className="woocommerce-notices-wrapper"></Box>
              <Box className="wc-empty-cart-message">
                <Box className="cart-empty woocommerce-info" bg="gray.100" p={6} borderRadius="md" textAlign="center">
                  <Text fontSize="lg">Your cart is currently empty.</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EmptyCart;
