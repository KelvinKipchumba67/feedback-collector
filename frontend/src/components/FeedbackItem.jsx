import React from "react";

const FeedbackItem = ({ item, onDelete, onResolve }) => {
  return (
    <li className={`feedback-item ${item.resolved ? "resolved" : ""}`}>
      <div>
        <strong>{item.name || "Anonymous"}</strong>
        <p>{item.message}</p>
      </div>
      <div className="actions">
        {!item.resolved && (
          <button onClick={() => onResolve(item._id)}>Resolve</button>
        )}
        <button onClick={() => onDelete(item._id)}>Delete</button>
      </div>
    </li>
  );
};

export default FeedbackItem;
