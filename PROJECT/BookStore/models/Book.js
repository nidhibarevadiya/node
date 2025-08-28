import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  genre: String,
  price: Number,
  issueDate: Date,
  returnDate: Date,
  studentName: String,
  studentId: String
});

export default mongoose.model("Book", bookSchema);
