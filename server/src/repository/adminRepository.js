const AdminModel = require('../models/admin.js')
const LoggerService = require('../services/loggerService.js')

class AdminRepository {
    constructor() {
        this.loggerServiceInstance = new LoggerService()
    }

    async login({ login }) {
        try {
            const result = await AdminModel.findOne({ login })

            this.loggerServiceInstance.infoLog(`mongoose login user with id ${result._id} successfull`)
            return result
        } catch (err) {
            this.loggerServiceInstance.infoLog('mongoose login user error')
            throw new Error(err)
        }
    }

    async register(filter = {}) {
        try {
            const result = await AdminModel.find(filter);
            this.loggerServiceInstance.infoLog(`mongoose get users succesfull`)
            return result
        } catch (err) {
            this.loggerServiceInstance.infoLog('mongoose get users error')
            throw new Error(err)
        }
    }
}

module.exports = AdminRepository;