import { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    onSubmit({ name: name || "Anonymous", message });
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Leave Your Feedback</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
  <button type="submit" disabled={!message}>Submit</button>
    </form>
  );
};

export default FeedbackForm;
