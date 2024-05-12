import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
  IconButton,
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
const Register = () => {
  const navigate = useNavigate();
  function handleNurseClick() {
    navigate("/nurse/registration", {});
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const HandleSignUp = () => {
    navigate("/user/dashboard");
  };
  return (
    <>
      <div className="flex w-[100vw] justify-center items-center text-3xl">
        YOU ARE?
      </div>
      <div className="flex w-[100%] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[38%]">
          <img
            className="w-[80%] m-6"
            src="/assets/patient.gif"
            alt="Patient Here"
          />
          <Button colorScheme="red" onClick={onOpen}>
            Patient
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center w-[38%]">
          <img className="w-[90%]" src="/assets/nurse.gif" alt="Nurse Here" />
          <Button colorScheme="gray" onClick={handleNurseClick}>
            Nurse
          </Button>
        </div>
      </div>

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
            Create Your Account
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <InputGroup>
                {/* <InputLeftElement pointerEvents="none">
                  <div className="flex justify-center items-center mt-2">
                    <RiLockPasswordLine fill="grey" />
                  </div>
                </InputLeftElement> */}
                <Input
                  // onChange={(e) => setLoginPassword(e.target.value)}
                  size={"lg"}
                  sx={{ width: "320px" }}
                  variant={"filled"}
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {/* <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    icon={showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                    onClick={() => setShowPassword(!showPassword)}
                    variant="unstyled"
                    size="md"
                  />
                </InputRightElement> */}
              </InputGroup>
            </FormControl>
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
            <Button
              background={"#e51b23"}
              color={"white"}
              mr={3}
              onClick={HandleSignUp}
            >
              Signup
            </Button>
            {/* <Button>Sign up</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
