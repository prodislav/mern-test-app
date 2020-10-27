const {
    createLogger,
    format,
    transports
} = require('winston')

const loggerConfig = require('../config/logger.config.json')

class LoggerService {

    logger = createLogger({
        level: loggerConfig.level,
        format: format.json(),
        transports: [
            new transports.File({ filename: loggerConfig.errorLogName, level: loggerConfig.errorLevel }),
            new transports.File({ filename: loggerConfig.combinedLogName })
        ]
    });

    constructor() {
        this.logger.add(new transports.Console({
            format: format.simple()
        }));
    }

    infoLog(message) {
        this.logger.info(message);
    }

    errorLog(message) {
        this.logger.error(message);
    }
}

module.exports = LoggerService;