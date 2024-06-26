import mongoose from "mongoose";
import { isEmail } from "../../helper/helper.mjs";

// user schema
const jobSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please provide your company name"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Please provide your position"],
      trim: true,
    },
    employmentType: {
      type: String,
      required: [true, "Please provide your employment type"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Please provide your location"],
      trim: true,
    },
    salaryRange: {
      type: String,
      required: [true, "Please provide your salary"],
      trim: true,
    },
    experience: {
      type: String,
      required: [true, "Please provide your experience"],
      trim: true,
    },
    overview: {
      type: String,
      required: [true, "Please provide your overview"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Please provide your location"],
      trim: true,
    },
    skills: {
      type: [String],
      required: [true, "Please provide your skills"],
      trim: true,
    },
    requirements: {
      type: [String],
      required: [true, "Please provide your requirements"],
      trim: true,
    },
    responsibilities: {
      type: [String],
      required: [true, "Please provide your responsibilities"],
      trim: true,
    },
    workLevel: {
      type: String,
      required: [true, "Please provide your work level"],
      trim: true,
    },
    queries: {
      type: [
        {
          email: {
            type: String,
          },
          question: String,
          reply: [],
        },
      ],
      trim: true,
    },
    applicants: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      trim: true,
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide employer id"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Job", jobSchema);
