import applyRouter from "../v1/routes/apply.routes.mjs";
import jobRouter from "../v1/routes/job.routes.mjs";
import userRouter from "../v1/routes/users.routes.mjs";

// version 1 routes
const v1 = [
  {
    path: "/api/v1/users",
    route: userRouter,
  },

  {
    path: "/api/v1/jobs/apply",
    route: applyRouter,
  },
  {
    path: "/api/v1/jobs",
    route: jobRouter,
  },
];

export default v1;
