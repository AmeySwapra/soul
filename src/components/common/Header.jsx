import {
    Box,
    Flex,
    Image,
    IconButton,
    Input,
    VStack,
    useDisclosure,
    SlideFade,
  } from '@chakra-ui/react';
  import { FiSearch, FiShoppingCart } from 'react-icons/fi';
  import { useState } from 'react';
  
  export default function Header() {
    const { isOpen, onToggle } = useDisclosure();
    const [searchTerm, setSearchTerm] = useState('');
  
    return (
      <Box
        w="100%"
        bg="white"
        boxShadow="md"
        position="sticky"
        top={0}
        zIndex={10}
        px={6}
        py={3}
      >
        <Flex justify="space-between" align="center">
          {/* Left: Logo */}
          <Box>
            <Image
              src="https://soulessencespa.in/wp-content/uploads/2022/08/SElogo-removebg-preview.png"
              alt="Soul Essence Spa"
              w="160px"
              h="70px"
            />
          </Box>
  
          {/* Center: Navigation */}
          <Flex display={{ base: 'none', md: 'flex' }} gap={6} fontWeight="medium">
            <Box as="a" href="/">Home</Box>
            <Box as="a" href="/about-us">About Us</Box>
            <Box as="a" href="/services">Services</Box>
            <Box as="a" href="/packages">Packages</Box>
            <Box as="a" href="/membership">Membership</Box>
            <Box as="a" href="/gallery">Gallery</Box>
            <Box as="a" href="/contact">Contact</Box>
          </Flex>
  
          {/* Right: Icons */}
          <Flex gap={4} align="center">
            <IconButton
              icon={<FiSearch />}
              onClick={onToggle}
              variant="ghost"
              aria-label="Search"
            />
            <IconButton
              icon={<FiShoppingCart />}
              variant="ghost"
              aria-label="Cart"
            />
          </Flex>
        </Flex>
  
        {/* Search Popup */}
        <SlideFade in={isOpen} offsetY="-100px">
          <VStack
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="white"
            boxShadow="xl"
            p={6}
            borderRadius="lg"
            zIndex={999}
            spacing={4}
          >
            <Input
              placeholder="Search …"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="lg"
              w={["80vw", "400px"]}
            />
          </VStack>
        </SlideFade>
      </Box>
    );
  }
  