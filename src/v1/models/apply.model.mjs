import mongoose from "mongoose";

const applySchema = mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: [true, "Please provide job id"],
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide employer id"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user id"],
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "approved", "rejected"],
        message: "{VALUE} is invalid for status",
      },
      default: "pending",
    },
    message: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Apply", applySchema);
