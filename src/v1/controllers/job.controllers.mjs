import asyncHandler from "express-async-handler";
import jobModel from "../models/job.model.mjs";
import createError from "http-errors";
import { successResponse } from "../../helper/responseHandler.mjs";

// add new job
export const addJob = asyncHandler(async (req, res) => {
  const result = await jobModel.create(req.body);

  successResponse(res, {
    statusCode: 201,
    message: "Job created successfully",
    payload: {
      data: result,
    },
  });
});

// get all jobs
export const getAllJobs = asyncHandler(async (_, res) => {
  const jobs = await jobModel.find().populate("applicants queries");

  if (!jobs.length) throw createError(404, "Could not find any job");

  successResponse(res, {
    statusCode: 200,
    message: "Jobs fetched successfully",
    payload: {
      data: jobs,
    },
  });
});

// get job by id
export const getJobById = asyncHandler(async (req, res) => {
  const job = await jobModel.findById(req.params.id);

  if (!job) throw createError(404, "Could not find any job");

  successResponse(res, {
    statusCode: 200,
    message: "Job fetched successfully",
    payload: {
      data: job,
    },
  });
});

// question ask
export const askQuestion = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, question, job } = req.body;

  const jobExists = await jobModel.exists({ _id: job });
  if (!jobExists) throw createError(404, "Job not found");

  const result = await jobModel.findByIdAndUpdate(job, {
    $push: {
      queries: {
        email,
        question,
      },
    },
  });

  successResponse(res, {
    statusCode: 201,
    message: "Question added successfully",
    payload: {
      data: result,
    },
  });
});
