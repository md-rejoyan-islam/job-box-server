import mongoose from "mongoose";
import { isEmail } from "../../helper/helper.mjs";

// employer schema
const employerSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
      minlength: [3, "Name can not be less than 3 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
      minlength: [3, "Name can not be less than 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      trim: true,
      unique: [true, "Email already exist."],
      lowercase: true,
      validate: {
        validator: (value) => {
          return isEmail(value);
        },
        message: "Please enter a valid email.",
      },
    },
    gender: {
      type: String,
      lowercase: true,
      enum: {
        values: ["male", "female"],
        message: "{VALUE} is invalid for gender",
      },
    },
    companyName: {
      type: String,
      required: [true, "Please provide your company name"],
      trim: true,
    },
    employeeRange: {
      type: String,
      required: [true, "Please provide your total employee"],
    },
    companyCategory: {
      type: String,
      required: [true, "Please provide your company category"],
      trim: true,
    },
    roleInCompany: {
      type: String,
      required: [true, "Please provide your role of company"],
      trim: true,
    },
    // for buffer image storing in database
    // photo: {
    //   type: Buffer,
    //   contentType: String,
    // },
    photo: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Employer", employerSchema);
