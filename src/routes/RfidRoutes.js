const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
const rfid = mongoose.model("rfid");

router.get(
  "/RFID_Attendance_Of_" + year + "-" + month + "-" + date,
  async (req, res) => {
    try {
      const rf = await rfid.find({});
      res.send(rf);
      console.log("abay");
    } catch (err) {
      console.log("abay" + err);
    }
  }
);

module.exports = router;
