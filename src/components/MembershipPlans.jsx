import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  Button,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import {
  FaCheck,
  FaUsers,
  FaCreditCard,
} from "react-icons/fa";
import {
  GiLotusFlower,
  GiMoebiusTriangle,
  GiSpade,
} from "react-icons/gi";
import { MdMenu } from "react-icons/md";


const PlanCard = ({
  title,
  icon,
  price,
  duration,
  features,
  color = "red.500",
}) => (
  <Box borderWidth="1px" borderRadius="lg" p={6}>
    <Flex justify="space-between" align="center" mb={6}>
      <Heading as="h3" fontSize={"4xl"} size="md">
        {title}
      </Heading>
      <Icon as={icon} color={"red.900"} boxSize={8} />
    </Flex>
    <Divider />
    <Box mb={6}>
      <Flex align="baseline">
        <Text fontSize="xl" fontWeight="bold">
          ₹
        </Text>
        <Text fontSize="3xl" fontWeight="bold" mx={1}>
          {price}
        </Text>
      </Flex>
      <Text fontSize="sm" color="gray.500">
        /{duration}
      </Text>
    </Box>

    <List spacing={3} mb={6} textAlign="left">
      {features.map((feature, index) => (
        <ListItem key={index}>
          <ListIcon as={FaCheck} color={color} />
          {feature}
        </ListItem>
      ))}
    </List>

    <Button
      color={"white"}
      bg={"#de968d"}
      borderRadius={"none"}
      size={"lg"}
      w="full"
      _hover={{ bg: "#c77c72" }}
    >
      Book now
    </Button>
  </Box>
);

const MembershipPlans = () => {
  const iconBoxDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Box>
      {/* Benefits Section 1 */}
      <Container maxW="container.xl" py={8} px={[4, 8, 16]}>
        <Flex flexDirection={{ base: "column", md: "row" }} gap={8}>
          <Box flex={1}>
            <Flex direction={iconBoxDirection} align="center" gap={4}>
              <Icon as={MdMenu} color={"red.600"} boxSize={8} />
              <Text>A limited edition 'members-only' menu of therapies</Text>
            </Flex>
          </Box>
          <Box flex={1}>
            <Flex direction={iconBoxDirection} align="center" gap={4}>
              <Icon as={FaUsers} color={"red.600"} boxSize={8} />
              <Text>Membership plan can be used by friends & family</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>

      {/* Benefits Section 2 */}
      <Container maxW="container.xl" py={8} px={[4, 8, 16]}>
        <Flex flexDirection={{ base: "column", md: "row" }} gap={8}>
          <Box flex={1}>
            <Flex direction={iconBoxDirection} align="center" gap={4}>
              <Icon as={GiMoebiusTriangle} color={"red.600"} boxSize={8} />
              <Text>Complimentary 30 min massage on your birthday</Text>
            </Flex>
          </Box>
          <Box flex={1}>
            <Flex direction={iconBoxDirection} align="center" gap={4}>
              <Icon as={FaCreditCard} color={"red.600"} boxSize={8} />
              <Text>Cashless transaction through our membership card</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>

      {/* Plans Section */}
      <Box py={12} px={[4, 8, 16]}>
        <Container maxW="container.xl" textAlign="center">
          <Text fontSize="xl" color={"red.900"} mb={2}>
            Our Plans
          </Text>
          <Heading as="h2" size="xl" mb={12}>
            Prepaid Membership Plan
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            <PlanCard
              title="Holistic Gold"
              icon={GiSpade}
              price="20000"
              duration="12 Months"
              color="red.500"
              features={[
                "50% off (Mon - Fri)",
                "₹ 3933* Easy EMI 6 months",
                "₹20000 Prepaid Balance",
              ]}
            />
            <PlanCard
              title="Holistic Silver"
              icon={GiLotusFlower}
              price="30000"
              duration="12 Months"
              color="green.500"
              features={[
                "50% off (Mon - Fri)",
                "20% off (Sat-Sun)",
                "₹ 5900* Easy EMI 6 months",
                "₹30000 Prepaid Balance",
              ]}
            />
            <PlanCard
              title="Holistic Diamond"
              icon={GiMoebiusTriangle}
              price="40000"
              duration="18 Months"
              color="green.500"
              features={[
                "50% off All Days",
                "₹ 7866* Easy EMI 6 months",
                "₹40000 Prepaid Balance",
              ]}
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MembershipPlans;
