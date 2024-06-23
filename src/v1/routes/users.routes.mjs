import express from "express";
import {
  getAllUsers,
  getUserByEmail,
  userRegister,
} from "../controllers/user.controllerss.mjs";

const userRouter = express.Router();

const moduleRoutes = [
  {
    path: "/",
    method: "get",
    // middleware: [isLoggedIn, authorization("admin")],
    route: getAllUsers,
  },
  {
    path: "/",
    method: "post",
    // middleware: [
    //   isLoggedIn,
    //   authorization("admin"),
    //   userRegisterValidator,
    //   runValidation,
    // ],
    route: userRegister,
  },

  {
    path: "/:email",
    method: "get",
    route: getUserByEmail,
  },
];

moduleRoutes.forEach((route) => {
  userRouter[route.method](route.path, /** route.middleware */ route.route);
});

export default userRouter;
