import express from "express";
import isAuthenticated  from "../middlewares/isAuthenticated.js"
import { getAllJobs, getJobsByAdmin, postJob,getJobById } from "../controllers/job.controller.js";
const router= express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/admin/get").get(isAuthenticated,getJobsByAdmin);
router.route("/get/:id").get(isAuthenticated,getJobById);

export default router;