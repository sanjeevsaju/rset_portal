let admin

export default class AdminDAO {

    static async injectDB(conn) {
        try {
            if(admin) {
                return
            } else {
                admin = await conn.db(process.env.RSETPORTAL_NS).collection("admin")
            }
        } catch(e) {
            console.error(`Unable to establish a connection handle in adminDAO : ${e}`)
        }
    }

    static async login({
        user = null
    }) {

        let query = {}

        if(user) {
            query = { "password" : { $eq : user["password"]}}
        }

        let cursor

        try {
            cursor = await admin.find(query)

        } catch(e) {
            console.log(`Unable to find the user with the password : ${e}`)
        }

        try {
            const cursorToArray = await cursor.toArray()
            const find = await admin.countDocuments(query)
            console.log(`Find : ${find}`)
            if((cursorToArray[0].user_name) === user.userName){
                console.log(cursorToArray[0].user_name)
                return { status : "success"}
            }
        } catch(e) {
            //console.log(`Unable to convert cursor to array : ${e}`)
            return { status : "failed"}
        }

    }

    static async signUp(userName, password) {
        try {
            const signupDoc = {
                user_name : userName,
                password : password
            }

            return await admin.insertOne(signupDoc)

        } catch(e) {
            console.log(`Unable to sign up in adminDAO : ${e}`)
            return { error : e }
        }
    }
}