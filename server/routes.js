// Roues file

import express from "express";
import * as blogControllers from "./controller.js";

export const blogRoutes = express.Router();

blogRoutes.get("/", blogControllers.getBlogsController);
