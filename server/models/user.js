const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const pick = require('lodash/pick');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      isAsync: true,
      validator: validator.isEmail,
      message: '{VALUE} is not an email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();

  const userInfo = pick(userObj, ['_id', 'email']);
  return userInfo;
};

UserSchema.methods.generateAuthToken = function () {
  return new Promise((resolve, reject) => {
    const user = this;
    const access = 'auth';
    const token = jwt.sign({_id: user._id.toHexString(), access }, 'secret').toString();

    user.tokens.push({ access, token });

    user.save().then(user => {
      resolve(token);
    })
  })
}

UserSchema.statics.findByToken = function (token) {
  const User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, 'secret');
  } catch (error) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
}

UserSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      })
    })
  } else {
    next();
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = { User };