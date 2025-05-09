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
  useBreakpointValue
} from '@chakra-ui/react';
import { FiSearch, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { useState, useRef } from 'react';

export default function Header() {
  const { isOpen: isSearchOpen, onToggle: onSearchToggle } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const btnRef = useRef();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const gold = 'gold';

  const navLinkStyle = {
    color: "#eac169",
    _hover: { color: 'orange.300' },
    cursor: 'pointer'
  };

  const renderDesktopNav = () => (
    <Flex display={{ base: 'none', lg: 'flex' }} gap={6} fontWeight="medium" align="center">
      <Box as="a" href="/" {...navLinkStyle}>Home</Box>
      <Box as="a" href="/about-us" {...navLinkStyle}>About Us</Box>

      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Box {...navLinkStyle}>Services</Box>
        </PopoverTrigger>
        <PopoverContent w="auto" bg="black" border="none" boxShadow="xl">
          <PopoverBody p={4}>
            <Stack spacing={4}>
              
              <VStack align="start" spacing={2}>
                <Link href="/detail-service/express-therapy" {...navLinkStyle}>Express Therapy</Link>
                <Link href="/detail-service/immunity-booster-therapy" {...navLinkStyle}>Immunity Booster Therapy</Link>
                <Link href="/detail-service/anti-fatigue-therapy" {...navLinkStyle}>Anti-Fatigue Therapy</Link>
                <Link href="/detail-service/pain-relief-therapy" {...navLinkStyle}>Pain Relief Therapy</Link>
                <Link href="/detail-service/skincare-therapy" {...navLinkStyle}>Skincare Therapy</Link>
                <Link href="/detail-service/relaxation-therapy" {...navLinkStyle}>Relaxation Therapy</Link>
              </VStack>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Box as="a" href="/packages" {...navLinkStyle}>Packages</Box>

      <Popover trigger="hover" placement="bottom-start">
        <PopoverTrigger>
          <Box {...navLinkStyle}>Membership</Box>
        </PopoverTrigger>
        <PopoverContent w="auto" bg="black" border="none" boxShadow="xl">
          <PopoverBody p={4}>
            <VStack align="start" spacing={2}>
              <Link href="/membership-plan" {...navLinkStyle}>Membership Plan</Link>
              <Link href="/gift" {...navLinkStyle}>Gift Card</Link>
              <Link href="/corporate-packages" {...navLinkStyle}>Corporate Plan</Link>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Box as="a" href="/gallery" {...navLinkStyle}>Gallery</Box>
      <Box as="a" href="/contact" {...navLinkStyle}>Contact</Box>
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
        color={gold}
      />

      <Drawer isOpen={isDrawerOpen} placement="left" onClose={onDrawerClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="black" color={gold}>
          <DrawerCloseButton color={gold} />
          <DrawerHeader borderBottomWidth="1px">
            <Image
              src="https://soulessencespa.in/wp-content/uploads/2022/08/SElogo-removebg-preview.png"
              alt="Soul Essence Spa"
              w="140px"
            />
          </DrawerHeader>
          <DrawerBody py={4}>
            <VStack align="start" spacing={4}>
              <Link href="/" onClick={onDrawerClose} {...navLinkStyle}>Home</Link>
              <Link href="/about-us" onClick={onDrawerClose} {...navLinkStyle}>About Us</Link>

              <Menu>
                <MenuButton as={Box} w="full" textAlign="left" {...navLinkStyle}>
                  Services
                </MenuButton>
                <MenuList bg="black" border="none">
                  <MenuItem as={Link} href="/detail-service/express-therapy" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Express Therapy</MenuItem>
                  <MenuItem as={Link} href="/detail-service/immunity-booster-therapy" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Immunity Booster Therapy</MenuItem>
                  <MenuItem as={Link} href="/detail-service/anti-fatigue-therapy" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Anti-Fatigue Therapy</MenuItem>
                  <MenuItem as={Link} href="/detail-service/pain-relief-therapy" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Pain Relief Therapy</MenuItem>
                  <MenuItem as={Link} href="/detail-service/skincare-therapy" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Skincare Therapy</MenuItem>
                  <MenuItem as={Link} href="/detail-service/relaxation-therapy" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Relaxation Therapy</MenuItem>
                </MenuList>
              </Menu>

              <Link href="/packages" onClick={onDrawerClose} {...navLinkStyle}>Packages</Link>

              <Menu>
                <MenuButton as={Box} w="full" textAlign="left" {...navLinkStyle}>
                  Membership
                </MenuButton>
                <MenuList bg="black" border="none">
                  <MenuItem as={Link} href="/membership-plan" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Membership Plan</MenuItem>
                  <MenuItem as={Link} href="/gift" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Gift Card</MenuItem>
                  <MenuItem as={Link} href="/corporate-packages" bg="black" _hover={{ bg: 'gray.700' }} color={gold}>Corporate Plan</MenuItem>
                </MenuList>
              </Menu>

              <Link href="/gallery" onClick={onDrawerClose} {...navLinkStyle}>Gallery</Link>
              <Link href="/contact" onClick={onDrawerClose} {...navLinkStyle}>Contact</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box
      w="100%"
      bg="black"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
      px={{ base: 4, lg: 6 }}
      py={3}
      color={gold}
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
            color={gold}
          />
          <Link href="/cart">
            <IconButton
              icon={<FiShoppingCart />}
              variant="ghost"
              aria-label="Cart"
              color={gold}
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
          bg="black"
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
            color={gold}
            bg="gray.900"
            _placeholder={{ color: 'gray.500' }}
          />
        </VStack>
      </SlideFade>
    </Box>
  );
}
