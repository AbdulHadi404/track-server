const mongoose = require("mongoose");

const rfidSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  username: {
    type: String,
  },
  serialnumber: {
    type: Number,
  },

  device_dep: {
    type: String,
  },
  checkindate: {
    type: Number,
  },
  timein: {
    type: Date,
  },
  timeout: {
    type: Date,
  },
  card_out: {
    type: Number,
  },
  versionKey: false,
});
mongoose.model("rfid", rfidSchema);
