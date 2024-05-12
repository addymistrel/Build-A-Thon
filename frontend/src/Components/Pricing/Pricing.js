import React from "react";
import {
  chakra,
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Icon,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";
import { PiHospital } from "react-icons/pi";


const plansList = [
  {
    title: "In Home",
    price: 599,
    icon: FaHome,
    features: [
      "Remote Health Monitoring",
      "Medication Management",
      "Teleconsultation Servicesy",
      "Health Education Resources",
      "Wellness Programs",
    ],
  },
  {
    title: "Clinic",
    price: 799,
    icon: GiHospitalCross,
    features: [
      "Primary Care Services",
      "Chronic Disease Management",
      "Push to deploy",
      "Diagnostic Testing",
      "Specialty Consultations",
    ],
  },
  {
    title: "Hospital",
    price: 999,
    icon: PiHospital,
    features: [
      "Emergency Services",
      "Surgical Services",
      "Push to deploy",
      "Intensive Care Unit (ICU)",
      "Rehabilitation Services",
    ],
  },
];

const Pricing = () => {
  return (
    <Container maxW="7xl" py="8" px="0">
      <chakra.h2 fontSize="5xl" fontWeight="bold" textAlign="center" mb={5}>
        Simple and affordable pricing
      </chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1} mt={4}>
        {plansList.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const PricingCard = ({ title, price, icon, features }) => {
  return (
    <Box
      minW={{ base: "xs", sm: "xs", lg: "sm" }}
      rounded="md"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="md"
      marginInline="auto"
      my={3}
      p={6}
    >
      <Box textAlign="center">
        <Icon as={icon} h={10} w={10} color="teal.500" />
        <chakra.h2 fontSize="2xl" fontWeight="bold">
          {title}
        </chakra.h2>
        <Box fontSize="7xl" fontWeight="bold">
          <Text as="sup" fontSize="3xl" fontWeight="normal" top="-1em">
            ₹
          </Text>
          {price}
        </Box>
        <Text fontSize="md" color="gray.500">
          starting price*
        </Text>
      </Box>
      <VStack spacing={2} alignItems="flex-start" my={6}>
        {features.map((feature, index) => (
          <HStack key={index} spacing={3}>
            <Icon as={BiCheck} h={4} w={4} color="green.500" />
            <Text fontSize="sm" color="gray.500">
              {feature}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Button
        colorScheme="teal"
        variant="solid"
        size="md"
        rounded="md"
        w="100%"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Pricing;
