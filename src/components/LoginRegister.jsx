import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Checkbox,
  Link,
  Text,
  useBoolean
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function LoginRegisterSection() {
  const [showPassword, { toggle: togglePassword }] = useBoolean(false);
  
  return (
    <Box as="section" className="row_site">
      <Box className="container_site" maxW="container.sm" mx="auto">
        <Box id="main-content" className="main" p={4}>
          <Box className="woocommerce">
            <Box className="woocommerce-notices-wrapper"></Box>
            
            <Tabs variant="enclosed">
              <TabList>
                <Tab _selected={{ color: "white", bg: "red.900" }}>Login</Tab>
                <Tab _selected={{ color: "white", bg: "red.900" }}>Register</Tab>
              </TabList>
              
              <TabPanels>
                {/* Login Panel */}
                <TabPanel>
                  <Heading as="h2" size="lg" mb={4}>Login</Heading>
                  
                  <Box as="form" method="post">
                    <FormControl mb={4} isRequired>
                      <FormLabel>Username or email address</FormLabel>
                      <Input 
                        type="text" 
                        name="username" 
                        id="username" 
                        autoComplete="username"
                      />
                    </FormControl>
                    
                    <FormControl mb={4} isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          autoComplete="current-password"
                        />
                        <InputRightElement width="3rem">
                          <Button h="1.75rem" size="sm" onClick={togglePassword}>
                            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    
                    <Checkbox name="rememberme" id="rememberme" mb={4}>
                      Remember me
                    </Checkbox>
                    
                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="5ae18bba6e" />
                    <input type="hidden" name="_wp_http_referer" value="/my-account/" />
                    
                    <Button 
                      type="submit" 
                      name="login" 
                      value="Log in" 
                      bg="red.900" 
                      color="white"
                      _hover={{ bg: "red.800" }}
                      mb={4}
                    >
                      Log in
                    </Button>
                    
                    <Text>
                      <Link href="https://soulessencespa.in/my-account/lost-password/" color="blue.500">
                        Lost your password?
                      </Link>
                    </Text>
                  </Box>
                </TabPanel>
                
                {/* Register Panel */}
                <TabPanel>
                  <Heading as="h2" size="lg" mb={4}>Register</Heading>
                  
                  <Box as="form" method="post">
                    <FormControl mb={4} isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input 
                        type="email" 
                        name="email" 
                        id="reg_email" 
                        autoComplete="email"
                      />
                    </FormControl>
                    
                    <Text mb={4}>A link to set a new password will be sent to your email address.</Text>
                    
                    {/* Hidden fields */}
                    <input type="hidden" name="wc_order_attribution_source_type" value="typein" />
                    {/* Add other hidden fields as needed */}
                    
                    <Text fontSize="sm" mb={4}>
                      Your personal data will be used to support your experience throughout this website, 
                      to manage access to your account, and for other purposes described in our{" "}
                      <Link href="https://soulessencespa.in/?page_id=3" color="blue.500" isExternal>
                        privacy policy
                      </Link>.
                    </Text>
                    
                    <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="76e9b2570c" />
                    <input type="hidden" name="_wp_http_referer" value="/my-account/" />
                    
                    <Button 
                      type="submit" 
                      name="register" 
                      value="Register" 
                      bg="red.900" 
                      color="white"
                      _hover={{ bg: "red.800" }}
                    >
                      Register
                    </Button>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginRegisterSection;