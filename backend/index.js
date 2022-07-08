import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import StudentsDAO from "./dao/studentsDAO.js"
import AdminDAO from "./dao/adminDAO.js"

/* Configure the .env file */
dotenv.config()

/* Creating an instance of MongoDB client */
const MongoClient = mongodb.MongoClient

/* Set the port */
const port = process.env.PORT || 8000

/* Connect to the database */
MongoClient.connect(
    process.env.RSETPORTAL_DB_URI,

    {
        maxPoolSize : 50,
        wtimeoutMS : 2500
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await StudentsDAO.injectDB(client)
    await AdminDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
