import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  message: { type: String, required: true },
  resolved: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Feedback", feedbackSchema);
