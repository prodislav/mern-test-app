const UsersModel = require('../models/users.js')
const LoggerService = require('../services/loggerService.js')

class UsersRepository {
    constructor() {
        this.loggerServiceInstance = new LoggerService()
    }

    async addUser(user) {
        try {
            const result = await UsersModel.create(user);
            this.loggerServiceInstance.infoLog(`mongoose add user with id ${result._id} saved succesfull`)
            return result
        } catch (err) {
            this.loggerServiceInstance.infoLog('mongoose add user error')
            throw new Error(err)
        }
    }

    async getUsers(filter = {}) {
        try {
            const result = await UsersModel.find(filter);
            this.loggerServiceInstance.infoLog(`mongoose get users succesfull`)
            return result
        } catch (err) {
            this.loggerServiceInstance.infoLog('mongoose get users error')
            throw new Error(err)
        }
    }
}

module.exports = UsersRepository;