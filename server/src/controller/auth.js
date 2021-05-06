const constant = require("../utils/constant"),
  generalService = require("../services/generalOperation"),
  _ = require('lodash'),
  passport = require("passport");
const bcrypt = require('bcryptjs');
const guid = require('guid');

const TableName = "User";
const saltRounds = 10;
const sendEmail = require('../utils/emailSender').sendEmail;
const emailTemplate = require('../utils/emailTemplates');
const sendSMS = require('../utils/smsSender').sendSMS;



const signIn = async (req, res, next) => {
  try {
    //const data = req.body;
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        res.status(400).send({
          status: constant.ERROR,
          message: "Connect With admin for Activation of Account"
        });
      }
      if (!user) {
        res.status(400).send({
          status: constant.ERROR,
          message: "Incorrect username or password"
        });
      }
      req.logIn(user, async err => {
        if (err) {
          return next(err);
        }
        if (user.status === "active" && user.isDeleted === false) {
          let token = await user.generateAuthToken();
          let data = _.pick(user, ["_id", "email", "firstName", "lastName", "fullName", "role", "phoneNumber", "status", "createdAt", "userId", "profileImageUrl","profileCompleted"]);
          data.token = token;



          res.header({
            "x-auth": token
          }).status(200).send({
            status: constant.SUCCESS,
            message: "Success! You are logged in.",
            user: data
          });
        } else {
          res.status(200).send({
            status: constant.ERROR,
            message: "Connect With admin for Activation of Account"
          });
        }
      });
    })(req, res, next);
  } catch (error) {
    res.status(404).send({
      status: constant.ERROR,
      message: "Connectivity error try again"
    });
  }
};


function generateOTP() {

  // Declare a string variable  
  // which stores all string 
  var string = '0123456789';
  let OTP = '';

  // Find the length of string 
  var len = string.length;
  for (let i = 0; i < 6; i++) {
    OTP += string[Math.floor(Math.random() * len)];
  }
  return OTP;
}



const signUp = async (req, res) => {
  try {
    const data = req.body;
    var user = null;
    generalService
      .addRecord(TableName, data)
      .then(result => {
        user = result;
        return user.generateAuthToken();
      })
      .then(async token => {
        user.token = token;
        res.header({ "x-auth": token }).send({
          status: constant.SUCCESS,
          message: "User Register Successfully",
          user: _.pick(user, ["_id", "email", "token", "fullName", "role", "phoneNumber"])
        });
      })
      .catch(e => {
        res.send({
          status: constant.ERROR,
          message: e.message
        });
      });
  } catch (error) {
    res.send({
      status: constant.ERROR,
      message: "Connectivity error try again"
    });
  }
};




const resetPassword = async (req, res) => {
  try {
    const user = req.user;
    let obj = req.body;

    const password = await bcrypt.hash(obj.password, saltRounds);


    let data = {
      status: constant.SUCCESS,
      message: "User Updated Successfully"
    };

    const checkPassword = await generalService.getRecord(TableName, {
      _id: user._id
    });
    bcrypt.compare(obj.oldPassword, checkPassword[0].password, async (err, result) => {
      if (result) {
        const userObj = await generalService.updateRecord("User", {
          _id: user._id
        }, {
          password: password
        });

        if (!_.isUndefined(userObj)) {
          res.send(data);
        } else {
          res.send({
            status: constant.ERROR,
            message: "User not Updated try again"
          });
        }
      } else {
        res.status(200).send({
          status: constant.ERROR,
          message: "Old Password Not Matched"
        });
      }
    });

  } catch (error) {
    res.send({
      status: constant.ERROR,
      message: "Connectivity error try again"
    });
  }
};


const forgetPassword = async (req, res) => {
  try {
    console.log("req.body received at forgetPassword is ", req.body);
    const email = req.body.email;
    const authToken = guid.create().value;

    const Record = await generalService.getRecord(TableName, {
      email: email
    });

    if (Record.length > 0) {
      await generalService.findAndModifyRecord(TableName, {
        email: email
      }, {
        forgetPasswordAuthToken: authToken
      });

      const url = process.env.CLIENT_URL + "/setNewPassword/" + authToken;

      const sent = await sendEmail(email, "Reset Password Email for SWPPP Portal", emailTemplate.forgetPasswordEmail(url));

      if (sent) {
        res.status(200).send({
          status: constant.SUCCESS,
          message: "Forget password email sent."
        })

      } else {
        res.status(500).send({
          status: constant.ERROR,
          message: "Unable to send forget password email. Please try again"
        })
      }

    } else {
      res.status(200).send({
        status: constant.ERROR,
        message: "We don't recognize this email please try again or contact administrator"
      });
    }
  } catch (error) {
    res.status(404).send({
      status: constant.ERROR,
      message: "Oops!! Something went wrong please contact administrator"
    });
  }
};

