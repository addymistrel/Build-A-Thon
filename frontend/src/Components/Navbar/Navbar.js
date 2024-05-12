import React, { useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  MenuDivider,
  useDisclosure,
  FormLabel,
  FormControl,
  useColorModeValue,
  useStatStyles,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const IconButton = ({ children }) => {
  return (
    <Button
      padding="0.4rem"
      width="auto"
      height="auto"
      borderRadius="100%"
      bg="transparent"
      _hover={{ bg: "#f6f6f6" }}
    >
      {children}
    </Button>
  );
};

const Navbar = () => {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [email,setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  async function HandleLogin(){
    const res= await axios.post("/nurse/login", {
      email:email,
      password:password
    }).then(()=>{
      console.log('success');
    })
  }

  function HandleSignUp(){
    onClose();
    navigate('/register',{});
  }
  function handleImageClick(){
    navigate("/");
  }

  return (

    <>
      <Box
        py="2"
        boxShadow="sm"
        border="0 solid #e5e7eb"
        position="fixed"
        top="0"
        bg={useColorModeValue("gray.100", "gray.700")}
        width="100%"
        zIndex="1"
      >
        <Container maxW="1280px" px={4} mx="auto">
          <HStack spacing={4}>
            <Image 
            cursor={'grab'}
            onClick={handleImageClick}
              alt="dev logo"
              w={"auto"}
              h={12}
              src="/assets/img/logo_nobg.png"
            />
            <Input
              maxW="26rem"
              placeholder="Search..."
              borderColor={useColorModeValue("gray.300", "white")}
              borderRadius="5px"
              d={{ base: "none", md: "block" }}
            />
            <Spacer />
            <HStack spacing={3}>
              <Button
                color="#fff"
                rounded="md"
                bg="#e51b23"
                _hover={{ bg: "#323ebe" }}
                onClick={onOpen}
              >
                Sign in
              </Button>
              
              {/* <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-labelledby="ap1tc5wqdskeg9i5jtulggx2n8axe0vz"
                >
                  <title id="ap1tc5wqdskeg9i5jtulggx2n8axe0vz">
                    Notifications
                  </title>
                  <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
                </svg>
              </IconButton>
              <Menu isLazy>
                <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
                  <Avatar
                    size="sm"
                    src={
                      "https://avatars2.githubusercontent.com/u/37842853?v=4"
                    }
                  />
                </MenuButton>
                <MenuList
                  zIndex={5}
                  border="2px solid"
                  borderColor={useColorModeValue("gray.700", "gray.100")}
                  boxShadow="4px 4px 0"
                >
                  <Link
                    href="https://dev.to/m_ahmad"
                    _hover={{ textDecoration: "none" }}
                    isExternal
                  >
                    <MenuItem>
                      <VStack justifyContent="start" alignItems="left">
                        <Text fontWeight="500">Muhammad Ahmad</Text>
                        <Text size="sm" color="gray.500" mt="0 !important">
                          @m_ahmad
                        </Text>
                      </VStack>
                    </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Dashboard</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Create Post</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Reading List</Text>
                  </MenuItem>
                  <MenuItem>
                    <Text fontWeight="500">Settings</Text>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Text fontWeight="500">Sign Out</Text>
                  </MenuItem>
                </MenuList>
              </Menu> */}
            </HStack>
          </HStack>
        </Container>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent alignItems={"center"}>
          <ModalHeader
            textAlign={"center"}
            textColor={"#e51b23"}
            fontSize={"x-large"}
          >
            Sign in
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <div className="flex justify-center items-center mt-2">
                    <HiOutlineMail />
                  </div>
                </InputLeftElement>
                <Input
                  size={"lg"}
                  sx={{ width: "320px" }}
                  variant={"filled"}
                  type="email"
                  ref={initialRef}
                  placeholder="Enter Your Email"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <div className="flex justify-center items-center mt-2">
                    <RiLockPasswordLine fill="grey" />
                  </div>
                </InputLeftElement>
                <Input
                  // onChange={(e) => setLoginPassword(e.target.value)}
                  size={"lg"}
                  sx={{ width: "320px" }}
                  variant={"filled"}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                    onClick={() => setShowPassword(!showPassword)}
                    variant="unstyled"
                    size="md"
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button background={"#e51b23"} color={"white"} mr={3}
            onClick={HandleLogin}>
              Login
            </Button>
            <Button onClick={HandleSignUp}>Sign up</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
