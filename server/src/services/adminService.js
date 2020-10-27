

const AdminRepository = require("../repository/adminRepository.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AdminService {
    constructor() {
        this.adminRepositoryInstance = new AdminRepository()
    }

    async login(requestUser) {
        try {
            const user = await this.adminRepositoryInstance.login(requestUser);

            if (!user) {
                const status = 404
                const payload = { loginnotfound: "Login not found" }

                return { status, payload }
            }

            const isMatch = await bcrypt.compare(requestUser.password, user.password)

            if (isMatch) {
                return { user }
            } else {
                const status = 400
                const payload = { passwordincorrect: "Password incorrect" }

                return { status, payload }
            }
        } catch (err) {
            return { success: false, error: err };
        }
    }

    async register(filter) {
        try {
            const result = await this.adminRepositoryInstance.register(filter)
            return { success: true, payload: result }
        } catch (err) {
            return { success: false, error: err }
        }
    }
}

module.exports = AdminService;