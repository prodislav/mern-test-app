const UsersRepository = require("../repository/usersRepository.js");

class UsersService {
    constructor() {
        this.usersReporitoryInstance = new UsersRepository()
    }

    async create(user) {
        try {
            const result = await this.usersReporitoryInstance.addUser(user);
            return { success: true, payload: result };
        } catch (err) {
            return { success: false, error: err };
        }
    }

    async getUsers(filter) {
        try {
            const result = await this.usersReporitoryInstance.getUsers(filter)
            return { success: true, payload: result }
        } catch (err) {
            return { success: false, error: err }
        }
    }
}

module.exports = UsersService;