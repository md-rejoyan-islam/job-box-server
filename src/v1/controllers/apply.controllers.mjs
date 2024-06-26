import asyncHandler from "express-async-handler";
import createError from "http-errors";
import applyModel from "../models/apply.model.mjs";
import { successResponse } from "../../helper/responseHandler.mjs";
import userModel from "../models/user.model.mjs";
import jobModel from "../models/job.model.mjs";

// apply for a job
export const applyForJob = asyncHandler(async (req, res) => {
  const { job, user, employer } = req.body;

  // check if user exists
  const userExists = await userModel.exists({ _id: user });
  if (!userExists) throw createError(404, "User not found");

  // check if job exists
  const jobExists = await jobModel.exists({ _id: job });
  if (!jobExists) throw createError(404, "Job not found");

  const apply = await applyModel.create({
    job,
    user,
    employer,
  });

  // update data
  await jobModel.findByIdAndUpdate(job, {
    $push: {
      applicants: apply._id,
    },
  });

  successResponse(res, {
    statusCode: 201,
    message: "Applied successfully",
    payload: {
      data: apply,
    },
  });
});

// get all applications
export const getAllApplications = asyncHandler(async (req, res) => {
  const applications = await applyModel.find().populate("job user");

  successResponse(res, {
    statusCode: 200,
    message: "All applications",
    payload: {
      data: applications,
    },
  });
});

//get jobs by candidate email
export const getJobsByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;

  // check if user exists
  const userExists = await userModel.findOne({ email });

  if (!userExists) throw createError(404, "User not found");

  const applications = await applyModel
    .find({ user: userExists._id })
    .populate("job user");

  successResponse(res, {
    statusCode: 200,
    message: "All applications",
    payload: {
      data: applications,
    },
  });
});

// get applications by employer id
export const getApplicationsByEmployerId = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // check if user exists
  const userExists = await userModel.exists({ _id: id });

  if (!userExists) throw createError(404, "User not found");

  const applications = await applyModel.find({ employer: id }).populate("user");

  successResponse(res, {
    statusCode: 200,
    message: "All applications",
    payload: {
      data: applications,
    },
  });
});
//
