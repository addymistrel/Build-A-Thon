import React, { useContext, useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// components

export default function ScheduleBooking({ userData }) {
  const [fetchStatus, setFetchStatus] = useState(false);
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [service, setService] = useState("");
  //For Driver
  const [vnumber, setvnumber] = useState("");
  const [dlnumber, setdlnumber] = useState("");
  // //console.log(displayData);
  const [editData, setEditData] = useState("");
  const [disabledState, setDisabledState] = useState("");
  const [editVal, setEditVal] = useState("");
  const [postData, setPostData] = useState("");
  const navigate = useNavigate();

  //field data
  let propDetails = {
    userType: "UserType",
    email: "Email",
    fname: "First Name",
    lname: "Last Name",
    address1: "Address Line 1",
    address2: "Address Line 2",
    phone: "Phone Number",
    city: "City",
    state: "State",
    pin: "PinCode",
    vnumber: "Vehicle Number",
    dlnumber: "Driving License No",
  };

  //genrating random string

  const handlePincodeChange = async (e) => {
    const pincode = e.target.value;
    try {
      setFetchStatus(true);
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();
      if (data && data[0].Status === "Error") {
        setFetchStatus(false);
        setCity("");
        setState("");
      } else if (data && data[0].Status === "Success") {
        setFetchStatus(false);
        setPostData(data);
        setState(data[0].PostOffice[0].State);
        setCity(data[0].PostOffice[0].Name);
        //console.log(data[0].PostOffice[0].Name);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // //console.log(editData);
  // //console.log(postData);

  //   const handleProfileChanges = async () => {
  //     if (data.userType === "user") {
  //       let sendData = {
  //         userType: data.userType,
  //         email: email,
  //         fname: fname,
  //         lname: lname,
  //         address1: address1,
  //         address2: address2,
  //         phone: phone.toString(),
  //         city: city,
  //         state: state,
  //         pin: pin.toString(),
  //       };
  //       let tmpStr = "";
  //       let emptyStatus = false;
  //       for (let prop in sendData) {
  //         // //console.log(sendData[prop], prop, typeof sendData[prop]);
  //         if (sendData[prop].length === 0) {
  //           if (tmpStr.length === 0) tmpStr = tmpStr + propDetails[prop];
  //           else tmpStr = tmpStr + ", " + propDetails[prop];
  //           emptyStatus = true;
  //         }
  //       }
  //       if (emptyStatus) {
  //         toast({
  //           title: `${tmpStr} cannot be left Blank`,
  //           status: "error",
  //           isClosable: true,
  //           position: "top-right",
  //         });
  //       } else {
  //         // //console.log(sendData["phone"]);
  //         if (sendData.phone.length !== 10) {
  //           toast({
  //             title: `Phone Number must not be less than 10 digits`,
  //             status: "error",
  //             isClosable: true,
  //             position: "top-right",
  //           });
  //         } else {
  //           if (sendData.pin.length !== 6) {
  //             toast({
  //               title: `Wrong Pin Code`,
  //               status: "error",
  //               isClosable: true,
  //               position: "top-right",
  //             });
  //           } else {
  //             //console.log(sendData);
  //             const retData = await axios
  //               .post("/editprofile", { sendData })
  //               .then((res) => {
  //                 //console.log(res.data);
  //                 toast({
  //                   title: "Profile Updated Successfully",
  //                   status: "success",
  //                   isClosable: true,
  //                   position: "top-right",
  //                 });
  //                 setDisabledState(true);
  //                 setEditVal("Edit Profile");
  //               })
  //               .catch((err) => {
  //                 //console.log(err);
  //               });
  //           }
  //         }
  //       }
  //     } else {
  //       let sendData = {
  //         userType: data.userType,
  //         email: email,
  //         fname: fname,
  //         lname: lname,
  //         address1: address1,
  //         address2: address2,
  //         phone: phone.toString(),
  //         city: city,
  //         state: state,
  //         pin: pin.toString(),
  //         vnumber: vnumber,
  //         dlnumber: dlnumber,
  //       };
  //       let tmpStr = "";
  //       let emptyStatus = false;
  //       for (let prop in sendData) {
  //         // //console.log(sendData[prop], prop, typeof sendData[prop]);
  //         if (sendData[prop].length === 0) {
  //           if (tmpStr.length === 0) tmpStr = tmpStr + propDetails[prop];
  //           else tmpStr = tmpStr + ", " + propDetails[prop];
  //           emptyStatus = true;
  //         }
  //       }
  //       if (emptyStatus) {
  //         toast({
  //           title: `${tmpStr} cannot be left Blank`,
  //           status: "error",
  //           isClosable: true,
  //           position: "top-right",
  //         });
  //       } else {
  //         // //console.log(sendData["phone"]);
  //         if (sendData.phone.length !== 10) {
  //           toast({
  //             title: `Phone Number must not be less than 10 digits`,
  //             status: "error",
  //             isClosable: true,
  //             position: "top-right",
  //           });
  //         } else {
  //           if (sendData.pin.length !== 6) {
  //             toast({
  //               title: `Wrong Pin Code`,
  //               status: "error",
  //               isClosable: true,
  //               position: "top-right",
  //             });
  //           } else {
  //             if (
  //               !/^[A-Z]{2}[ -]?[0-9]{2}[ -]?[A-Z]{1,2}[ -]?[0-9]{4}$/.test(
  //                 sendData.vnumber
  //               )
  //             ) {
  //               toast({
  //                 title: "Invalid Vehicle Number",
  //                 status: "error",
  //                 isClosable: true,
  //                 position: "top-right",
  //               });
  //             } else {
  //               if (
  //                 !/^(([A-Z]{2}[0-9]{2})|([A-Z]{2}-[0-9]{2}))((19|20)[0-9]{2})[0-9]{7}$/.test(
  //                   sendData.dlnumber
  //                 )
  //               ) {
  //                 toast({
  //                   title: "Invalid Driving License Number",
  //                   status: "error",
  //                   isClosable: true,
  //                   position: "top-right",
  //                 });
  //               } else {
  //                 //console.log(sendData);
  //                 const retData = await axios
  //                   .post("/editprofile", { sendData })
  //                   .then((res) => {
  //                     //console.log(res.data);
  //                     toast({
  //                       title: "Profile Updated Successfully",
  //                       status: "success",
  //                       isClosable: true,
  //                       position: "top-right",
  //                     });
  //                     setDisabledState(true);
  //                     setEditVal("Edit Profile");
  //                   })
  //                   .catch((err) => {
  //                     //console.log(err);
  //                   });
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   };
  const handleSubmit = () => {
    const sendData = {
      name: name,
      email: email,
      dob: dob,
      aadhar: aadhar,
      phone: phone,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      pin: pin,
      service: service,
    };
    navigate("/maps");
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-10">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold text-center">
              Schedule Booking Form
            </h6>
            <button
              className="bg-[#e51b23] text-white active:bg-rose-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleSubmit}
            >
              Confirm Booking
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 opacity-100">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={phone}
                    maxLength="10"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  {disabledState === true ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      defaultValue={city}
                    />
                  ) : (
                    <select
                      type="text"
                      className="border-0 px3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="" selected disabled hidden>
                        {city}
                      </option>
                      {postData &&
                        postData[0].PostOffice.map((item) => (
                          <option>{item.Name}</option>
                        ))}
                    </select>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={pin}
                    disabled={disabledState}
                    maxLength="6"
                    onChange={(e) => {
                      setPin(e.target.value);
                      handlePincodeChange(e);
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Service Type
                  </label>
                  <select
                    type="text"
                    className="border-0 px3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">In-Home</option>
                    <option value="">Clinic Visit</option>
                    <option value="">Hospital Visit</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Timings
            </h6>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Arrival Time
                </label>
                <input
                  type="datetime-local"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Departure Time
                </label>
                <input
                  type="datetime-local"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
