const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const Internship = mongoose.model("internship");
router.post("/internship", async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res
      .status(422)
      .send({ error: "you must provide internship name and description" });
  }
  try {
    const internship = new Internship({ name, description });
    await internship.save();
    res.send(internship);
  } catch (err) {
    return res.status(422).send(err.message);
  }
});
router.get("/internship", async (req, res) => {
  const internship = await Internship.find({});
  res.send(internship);
});

module.exports = router;
