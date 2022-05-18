import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <div>
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackList;
