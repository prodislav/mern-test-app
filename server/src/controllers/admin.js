const AdminService = require("../services/adminService.js");
const adminServiceInstance = new AdminService();
const { validateLoginInput, validateRegisterInput } = require("../authValidation");

const jwt = require("jsonwebtoken");

module.exports = { login };

async function login(req, res) {
    console.log(req.body)
    try {
        const { errors, isValid } = validateLoginInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const { status, payload, user } = await adminServiceInstance.login(req.body);

        if (user) {
            const userData = {
                id: user._id,
                login: user.login
            };

            jwt.sign(
                userData,
                process.env.secretOrKey,
                {
                    expiresIn: 31556926
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token,
                        login: user.login
                    });
                }
            );
        } else {
            res.status(status).json(payload)
        }
    } catch (e) {
        res.status(500).send(e);
    }
}