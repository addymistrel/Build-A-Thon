import React, { useState, useEffect } from "react";
import { chakra, Stack, Text, Button, Box, Link } from "@chakra-ui/react";
import { IoCallSharp } from "react-icons/io5";
import { Link as Navlink } from "react-router-dom";

const textArray = [
  "Personalized Care Calendars",
  "Compassionate Companion Calls",
  "Safe And Secured",
];

const Typewriter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const typingSpeed = 200;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const targetText = textArray[currentIndex];
        if (prevText === targetText) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          return "";
        }
        const nextChar = targetText.charAt(prevText.length);
        return prevText + nextChar;
      });
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <span>
      {currentText}
      <span>|</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <Box
      p={{ base: 8, md: 14 }}
      bgColor={"whitesmoke"}
      m={4}
      mt={{ base: 12, md: 18 }}
    >
      <Stack direction="column" spacing={6} alignItems="center">
        <Box
          mt={10}
          py={2}
          px={3}
          bg="red.500"
          w="max-content"
          color="white"
          rounded="md"
          fontSize="md"
        >
          <Stack direction={{ base: "column", sm: "row" }}>
            <Text fontWeight="bold">Give Your Loved Ones a Better Life 👴</Text>
            {/* <Text>Join the Community!</Text> */}
          </Stack>
        </Box>
        <chakra.h1
          fontSize={{ base: "4xl", sm: "5xl" }}
          fontWeight="bold"
          textAlign="center"
          maxW="800px"
        >
          With AID-G
          <br />
          <chakra.span
            color="red.500"
            bg="linear-gradient(transparent 50%, #83e9e7 50%)"
          >
            <Typewriter />
          </chakra.span>
        </chakra.h1>
        <Text maxW="850px" fontSize="xl" textAlign="center" color="gray.500">
          Welcome to our corner of compassion, where reminders aren't just
          notifications, but gentle whispers guiding you towards a healthier,
          happier you. In our community, every nudge is a touch of care,
          tailored to your unique needs and delivered with warmth and
          understanding. Join us on this journey of wellness, where reminders
          become companions, standing by your side every step of the way.
          Together, let's embrace a future filled with well-being and joy.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          w={{ base: "100%", sm: "auto" }}
          spacing={5}
        >
          <Link as={Navlink} to="/support">
            <Button
              colorScheme="teal"
              variant="outline"
              rounded="md"
              size="lg"
              height="3.5rem"
              fontSize="1.2rem"
            >
              Support and Review
            </Button>
          </Link>
          <Button
            leftIcon={<IoCallSharp />}
            colorScheme="gray"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1rem"
            borderColor="black.500"
          >
            Request A Call
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
