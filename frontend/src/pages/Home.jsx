import { useState, useEffect } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";

const Home = () => {
  const [feedback, setFeedback] = useState([]);

  // Fetch existing feedback
  useEffect(() => {
    fetch("https://feedback-collector-brv4.onrender.com/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data))
      .catch(console.error);
  }, []);

  // Handle new feedback submission
  const handleSubmit = async (newFeedback) => {
    const res = await fetch("https://feedback-collector-brv4.onrender.com/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  const handleDelete = async (id) => {
    await fetch(`https://feedback-collector-brv4.onrender.com/api/feedback/${id}`, { method: "DELETE" });
    setFeedback(feedback.filter((f) => f._id !== id));
  };

  const handleResolve = async (id) => {
    const res = await fetch(`https://feedback-collector-brv4.onrender.com/api/feedback/${id}/resolve`, { method: "PUT" });
    const updated = await res.json();
    setFeedback(feedback.map((f) => (f._id === id ? updated : f)));
  };

  return (
    <div>
      <div className="brand">
        <h1>Feedback Collector</h1>
        <p>Collect user feedback quickly and track resolutions.</p>
      </div>

      <div className="app-container">
        <div>
          <FeedbackForm onSubmit={handleSubmit} />
        </div>
        <div>
          <FeedbackList feedback={feedback} onDelete={handleDelete} onResolve={handleResolve} />
        </div>
      </div>
    </div>
  );
};

export default Home;
