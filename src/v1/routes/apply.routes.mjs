import express from "express";
import {
  applyForJob,
  getAllApplications,
  getJobsByEmail,
} from "../controllers/apply.controllers.mjs";

const applyRouter = express.Router();

applyRouter.route("/").get(getAllApplications).post(applyForJob);
applyRouter.route("/:email").get(getJobsByEmail);

export default applyRouter;
