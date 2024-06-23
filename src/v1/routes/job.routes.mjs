import express from "express";
import {
  addJob,
  askQuestion,
  getAllJobs,
  getJobById,
} from "../controllers/job.controllers.mjs";

const jobRouter = express.Router();

jobRouter.route("/").get(getAllJobs).post(addJob);
jobRouter.route("/question").patch(askQuestion);
jobRouter.route("/:id").get(getJobById);

export default jobRouter;
