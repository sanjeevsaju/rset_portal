import AdminDAO from "../dao/adminDAO.js"

export default class AdminController {

    static async apiLogin(req, res, next) {
        const userName = req.body.user_name
        const password = req.body.password

        let user = {}

        user.userName = userName
        user.password = password

        try {
            const loginResponse = await AdminDAO.login({
                user,
            })

            if(loginResponse.status === "success"){
                res.json({login : "Successful"})
            } else {
                res.json({login : "Failed!"})
            }
        } catch(e) {
            res.status(500).json({ e : `AdminController[login] : ${e.message}`})
        }
    }

    static async apiSignUp(req, res, next) {
        const userName = req.body.user_name
        const password = req.body.password

        try {
            const signupResponse = await AdminDAO.signUp(
                userName,
                password
            )

            res.json({ status : "Success"})

        } catch(e) {
            res.status(500).json({ e : `AdminController[signup] : ${e.message}`})
        }
    }

}