const setNewPassword = async (req, res) => {
  try {
    console.log("req.body received at setNewPassword is ", req.body);
    const forgetPasswordAuthToken = req.body.forgetPasswordAuthToken;
    const password = req.body.password;
    const encryptPassword = await bcrypt.hash(password, saltRounds);
    const Record = await generalService.getRecord(TableName, {
      forgetPasswordAuthToken: req.body.forgetPasswordAuthToken
    });
    if (Record && Record.length > 0) {
      console.log("======= Record =====", Record);
      const email = Record[0].email;
      await generalService.findAndModifyRecord(TableName, {
        forgetPasswordAuthToken: forgetPasswordAuthToken
      }, {
        password: encryptPassword,
        forgetPasswordAuthToken: "nothingisdone_-_done"
      });

      const sent = await sendEmail(email, "Password Changed Successfully for SWPPP Portal", emailTemplate.setNewPasswordSuccessfully());

      if (!sent) {
        res.status(500).send({
          status: constant.ERROR,
          message: "Unable to set new password. Please try again"
        })

      } else {
        res.status(200).send({
          status: constant.SUCCESS,
          message: "New password set successfully."
        })
      }


    } else {
      throw (error);
    }
  } catch (error) {
    res.status(404).send({
      status: constant.ERROR,
      message: "Oops!! Something went wrong please contact administrator"
    });
  }
};


const emailCheck = async (req, res) => {
  try {

    let obj = req.user._id;
    let data = req.body;
    const Record = await generalService.getRecord(TableName, {
      email: data.email
    });
    if (Record.length > 0) {
      res.status(200).send({
        status: constant.ERROR,
        message: "Email already exit in the system",
      })
    } else {
      res.status(200).send({
        status: constant.SUCCESS,
        message: "Email can be use",
      });
    }

  } catch (error) {
    res.status(400).send({
      status: constant.ERROR,
      message: "Connectivity error try again"
    });
  }
};


const emailTest = async (req, res, next) => {
  try {
    const {
      toEmail,
      fromEmail,
      subject,
      auth
    } = req.body;
    if (auth !== "who are you") {
      res.status(511).send({
        status: constant.ERROR,
        message: "Unauthorized user"
      });
      return true;
    }
    const result = await sendEmail(toEmail, subject, emailTemplate.welcomeEmail("www.digitalsensei.net"));
    console.log("value of result form email sender is", result);
    if (result.ErrorCode === 0) {
      res.status(200).send({
        status: constant.SUCCESS,
        message: "Email sent successfully"
      });
    } else {
      res.status(501).send({
        status: constant.ERROR,
        message: "Unable to send Email"
      });

    }

  } catch (error) {
    console.log("Exception ocurred while sending Email. Error is : ", error);
    res.status(501).send({
      status: constant.ERROR,
      message: "Some Exception occurred while sending email"
    });

  }
}


const smsController = async (req, res, next) => {
  try {
    const {
      to,
      body
    } = req.body;

    const result = await sendSMS(to, body);
    console.log("result of sendSMS is", result);
    if (result) {
      res.status(200).send({
        status: constant.SUCCESS,
        message: "SMS sent successfully"
      });
    } else {
      res.status(501).send({
        status: constant.SUCCESS,
        message: "Unable to send SMS"
      });

    }

  } catch (error) {
    console.log("Oops! Error occurred while sending sms. Error is : ", error);
    res.status(501).send({
      status: constant.SUCCESS,
      message: "Some Exception occured while sending SMS"
    });
  }
}


const updatePlanInfo = async (req, res, next) => {
  try {
    const data = req.body;
    const user = req.user;
    const Record = await generalService.findAndModifyRecord(TableName, { _id: user._id }, data);

    res.status(200).send({
      status: constant.SUCCESS,
      message: "Record Updated successfully",
      memberShipPlan: Record.memberShipPlan
    });

  } catch (error) {
    res.status(404).send({
      status: constant.ERROR,
      message: "Oops!! Something went wrong please contact administrator"
    });
  }
}
const updateProfileInfo = async (req, res, next) => {
  try {
    const data = req.body;
    const user = req.user;
    data.profileCompleted = "completed"
    const Record = await generalService.findAndModifyRecord(TableName, { _id: user._id }, data);

    res.status(200).send({
      status: constant.SUCCESS,
      message: "Record Updated successfully",
      Record
    });

  } catch (error) {
    res.status(404).send({
      status: constant.ERROR,
      message: "Oops!! Something went wrong please contact administrator"
    });
  }
}

module.exports = {

  signUp,
  updatePlanInfo,
  updateProfileInfo,
  signIn,
  resetPassword,
  forgetPassword,
  setNewPassword,
  emailCheck,
  emailTest,
  smsController
};