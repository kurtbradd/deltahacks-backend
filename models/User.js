var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var requiredString = {
  type: String,
  required: true
}

var userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    unique: true, 
    lowercase: true,
    required: true 
  },
  password: {
    type: String,
    required: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  emailVerificationToken: String,
  isAdmin: {
    type: Boolean,
    default: false;
  },
  signUpDate: {
    type: Date,
    default: Date.now
  },
  lastUpdatedDate: {
    type: Date,
    default: Date.now
  },
  applicantionStatus: {
    type: String,
    enum: ['Unconfirmed', 'Accepted', 'Declined']
  },
  firstName: requiredString,
  lastName: requiredString,
  school: requiredString,
  links: {
    website: String,
    resumeUrl: String,
    github: String,
    linkedin: String,
    challengePost: String,
  },
  about: {
    bio: String,
    firstHackathon: Boolean,
    bestDescribesYou: {
      type: String,
      enum: ['Software','Hardware','Business', 'Design']
    },
    tshirtGender: {
      type: String,
      enum: ['Male', 'Female']
    },
    tshirtSize : {
      type: String,
      enum: ['XS','S','M','L','XL','XXL']
    },
    dietaryRestrictions: String
  }
});

// Password hashing Mongoose middleware
userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(5, function(err, salt) {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

// Schema Instance Methods
// Verify Password For User Instance
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};

// Schema Static Method
// Find User WIth Email Address
userSchema.statics.findByEmail = function (email, cb) {
  this.find({ email:email}, cb);
}

// Schema Virtuals
// User Full Name
userSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model('User', userSchema);