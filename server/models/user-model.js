const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated:{ type: Boolean, default: false },
  activationLink: { type: String },
  score: {type: Number},
  school_class: {type: Number}
});

module.exports = model("User", userSchema)