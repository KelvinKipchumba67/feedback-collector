import Feedback from "../models/feedback.js";

export const getFeedbacks = async (req, res) => {
  const feedbacks = await Feedback.find().sort({ createdAt: -1 });
  res.json(feedbacks);
};

export const createFeedback = async (req, res) => {
  const { name, message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  const newFeedback = await Feedback.create({ name, message });
  res.status(201).json(newFeedback);
};

export const deleteFeedback = async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

export const markResolved = async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  if (!feedback) return res.status(404).json({ error: "Not found" });

  feedback.resolved = true;
  await feedback.save();
  res.json(feedback);
};
