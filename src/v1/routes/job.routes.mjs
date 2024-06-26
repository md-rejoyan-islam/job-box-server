import express from "express";
import {
  addJob,
  askQuestion,
  deleteJobById,
  getAllJobs,
  getJobById,
  getJobsByEmployerId,
  questionReply,
} from "../controllers/job.controllers.mjs";

const jobRouter = express.Router();

jobRouter.route("/").get(getAllJobs).post(addJob);
jobRouter.route("/question").patch(askQuestion);
jobRouter.route("/question/reply").patch(questionReply);
jobRouter.route("/employer/:id").get(getJobsByEmployerId);
jobRouter.route("/:id").get(getJobById).delete(deleteJobById);

export default jobRouter;
