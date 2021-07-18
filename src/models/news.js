const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  description: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

mongoose.model("news", newsSchema);
