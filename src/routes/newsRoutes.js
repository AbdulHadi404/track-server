const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const News = mongoose.model("news");

router.post("/news", async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res
      .status(422)
      .send({ error: "you must provide  news name and description" });
  }
  try {
    const news = new News({ name, description });
    await news.save();
    res.send(news);
  } catch (err) {
    return res.status(422).send(err.message);
  }
});
router.get("/news", async (req, res) => {
  const news = await News.find({});
  res.send(news);
});

module.exports = router;
