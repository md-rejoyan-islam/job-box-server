import express from "express";
import {
  createCandidate,
  getAllCandidates,
} from "../controllers/candidate.controller.mjs";

const candidateRouter = express.Router();

candidateRouter.route("/").post(createCandidate).get(getAllCandidates);

export default candidateRouter;
