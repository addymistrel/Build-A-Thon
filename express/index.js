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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
