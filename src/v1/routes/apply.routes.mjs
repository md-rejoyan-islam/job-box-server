import express from "express";
import {
  applyForJob,
  getAllApplications,
  getApplicationsByEmployerId,
  getJobsByEmail,
} from "../controllers/apply.controllers.mjs";

const applyRouter = express.Router();

applyRouter.route("/").get(getAllApplications).post(applyForJob);
applyRouter.route("/:email").get(getJobsByEmail);
applyRouter.route("/employer/:id").get(getApplicationsByEmployerId);

export default applyRouter;
