import FeedbackItem from "./FeedbackItem";
const FeedbackList = ({ feedback, onDelete, onResolve }) => {
  if (!feedback || feedback.length === 0) return <p>No feedback yet!</p>;

  return (
    <ul className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item._id || item.name} item={item} onDelete={onDelete} onResolve={onResolve} />
      ))}
    </ul>
  );
};

export default FeedbackList;
