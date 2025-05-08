import {
  Box,
  Flex,
  Image,
  IconButton,
  Input,
  VStack,
  Stack,
  Heading,
  Link,
  useDisclosure,
  SlideFade,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Icon
} from '@chakra-ui/react';
import { FiSearch, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { useState, useRef } from 'react';

export default function Header() {
  const { isOpen: isSearchOpen, onToggle: onSearchToggle } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const btnRef = useRef();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const renderDesktopNav = () => (
    <Flex display={{ base: 'none', lg: 'flex' }} gap={6} fontWeight="medium">
      <Box as="a" href="/">Home</Box>
      <Box as="a" href="/about-us">About Us</Box>
      
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Box cursor="pointer" _hover={{ color: 'red.500' }}>Services</Box>
        </PopoverTrigger>
        <PopoverContent w="auto" border="none" boxShadow="xl">
          <PopoverBody p={4}>
            <Stack spacing={4}>
              <Heading size="md">Services</Heading>
              <VStack align="start" spacing={2}>
                <Link href="/express-therapy/" _hover={{ color: 'red.500' }}>Express Therapy</Link>
                <Link href="/immunity-booster-therapy/" _hover={{ color: 'red.500' }}>Immunity Booster Therapy</Link>
                <Link href="/anti-fatigue-therapy/" _hover={{ color: 'red.500' }}>Anti-Fatigue Therapy</Link>
                <Link href="/pain-relief-therapy/" _hover={{ color: 'red.500' }}>Pain Relief Therapy</Link>
                <Link href="/skincare-therapy/" _hover={{ color: 'red.500' }}>Skincare Therapy</Link>
                <Link href="/relaxation-therapy/" _hover={{ color: 'red.500' }}>Relaxation Therapy</Link>
              </VStack>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Box as="a" href="/packages">Packages</Box>
      
      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Box cursor="pointer" _hover={{ color: 'red.500' }}>Membership</Box>
        </PopoverTrigger>
        <PopoverContent w="auto" border="none" boxShadow="xl">
          <PopoverBody p={4}>
            <VStack align="start" spacing={2}>
              <Link href="/membership-plan" _hover={{ color: 'red.500' }}>Membership Plan</Link>
              <Link href="/gift" _hover={{ color: 'red.500' }}>Gift Card</Link>
              <Link href="/corporate-packages" _hover={{ color: 'red.500' }}>Corporate Plan</Link>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Box as="a" href="/gallery">Gallery</Box>
      <Box as="a" href="/contact">Contact</Box>
    </Flex>
  );

  const renderMobileDrawer = () => (
    <>
      <IconButton
        display={{ base: 'flex', lg: 'none' }}
        icon={<FiMenu />}
        onClick={onDrawerOpen}
        variant="ghost"
        aria-label="Open Menu"
        ref={btnRef}
      />
      
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Image
              src="https://soulessencespa.in/wp-content/uploads/2022/08/SElogo-removebg-preview.png"
              alt="Soul Essence Spa"
              w="140px"
            />
          </DrawerHeader>
          <DrawerBody py={4}>
            <VStack align="start" spacing={4}>
              <Link href="/" onClick={onDrawerClose}>Home</Link>
              <Link href="/about-us" onClick={onDrawerClose}>About Us</Link>
              
              <Menu>
                <MenuButton as={Box} w="full" textAlign="left">
                  Services
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/express-therapy/">Express Therapy</MenuItem>
                  <MenuItem as={Link} href="/immunity-booster-therapy/">Immunity Booster Therapy</MenuItem>
                  <MenuItem as={Link} href="/anti-fatigue-therapy/">Anti-Fatigue Therapy</MenuItem>
                  <MenuItem as={Link} href="/pain-relief-therapy/">Pain Relief Therapy</MenuItem>
                  <MenuItem as={Link} href="/skincare-therapy/">Skincare Therapy</MenuItem>
                  <MenuItem as={Link} href="/relaxation-therapy/">Relaxation Therapy</MenuItem>
                </MenuList>
              </Menu>
              
              <Link href="/packages" onClick={onDrawerClose}>Packages</Link>
              
              <Menu>
                <MenuButton as={Box} w="full" textAlign="left">
                  Membership
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} href="/membership-plan">Membership Plan</MenuItem>
                  <MenuItem as={Link} href="/gift">Gift Card</MenuItem>
                  <MenuItem as={Link} href="/corporate-packages">Corporate Plan</MenuItem>
                </MenuList>
              </Menu>
              
              <Link href="/gallery" onClick={onDrawerClose}>Gallery</Link>
              <Link href="/contact" onClick={onDrawerClose}>Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box
      w="100%"
      bg="white"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
      px={{ base: 4, lg: 6 }}
      py={3}
    >
      <Flex justify="space-between" align="center">
        {/* Left: Logo */}
        <Box>
          <Image
            src="https://soulessencespa.in/wp-content/uploads/2022/08/SElogo-removebg-preview.png"
            alt="Soul Essence Spa"
            w={{ base: '120px', md: '140px', lg: '160px' }}
            h="auto"
          />
        </Box>

        {/* Center: Navigation */}
        {renderDesktopNav()}
        {renderMobileDrawer()}

        {/* Right: Icons */}
        <Flex gap={4} align="center">
          <IconButton
            icon={<FiSearch />}
            onClick={onSearchToggle}
            variant="ghost"
            aria-label="Search"
          />
         <Link href='/cart'>
         <IconButton
            icon={<FiShoppingCart />}
            variant="ghost"
            aria-label="Cart"
          />
         </Link>
        </Flex>
      </Flex>

      {/* Search Popup */}
      <SlideFade in={isSearchOpen} offsetY="-100px">
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