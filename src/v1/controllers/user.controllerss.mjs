import asyncHandler from "express-async-handler";
import { successResponse } from "../../helper/responseHandler.mjs";
import userModel from "../models/user.model.mjs";

// create employer/ candidate register

export const userRegister = asyncHandler(async (req, res) => {
  const user = await userModel.create(req.body);

  successResponse(res, {
    statusCode: 201,
    message: `${req.body.role} created successfully`,
    payload: {
      data: user,
    },
  });
});

// get all candidates controller
export const getAllUsers = asyncHandler(async (_, res) => {
  const users = await userModel.find();

  if (!users.length) {
    throw createErrr(404, "Could not find any user");
  }

  successResponse(res, {
    statusCode: 200,
    message: "Users fetched successfully",
    payload: {
      data: users,
    },
  });
});

// get users by email
export const getUserByEmail = asyncHandler(async (req, res) => {
  const user = await userModel.findOne({ email: req.params.email });

  if (!user) {
    throw createErrr(404, "User not found");
  }

  successResponse(res, {
    statusCode: 200,
    message: "User fetched successfully",
    payload: {
      data: user,
    },
  });
});
