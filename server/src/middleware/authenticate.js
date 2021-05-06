const mongoose = require('mongoose');
const constant = require("../utils/constant");
const _ = require('lodash');
const authKey = process.env.SECRET_KEY_LEAD;
const authenticate = (req, res, next) => {
  const token = req.header('authorization');

  const User = mongoose.model('User');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = _.pick(user, ['_id', 'email', 'clientName', 'firstName', 'lastName', "createdBy", "superUserId", "role",]);
    req.token = token;
    next();
  
  }).catch((e) => {
    res.status(401).send({
      status: constant.ERROR,
      message: "Unauthorized User",
    });
  });
};


const authenticateLead = (req, res, next) => {
  const token = req.header('authorization');

  try {
    if (token === authKey) {
      next();
    } else {
      throw new Error('Unauthorized Device');
    }
  } catch (error) {
    res.status(401).send({
      status: constant.ERROR,
      message: "Unauthorized User",
    });
  }

};

module.exports = { authenticate, authenticateLead };