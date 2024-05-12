import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Button, Mark, useControllableProp, useToast } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import axios from "axios";
import "./Map.css";
import { Autocomplete } from "@react-google-maps/api";
import {
  Container,
  Box,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Heading,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function MyComponent({ nonceVal }, { route, state }) {
  const [start, setStart] = useState({ latitude: "", longitude: "" });
  const [end, setEnd] = useState({ latitude: "", longitude: "" });
  const handleLocation = () => {
    toast({
      title: `Booking is Confirmed`,
      status: "success",
      isClosable: true,
      position: "top-right",
    });
    setTimeout(() => {
      navigate("/user/dashboard");
    }, [2000]);
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStart({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  console.log(start);
  useEffect(() => {
    getLocation();
  }, []);
  const [amount, setAmount] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const containerStyle = {
    width: `${windowSize <= 600 ? "500px" : "1000px"}`,
    height: "500px",
    border: "1px solid white",
    borderRadius: "30px",
  };
  const navigate = useNavigate();
  const usData = JSON.parse(localStorage.getItem("grabwayUser"));
  ////console.log(usData);
  //   const location = useLocation();
  //   if (!location.state) {
  //     <Navigate to={"/"} />;
  //   }
  const toast = useToast();
  const [showCards, setShowCards] = useState(false);
  ////console.log(location);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBGgGCyJsOFVtYgPoE3_PcYmNL99yn6dsU",
    libraries: ["maps", "places"],
    mapIds: ["7e437361629e930a"],
    nonce: nonceVal,
  });

  //recieving text
  //   const rideDataText = {
  //     source: location.state.source,
  //     destination: location.state.destination,
  //   };
  ////console.log(rideDataText, location);

  const petrolPrice = 105;

  //   const handlemapDriverRoute = (type) => {
  //     if (type === "driver")
  //       navigate("/routeDriverRegistration", {
  //         state: { data: location, amount: amount },
  //       });
  //     else
  //       navigate("/routeUserRegistration", {
  //         state: { data: location, amount: amount },
  //       });
  //   };
  //Route setup and display function
  const [directionResponse, setDirectionResponse] = useState("");
  //   async function calculateRoute() {
  //     if (rideDataText.source === "" || rideDataText.source === "") {
  //       return;
  //     }
  //     /* eslint-disable */
  //     const directionService = new google.maps.DirectionsService();
  //     const results = await directionService.route({
  //       origin: rideDataText.source,
  //       destination: rideDataText.destination,
  //       /* eslint-disable */
  //       travelMode: google.maps.TravelMode.DRIVING,
  //     });
  //     setDirectionResponse(results);
  //   }

  //calculating distance matrix
  const [distanceText, setDistanceText] = useState(null);
  const [durationText, setDurationText] = useState(null);
  const [distanceNum, setDistanceNum] = useState(null);
  const [durationNum, setDurationNum] = useState(null);

  //   async function distanceMatrix() {
  //     try {
  //       /* eslint-disable */
  //       const service = new google.maps.DistanceMatrixService();
  //       const request = {
  //         origins: [rideDataText.source],
  //         destinations: [rideDataText.destination],
  //         /* eslint-disable */
  //         travelMode: google.maps.TravelMode.DRIVING,
  //         /* eslint-disable */
  //         unitSystem: google.maps.UnitSystem.METRIC,
  //         avoidHighways: false,
  //         avoidTolls: false,
  //       };
  //       const responseDistanceMatrix = await service
  //         .getDistanceMatrix(request)
  //         .then((res) => {
  //           setDistanceNum(res.rows[0].elements[0].distance.value);
  //           setDistanceText(res.rows[0].elements[0].distance.text);
  //           setDurationNum(res.rows[0].elements[0].duration.value);
  //           setDurationText(res.rows[0].elements[0].duration.text);
  //           //console.log(res);
  //           packagePrice(res.rows[0].elements[0].distance.value);
  //         });
  //       setShowCards(true);
  //     } catch (err) {
  //       //console.log("Error while calculating distnace");
  //       toast({
  //         title: "Didn't find Any such Route",
  //         description: "Presently we dont provide service in requested route",
  //         status: "error",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //       setShowCards(false);
  //     }
  //   }

  //Contents for map container
  //   let initialPosition = location.state.sourceCord;
  //   let finalPosition = location.state.destinationCord;

  const mapOptions = {
    mapId: "7e437361629e930a",
    disableDefaultUI: true,
  };
  const [map, setMap] = React.useState(null);
  const center = { lat: start.latitude, lng: start.longitude };
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  //function to scroll down to cards
  const handleScroll = () => {
    const element = document.getElementById("package-cards");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //const declaration for display outputs
  const [fromVerifed, setFromVerified] = useState(false);
  const [showFinalButtonDisplay, setShowFinalButtonDisplay] = useState(true);
  function packagePrice(distanceNum) {
    if (distanceNum) {
      setAmount(Math.floor((distanceNum / 1000) * 15 * 30));
      ////console.log(price);
    }
  }

  const src = { lat: start.latitude, lng: start.longitude };
  return isLoaded ? (
    <>
      <div className="mainMap">
        <div className="flex justify-center items-center ">
          <div>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              options={mapOptions}
            >
              <MarkerF position={src} />
              {/* {directionResponse && (
              <DirectionsRenderer directions={directionResponse} />
            )} */}
            </GoogleMap>
          </div>
        </div>
        <div className="sideDiv">
          <Container maxW="5xl" p={{ base: 5, md: 10 }}>
            <Stack
              spacing={4}
              maxW={{ base: "20rem", sm: "25rem" }}
              margin="0 auto"
            >
              <Stack align="center" spacing={2}>
                <Heading fontSize={{ base: "xl", sm: "3xl" }}>
                  Tell me the Locations
                </Heading>
                <Text fontSize={{ base: "sm", sm: "md" }}>
                  Arrival and Destination
                </Text>
              </Stack>
              <Box pos="relative">
                <Box
                  pos="absolute"
                  top="-7px"
                  right="-7px"
                  bottom="-7px"
                  left="-7px"
                  rounded="lg"
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  transform="rotate(-2deg)"
                ></Box>
                <VStack
                  as="form"
                  pos="relative"
                  spacing={8}
                  p={6}
                  bg={"white"}
                  rounded="lg"
                  boxShadow="lg"
                >
                  <FormControl id="arrival">
                    <FormLabel>Arrival</FormLabel>
                    <Autocomplete className=" font-ubuntu text-center">
                      <Input
                        type="text"
                        placeholder="Start Location"
                        rounded="md"
                      />
                    </Autocomplete>
                  </FormControl>
                  <FormControl id="destination">
                    <FormLabel>Destination</FormLabel>
                    <Autocomplete className=" font-ubuntu text-center">
                      <Input
                        type="text"
                        placeholder="End Location"
                        rounded="md"
                      />
                    </Autocomplete>
                  </FormControl>
                  <Button
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    rounded="md"
                    w="100%"
                    onClick={handleLocation}
                  >
                    Confirm Locations
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </Container>
        </div>
      </div>

      {/* <div className="mt-[4%] flex justify-center items-center">
        {!fromVerifed && (
          <Button
            colorScheme="red"
            sx={{ bgColor: "#E51B23", color: "white" }}
            onClick={() => {
              setFromVerified(true);
            }}
          >
            Confirm Source
          </Button>
        )}
        {fromVerifed && (
          <Button
            colorScheme="red"
            sx={{ bgColor: "#E51B23", color: "white" }}
            onClick={() => {
              calculateRoute();
              distanceMatrix();
              setShowFinalButtonDisplay(false);
              setTimeout(() => {
                handleScroll();
              }, 3000);
            }}
          >
            Confirm Destination
          </Button>
        )}
      </div> */}
    </>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
