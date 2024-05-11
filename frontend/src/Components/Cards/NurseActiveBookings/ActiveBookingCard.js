import React from "react";
import {
  Box,
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
} from "@chakra-ui/react";

import "./ActiveBookingCard.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const sections = ["Active Bookings"];
const areTabsDisabled = true;

function NurseActiveBookingCard(props) {
  const navigate = useNavigate();
  const userData = localStorage.getItem("grabwayUser");
  const matchDriverRoute = props.matchDriverRoute;
  const UserQuery = props.UserQuery;
  // //console.log("adiUserQuery);

  // console.log(matchDriverRoute);
  async function handleMoreDetails(index) {
    const response = await axios
      .post("/moreDetailsForMatchRoutes", {
        matchDriverRoute: matchDriverRoute[index],
      })
      .then((res) => {
        // //console.log(res.data);
        navigate("/moredetails", {
          state: {
            state: res.data,
            matchDriverRoute: matchDriverRoute[index],
            UserQuery: UserQuery,
          },
        });
      })
      .catch((err) => {
        //console.log(err);
      });
    // //console.log(matchDriverRoute[index]);
  }
  const customerRequestData=[{
    name:"Aditya Kumar Dutta",
    Age:60,
    Type:"In-Home",
    Pincode:700103,
    Time:"9:00" 
  },
  {
    name:"Tushar Gandhi",
    Age:52,
    Type:"Clinic Visit",
    Pincode:700103,
    Time:"11:00" 
  },
  {
    name:"Rajiv Lochan Dash",
    Age:65,
    Type:"Hospital Visit",
    Pincode:700103,
    Time:"12:00" 
  }
]

  return (
    <Box p={8} borderRadius="md" boxShadow="lg" bg="white" >
      <Tabs defaultIndex={0} colorScheme="blue" isLazy={areTabsDisabled}>
        <TabList justifyContent="center" borderBottomWidth="1px" pb={2}>
          {sections.map((section, index) => (
            <Tab key={index} isDisabled={index > 0 && areTabsDisabled}>
              {section}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt={4}>
          {sections.map((section, index) => (
            <TabPanel key={index}>
              <div>
                <div class="card-grid gap-8">
                  {customerRequestData.map((driver, driverIndex) => (
                    <div class="bg-white rounded-xl shadow-lg p-8">
                      <div class="relative overflow-hidden">
                        <img
                          class="object-cover w-full h-full"
                          src="/assets/nurseActiveCard.jpg"
                          alt="Car"
                        />
                      </div>
                      <div class="flex items-center justify-between mt-4">
                        <h3 class="text-xl font-bold text-gray-900">
                          {driver.name}
                        </h3>
                        <button
                          class="bg-white text-black border-black border-2 py-2 px-4 font-bold rounded-md"
                          onClick={() => handleMoreDetails(driverIndex)}
                        >
                          More
                        </button>
                      </div>
                      <div className="flex pb-2">
                        <i
                          class="bx bxs-envelope"
                          style={{ color: "#00de82", fontSize: "200%" }}
                        ></i>{" "}
                        <div className="pt-1 pl-4 font-medium">
                          Age - {driver.Age} years
                        </div>
                      </div>
                      <div className="flex pb-2">
                        <i
                          class="bx bxs-car"
                          style={{ color: "#e51b23", fontSize: "200%" }}
                        ></i>{" "}
                        
                      </div>
                      <div className="flex">
                        <i
                          class="bx bxl-shopify"
                          style={{ color: "#7a1bf7", fontSize: "200%" }}
                        ></i>{" "}
                        <div className="pt-1 pl-4 uppercase font-medium">
                          Type - {driver.Type}
                        </div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                        <span class="text-gray-900 font-bold text-lg">
                          Time:{" "}
                          {driver.Time}
                        </span>
                        <Link
                          to="/userCheckout"
                          /*state={{
                            city: matchDriverRoute[driverIndex].city,
                            state: matchDriverRoute[driverIndex].state,
                            matchDriverRoute: matchDriverRoute[driverIndex],
                            UserQuery: UserQuery,
                          }}*/
                        >
                          <button class="bg-theme text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                            Grab it
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default NurseActiveBookingCard;
