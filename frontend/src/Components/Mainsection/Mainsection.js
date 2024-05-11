import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  Button, // Import Button component
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "Nurse's Whisper Button",
    title: "Stay in touch with a simple tap!",
    description: `Who says only grandkids can summon help with a button? Give our "Nurse's Whisper Button" a gentle press, and watch the cavalry come trotting with a smile!`,
    link: "/nurses-whisper",
  },
  {
    id: 2,
    date: "Magic Pill Decoder",
    title: "Let our AI wizard read your prescriptions!",
    description: `No crystal ball needed—just upload your scribbled doctor's note, and our AI will decipher it faster than you can say "abracadabra"! Finally, no more guessing if it says "1 pill" or "10 pills"!`,
    link: "https://chatpdfgpt.vercel.app/",
  },
  {
    id: 3,
    date: "Chatty Companion Concierge",
    title: "Our 24/7 buddy for a laugh or a weather update!",
    description:
      "Who needs a parrot when you have our Chatty Companion Concierge? It won't repeat everything you say, but it'll definitely brighten your day with jokes and weather updates. Just remember, it's a bit more high-tech than your old pal Polly.",
    link: "/product",
  },
];

const Mainsection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }} mt={10}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Feature-Fabulous
      </chakra.h3>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ id, title, description, date,link }) => {
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
          <Button as="a" href={link} colorScheme="red">
            Explore
          </Button>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Mainsection;
