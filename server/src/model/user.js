"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const secretKey = process.env.SECRET_KEY;

const autoIncrement = require('mongoose-auto-increment');
const url = "mongodb://localhost:27017/" + process.env.DB_NAME
var connection = mongoose.createConnection(url);

autoIncrement.initialize(connection);
const User = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  fullName: {
    type: String
  },
  age: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  gender: {
    type: String,
    enum: ["male", "female",],
    default: "male"
  },
  primarySymptom: {
    type: Schema.Types.ObjectId,
    ref: 'Symptom'
  },
  searchConditions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Condition'
    }
  ],
  
  dealingConditions: {
    type: Array
  },
  conditions: {
    type: Array
  },
  lifeStyle: {
    type: Object
  },
  painManagementTeam: {
    type: Array
  },
  isFieldBasicSetting: {
    type: Boolean,
    default: false
  },
  isFieldBaseLine: {
    type: Boolean,
    default: false
  },
  oTPCode: {
    type: String
  },
  oTPVerification: {
    type: Boolean,
    default: false
  },
  smsSid: {
    type: String
  },
  userId: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    unique: true
  },
  phoneNumber: {
    type: String,
  },


  status: {
    type: String,
    enum: ["active", "pending", "block", "unBlock"],
    default: "active"
  },

  isDeleted: {
    type: Boolean,
    default: false
  },
  password: {
    type: String,
    trim: true
  },
  confirmPassword: {
    type: String,
    trim: true
  },
  forgetPasswordAuthToken: {
    type: String
  },
  location: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },

  role: {
    type: String,
    enum: ["highSuperAdmin", "superAdmin", "client"],
    default: "client"
  },
  profileCompleted: {
    type: String,
    enum: ["inCompleted", "completed"],
    default: "inCompleted"
  },
  invitationGuid: {
    type: String
  },

  profileImageUrl: {
    type: String
  },

  token: {
    type: String
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  createdAt: {
    type: Date,
    default: Date.now
  },


},
  {
    versionKey: false
  }
);

User.methods.generateAuthToken = async function (extra = "") {
  let user = this;
  let access = "auth";

  let token = jwt
    .sign({
      _id: user._id.toHexString(),
      access,
      email: user.email,
      role: user.role,
      isDeleted: user.isDeleted,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: user.fullName,
      status: user.status,
    },
      secretKey
    )
    .toString();
  user.token = token;


  return user.save().then(() => {
    return token;
  });
};

/**
 * Password hash middleware.
 */
User.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
User.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

User.statics.findByToken = function (token) {
  let User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, secretKey);
  } catch (error) {
    return Promise.reject(error);
  }

  return User.findOne({
    _id: decoded._id,
    token: token
  });
};


User.plugin(autoIncrement.plugin, {
  model: 'User',
  field: 'userId',
  startAt: 6000,
  incrementBy: 1
});


mongoose.model("User", User);