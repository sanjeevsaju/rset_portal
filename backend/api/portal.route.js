import express from "express"
import StudentsCrl from "./students.controller.js"
import AdminCtrl from "./admin.controller.js"

/* Creating an object of express router */
const router = express.Router()

/* We create four routes - two for login and two for signup */
router.route("/studentLogin").post(StudentsCrl.apiLogin)
router.route("/adminLogin").post(AdminCtrl.apiLogin)
router.route("/studentSignup").post(StudentsCrl.apiSignUp)
router.route("/adminSignup").post(AdminCtrl.apiSignUp)

export default router