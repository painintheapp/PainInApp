const joi = require('joi');

/* ************************************************************************************** */
// Signup parameters validation.
/* ************************************************************************************** */

exports.updateSetting = function (req, res, next) {

    const data = req.body;
    let objectValidateScheme = joi.object().keys({
        planName1: joi.string().required(),
        planName1Price: joi.number().required(),
        planName1GST: joi.number().required(),
        planName2: joi.string().required(),
        planName2Price: joi.number().required(),
        planName2GST: joi.number().required()
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
exports.updateProfile = function (req, res, next) {

    const data = req.body;
    let objectValidateScheme = joi.object().keys({
        firstName: joi.string(),
        lastName: joi.string(),
        fullName: joi.string(),
        phoneNumber: joi.string().required(),
        
        email: joi.string()
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