const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
 versionKey: false 
});
mongoose.model("internship", internshipSchema);
