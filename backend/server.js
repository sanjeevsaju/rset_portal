import express from "express"
import cors from "cors"
import portal from "./api/portal.route.js"

/* Creating an express backend app */
const app = express()

/* Middleware */
app.use(cors())
app.use(express.json())

/* We will use the portal router object to route to different route */
app.use("/api/portal", portal)
app.use("*", (req, res) => { res.status(404).json({ err : "Invalid Page!"})})

export default app