import express from "express";
import { authGoogleLogin } from "../Controllers/UserControllers";

const Router = express.Router();

Router.post("/google", authGoogleLogin);

export default Router
