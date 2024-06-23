import mongoose from "mongoose";
import { isEmail } from "../../helper/helper.mjs";

// user schema
const userSchema = mongoose.Schema(
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
    role: {
      type: String,
      required: [true, "Please provide your role"],
      enum: {
        values: ["candidate", "employer"],
        message: "{VALUE} is invalid for role",
      },
    },
    employer: {
      type: Object,
      required: function () {
        return this.role === "employer";
      },
      properties: {
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
      },
    },
    candidate: {
      type: Object,
      required: function () {
        return this.role === "candidate";
      },
      properties: {
        skills: {
          type: [String],
          required: [true, "Please provide your skills"],
        },
        experience: {
          type: String,
          required: [true, "Please provide your experience"],
          trim: true,
        },
        education: {
          type: String,
          required: [true, "Please provide your education"],
          trim: true,
        },
        country: {
          type: String,
          required: [true, "Please provide your country"],
          trim: true,
        },
        address: {
          type: String,
          required: [true, "Please provide your address"],
          trim: true,
        },
        city: {
          type: String,
          required: [true, "Please provide your city"],
          trim: true,
        },
        postalCode: {
          type: String,
          required: [true, "Please provide your postal code"],
          trim: true,
        },
      },
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
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
