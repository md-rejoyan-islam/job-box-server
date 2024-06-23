import asyncHandler from "express-async-handler";
import { successResponse } from "../../helper/responseHandler.mjs";
import employerModel from "../models/employer.model.mjs";
import createErrr from "http-errors";
import userModel from "../models/user.model.mjs";

// create employer controller

export const createEmployer = asyncHandler(async (req, res) => {
  const employer = await userModel.create(req.body);

  successResponse(res, {
    statusCode: 201,
    message: "Employer created successfully",
    payload: {
      data: employer,
    },
  });
});

// get all employers data
export const getAllEmployers = asyncHandler(async (_, res) => {
  const employers = await employerModel.find();

  successResponse(res, {
    statusCode: 200,
    message: "Employers fetched successfully",
    payload: {
      data: employers,
    },
  });
});

// get employer by email
export const getEmployerByEmail = asyncHandler(async (req, res) => {
  const employer = await employerModel.findOne({ email: req.params.email });

  if (!employer) {
    throw createErrr(404, "Employer not found");
  }

  successResponse(res, {
    statusCode: 200,
    message: "Employers fetched successfully",
    payload: {
      data: employer,
    },
  });
});
