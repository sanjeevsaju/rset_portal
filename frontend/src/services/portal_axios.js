import http from "../http-common.js"

class PortalDataService {

    studentLogin(data) {
        return http.post("/studentLogin", data)
    }

    adminLogin(data) {
        return http.post("/adminLogin", data)
    }

    studentSignUp(data) {
        return http.post("/studentSignup", data)
    }

    adminSignUp(data) {
        return http.post("/adminSignup", data)
    }
}

export default new PortalDataService()