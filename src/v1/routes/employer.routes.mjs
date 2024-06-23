import express from "express";
import {
  createEmployer,
  getAllEmployers,
  getEmployerByEmail,
} from "../controllers/employer.controllers.mjs";

const employerRouter = express.Router();

employerRouter.route("/").post(createEmployer).get(getAllEmployers);
employerRouter.route("/:email").get(getEmployerByEmail);

export default employerRouter;
