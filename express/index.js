const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { mongoose, models } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Razorpay = require("razorpay");

//google mail and Nodemailer
const nodemailer = require("nodemailer");
const ApplyAdmissionModel = require("./Schema/Admission");
const NurseModel = require("./Schema/NurseModel");
const EmailModel = require("./Schema/Email");

//environment variables
const MONGO_URL =
  "mongodb+srv://addymistrel:buildathon@build-a-thon.o4cko97.mongodb.net/";
const PUBLIC_URL = "http://localhost:3000";
const PORT = 8080;
const jwtSecretKey = "VeryImportantSecret";

const app = express();
app.use(express.json());
app.use(
  cors({
    methods: "GET,POST,PATCH,DELETE,OPTIONS",
    optionsSuccessStatus: 200,
    origin: PUBLIC_URL,
    credentials: true,
  })
);
app.options("*", cors());

app.post("/checkConnection", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  try {
    console.log("Express Server Connection in OK.");
    res.status(200).json("Express Connection is OK.");
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
});

//fucntion to send mail
// async function sendMail(emailOfUser, otp) {
//   try {
//     const accessToken = await oAuth2Client.getAccessToken();
//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: "grabwayhelpdesk@gmail.com",
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFERESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });
//     const mailOptions = {
//       from: "GRABWAY SUPPORT <grabwayhelpdesk@gmail.com>",
//       to: emailOfUser,
//       subject: "Otp Verification for GrabWay",
//       text: `Your One-Time Password for Email verifcation is ${otp}`,
//       html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//       <div style="margin:50px auto;width:70%;padding:20px 0">
//         <div style="border-bottom:1px solid #eee">
//           <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">GrabWay</a>
//         </div>
//         <p style="font-size:1.1em">Hi,</p>
//         <p>Thank you for choosing GrabWay. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
//         <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
//         <p style="font-size:0.9em;">Regards,<br />GrabWay</p>
//         <hr style="border:none;border-top:1px solid #eee" />
//         <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//           <p>GrabWay Pvt Ltd.</p>
//           <p>Bhubaneswar</p>
//           <p>India</p>
//         </div>
//       </div>
//     </div>`,
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// app.post("/detailsSubmit", async (req, res) => {
//   await mongoose.connect(MONGO_URL);
//   const data = req.body.formData;
//   try {
//     console.log("Trying to create Admission Model");
//     const AdmissionRes = await ApplyAdmissionModel.create({
//       name: data.name,
//       email: data.email,
//       mobile: data.mobile,
//       city: data.city,
//       Program: data.Program,
//       Course: data.Course,
//       DOB: data.DOB,
//     });
//     console.log("Successfully Created New Admission Model");
//     res.status(200).json("Success");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.post("/verifyEmail", (req, res) => {
//   function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }
//   try {
//     const otp = randomNumber(1000, 9999);
//     // console.log(otp);
//     const randomOTP = otp + 2025;
//     const email = req.body.signupEmail;
//     const Email = sendMail(email, otp);
//     if (Email) {
//       console.log("Email sent successfully");
//       res.status(200).json(randomOTP);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json("Internal Server Error");
//   }
// });

// app.post("/razorpay", async (req, res) => {
//   const amt = req.body.amt;
//   // console.log("amount", amt);
//   let instance = new Razorpay({
//     key_id: "rzp_test_pM0vDUp05pvdwo",
//     key_secret: "ssogMc4ga1crRhuQdoJPe0wa",
//   });

//   var options = {
//     amount: amt * 100,
//     currency: "INR",
//     receipt: "order_rcptid_11",
//   };

//   instance.orders.create(options, function (err, order) {
//     if (err) {
//       return res.status(500).json("Server Error");
//     }
//     return res.status(200).json(order);
//   });
// });

app.post("/nurse/login", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  const email = req.body.email;
  const password = req.body.password;
  if (email && password) {
    const UserEmail = await EmailModel.findOne({ email: email });
    if (UserEmail !== null) {
      console.log("UserEmail found");
      if (password === UserEmail.password) {
        console.log("Password validated");
        const userType = UserEmail.userType;
        const email = UserEmail.email;
        if (userType === "user") {
          console.log("user");
          const UserData = await UserModel.findOne({ email });
          res.status(200).json(UserData);
        }
        if (userType === "nurse") {
          console.log("nurse");
          const UserData = await NurseModel.findOne({ email });
          res.status(200).json(UserData);
        }
      }
    }
  } else {
    console.log("email or password missing");
    res.status(404).json("Email or password missing");
  }
});

app.post("/register/nurse", async (req, res) => {
  await mongoose.connect(MONGO_URL);
  console.log(req.body.formData);
  const formData = req.body.formData;
  const name = formData.name;
  const email = formData.email;
  const phoneNumber = formData.phoneNumber;
  const addressName = formData.name;
  const addressLine1 = formData.addressLine1;
  const addressLine2 = formData.addressLine2;
  const city = formData.city;
  const state = formData.state;
  const pin = formData.pin;
  const UHID = formData.UHID;
  const NUID = formData.NUID;
  const Experience = formData.Exp;
  const password = formData.password;
  const userType = "nurse";
  if (formData) {
    try {
      const updatedResponse = await NurseModel.create({
        email: email,
        name: name,
        password: password,
        phoneNumber: phoneNumber,
        "address.0.addressName": addressName,
        "address.0.addressLine1": addressLine1,
        "address.0.addressLine2": addressLine2,
        "address.0.city": city,
        "address.0.state": state,
        "address.0.pincode": pin,
        UHID: UHID,
        NUID: NUID,
        Experience: Experience,
        userType: userType,
      });
      if (updatedResponse) {
        const EmailModel = await EmailModel.create({
          email: email,
          password: password,
          userType: userType,
        });
        res.status(200).json(true);
      } else {
        res.status(200).json(null);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Error in try catch");
    }
  } else {
    res.status(500).json("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
