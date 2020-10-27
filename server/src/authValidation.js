const Validator = require("validator");
const isEmpty = require("is-empty");

function validateLoginInput(data) {
    let errors = {};
    
    data.login = !isEmpty(data.login) ? data.login : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    if (Validator.isEmpty(data.login)) {
        errors.login = "login field is required";
    }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};

function validateRegisterInput(data) {
    let errors = {};

    data.login = !isEmpty(data.login) ? data.login : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.login)) {
        errors.login = "Login field is required";
    }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = { validateLoginInput, validateRegisterInput }