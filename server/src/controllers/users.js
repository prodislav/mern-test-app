const UserService = require("../services/usersService.js");
const userServiceInstance = new UserService();
const { encrypt, decrypt } = require('../crypto.js')

module.exports = { addUser, getUsers };

async function addUser(req, res) {
    try {
        const request = { ...req.body, SSN: encrypt(req.body.SSN) }
        const { success, payload } = await userServiceInstance.create(request);

        return res.send({
            success,
            payload: {
                id: payload._id,
                firstName: payload.firstName,
                secondName: payload.secondName,
                fullAddress: payload.fullAddress,
                telNumber: payload.telNumber,
                SSN: decrypt(payload.SSN)
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
}

async function getUsers(req, res) {
    try {
        const { success, payload } = await userServiceInstance.getUsers({});

        return res.send({
            success,
            payload: payload.map((el) => ({
                id: el._id,
                firstName: el.firstName,
                secondName: el.secondName,
                fullAddress: el.fullAddress,
                telNumber: el.telNumber,
                SSN: decrypt(el.SSN)
            }))
        });
    } catch (err) {
        res.status(500).send(err);
    }
}