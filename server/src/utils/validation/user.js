const joi = require('joi');

/* ************************************************************************************** */
// Signup parameters validation.
/* ************************************************************************************** */

exports.signUp = function (req, res, next) {

    const data = req.body;
    let objectValidateScheme = joi.object().keys({

        fullName: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
    });

    joi.validate(data, objectValidateScheme, {
        allowUnknown: true
    }, (err) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: err.details[0].message
            });
        } else {

            next();
        }
    });

}
exports.updatePlanInfo = function (req, res, next) {

    const data = req.body;
    let objectValidateScheme = joi.object().keys({

        memberShipPlan: joi.string().required().valid('free','premium'),
    });

    joi.validate(data, objectValidateScheme, {
        allowUnknown: true
    }, (err) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: err.details[0].message
            });
        } else {

            next();
        }
    });

}

exports.resetPassword = function (req, res, next) {

    const data = req.body.data;
    let objectValidateScheme = joi.object().keys({
        oldPassword: joi.string().required(),
        password: joi.string().required(),
    });

    joi.validate(data, objectValidateScheme, {
        allowUnknown: true
    }, (err) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: err.details[0].message
            });
        } else {

            next();
        }
    });

}

exports.resetUserByAdminPassword = function (req, res, next) {

    const data = req.body.data;
    let objectValidateScheme = joi.object().keys({
        password: joi.string().required(),
    });

    joi.validate(data, objectValidateScheme, {
        allowUnknown: true
    }, (err) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: err.details[0].message
            });
        } else {

            next();
        }
    });

}
exports.forgetPassword = function (req, res, next) {

    const data = req.body.data;
    let objectValidateScheme = joi.object().keys({
        email: joi.string().required(),
    });

    joi.validate(data, objectValidateScheme, {
        allowUnknown: true
    }, (err) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: err.details[0].message
            });
        } else {

            next();
        }
    });

}
exports.setNewPassword = function (req, res, next) {

    const data = req.body.data;
    let objectValidateScheme = joi.object().keys({
        forgetPasswordAuthToken: joi.string().required(),
        password: joi.string().required()

    });

    joi.validate(data, objectValidateScheme, {
        allowUnknown: true
    }, (err) => {
        if (err) {
            // send a 422 error response if validation fails
            res.status(422).json({
                status: 'error',
                message: err.details[0].message
            });
        } else {

            next();
        }
    });

}