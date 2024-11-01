import express from "express";
import * as controller from "./controller";

const router = express.Router();

router.route("/signup").post(controller.create);

router.route("/login").post(controller.login);

export default router;
