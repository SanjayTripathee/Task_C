import { Schema } from "mongoose";

let webUserSchema = Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    gender: {
      type: String,
    },
    country: {
      type: String,
      default: "nepal",
    },
    hasCar: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    age: {
      type: Number,
    },
    role: {
      type: String,
    },
    isVerifyedEmail: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default webUserSchema;
