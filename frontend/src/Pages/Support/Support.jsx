import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
  Image,
  Center,
  seClipboard,
  useToast,
  useClipboard,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import React, { useState } from "react"
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { BiCaretDownCircle } from "react-icons/bi";
import { Navigate } from "react-router-dom";
export default function ContactFaq() {
  const phone = "+91-9696969696";
  const email = "aidg@gmail.com";
  const address = "Bhubneswar, India";

  const { onCopy } = useClipboard(phone);
  const toast = useToast();

  const handleCopyClick = (text) => {
    onCopy();
    toast({
      title: "Text Copied",
      description: `${text} has been copied to clipboard.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const [rating, setRating] = useState(0); // Initialize state for star rating

  // Function to handle star rating selection
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  // Function to submit feedback
  const submitFeedback = () => {
    // Implement logic to submit feedback
    console.log("Rating:", rating);
    // Implement logic to submit feedback message and other details
  };

  return (
    <>
      <Container
        bg="whitesmoke"
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Heading as="h2" size="2xl" p={4}>
          Welcome to Support Section of AID-G
        </Heading>
        <Flex>
          <Box
            bg="SteelBlue"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Wanna Reach Us?</Heading>
                    <Text
                      mt={{ sm: 3, md: 3, lg: 5 }}
                      color="white.500"
                      fontStyle="italic"
                    >
                      Fill up the form and get assured support
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "0px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="Azure" size="20px" />}
                          onClick={() => handleCopyClick(phone)}
                        >
                          {phone}
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "0px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="Azure" size="20px" />}
                          onClick={() => handleCopyClick(email)}
                        >
                          {email}
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="auto"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "0px solid #1C6FEB" }}
                          leftIcon={<MdLocationOn color="Azure" size="20px" />}
                          onClick={() => handleCopyClick(address)}
                        >
                          {address}
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        bg={"white"}
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        bg={"white"}
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        bg={"white"}
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="email" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Your Solution is Just One Click Away..."
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      {/* <Container direction={{ base: "column", md: "row" }} p={5}> */}
      <Heading
        as="h3"
        size="lg"
        align={"center"}
        justify={"center"}
        bg={"whitesmoke"}
      >
        FAQs ? We are here for solution!
      </Heading>
      <Flex
        minH={"70vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
        bg={"#F5F5F5"}
        direction={{ base: "column", md: "row" }}
      >
        <Container ml={14}>
          <Accordion
            allowMultiple
            width="100%"
            maxW="lg"
            bg="white"
            rounded="lg"
          >
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
              >
                <Text fontSize="md" color="gray.800">
                  Can I use this website if I'm not a tech whiz?
                </Text>
                <BiCaretDownCircle fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Of course! Our website is designed with you in mind, whether
                  you're a tech titan or still getting the hang of this whole
                  "internet" thing. It's as easy as pie—no PhD in computer
                  science required!
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
                color="gray.800"
              >
                <Text fontSize="md">
                  What if I accidentally press the wrong button?
                </Text>
                <BiCaretDownCircle fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Fear not, accidental button-pushers! We've built our website
                  with big, friendly buttons that forgive even the clumsiest of
                  fingers. Think of it as your digital bubble wrap—safe, secure,
                  and satisfying to pop!
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
                color="gray.800"
              >
                <Text fontSize="md">
                  How do I know if my message got through to the nurses?
                </Text>
                <BiCaretDownCircle fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Simple! When you send a message using our Nurse's Whisper
                  Button, a virtual carrier pigeon flies straight to the nurses'
                  station, delivering your request with a flourish. Okay, maybe
                  not a real pigeon, but you get the idea—your message is on its
                  way!
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
                color="gray.800"
              >
                <Text fontSize="md">
                  Will the AI really understand my doctor's handwriting?
                </Text>
                <BiCaretDownCircle fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  You betcha! Our AI Rx Reader isn't just smart—it's practically
                  psychic! Whether your doctor's handwriting resembles chicken
                  scratch or calligraphy, our AI has a knack for deciphering
                  even the most cryptic of prescriptions. It's like having your
                  own personal medical translator!
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
                _hover={{ bg: "gray.100" }}
                color="gray.800"
              >
                <Text fontSize="md">
                  Can I ask the voice assistant silly questions?
                </Text>
                <BiCaretDownCircle fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Absolutely! Our Chatty Companion Concierge is here to
                  entertain as well as inform. Feel free to ask it anything—from
                  the meaning of life to the best recipe for chocolate chip
                  cookies. Just don't blame us if it starts telling dad jokes!
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
        <Flex flex={1} p={3}>
          <Image
            alt={"Image"}
            objectFit="fill"
            w={800}
            h={400}
            p={5}
            src={
              "https://static.vecteezy.com/system/resources/previews/002/127/141/original/online-doctor-and-healthcare-concept-illustration-online-diagnose-online-consultation-personal-doctor-can-use-for-homepage-mobile-apps-character-cartoon-illustration-flat-style-free-vector.jpg"
            }
          />
        </Flex>
      </Flex>
    </>
  );
}
