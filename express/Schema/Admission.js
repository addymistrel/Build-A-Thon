//Apply for Admission Schema Defined Here
const mongoose = require("mongoose");

const ApplyAdmissionSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  city: { type: String },
  Program: { type: String },
  Course: { type: String },
  DOB: { type: String },
});

const ApplyAdmissionModel = mongoose.model("admission", ApplyAdmissionSchema);
module.exports = ApplyAdmissionModel;
