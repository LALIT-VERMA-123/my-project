import React, { useState, useEffect } from 'react';
import './Feedback.css'; // Import the CSS file for styling

const initialFeedback = [
  { id: 1, user: 'John Doe', feedback: 'Great service, will order again!', date: '2024-08-01' },
  { id: 2, user: 'Jane Smith', feedback: 'The product quality was excellent.', date: '2024-08-02' },
  { id: 3, user: 'Mike Johnson', feedback: 'Delivery was delayed, but overall good.', date: '2024-08-03' }
];

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Simulate fetching feedback data from an API
    setFeedbackList(initialFeedback);
  }, []);

  return (
    <div className="feedback">
      <h3>User Feedback</h3>
      <div className="feedback-list">
        {feedbackList.map((item) => (
          <div key={item.id} className="feedback-item">
            <h4>{item.user}</h4>
            <p>{item.feedback}</p>
            <span className="feedback-date">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
