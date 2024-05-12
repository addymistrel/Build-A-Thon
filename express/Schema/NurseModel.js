//User Schema is Defined here
const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  nameOnCard: { type: String },
  cardNumber: { type: Number },
  expiryMonth: { type: String },
  expiryYear: { type: String },
  cvv: { type: Number },
});

const AddressSchema = new mongoose.Schema({
  addressName: { type: String },
  addressLine1: { type: String },
  addressLine2: { type: String },
  phone: { type: Number },
  city: { type: String },
  state: { type: String },
  Pincode: { type: Number },
  isDefault: { type: Boolean },
});

const LocationSchema = new mongoose.Schema({
  text: { type: String },
  lat: { type: Number },
  long: { type: Number },
});


const RouteTime = new mongoose.Schema({
  start: { type: String },
  end: { type: String },
});
const RouteSchema = new mongoose.Schema({
  origin: [LocationSchema],
  destination: [LocationSchema],
  originTime: [RouteTime],
  destinationTime: [RouteTime],
});

const ScheduleHistorySchema = new mongoose.Schema({
  rideId: { type: String },
  origin: [LocationSchema],
  destination: [LocationSchema],
  otp: { type: Number },
});

const NurseSchema = new mongoose.Schema({
  profilePicture: { type: String },
  name: { type: String },
  email: { type: String, unique: true },
  phoneNumber: { type: Number },
  NUID: { type: String },
  UHID: { type: String },
  rating: { type: Number },
  address: [AddressSchema],
  paymentInfo: [PaymentSchema],
  routes: [RouteSchema],
  rideHistory: [ScheduleHistorySchema],
  credits: { type: Number },
  userType: { type: String },
  experience: { type: String },
});

const NurseModel = mongoose.model("Nurse", NurseSchema);
module.exports = NurseModel;
