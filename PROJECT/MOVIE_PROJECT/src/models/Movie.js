const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String },
  genre: { type: String },
  releaseDate: { type: Date },
  rating: { type: Number, min: 0, max: 10 },
  summary: { type: String },
  posterUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);
