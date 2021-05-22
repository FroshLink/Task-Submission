//VALIDATION
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
};

const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
};

//Register
const jsonPlaceholderRegisterValidation = (data) =>{
    const schema = {
        id: Joi.string().min(1).required(),
        title: Joi.string().min(10).required(),
        url: Joi.string().min(20).required()
    };
    return Joi.validate(data, schema);
};

const jsonPlaceholderValidation = (data) =>{
    const schema = {
        title: Joi.string().min(10).required()
    };
    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

module.exports.jsonPlaceholderRegisterValidation = jsonPlaceholderRegisterValidation;
module.exports.jsonPlaceholderValidation = jsonPlaceholderValidation;