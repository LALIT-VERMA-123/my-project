import React from 'react';

const timelineData = [
  { status: 'Order Received', color: '#007bff', date: '2024-08-01' },
  { status: 'In Processing', color: '#17a2b8', date: '2024-08-02' },
  { status: 'Shipped', color: '#ffc107', date: '2024-08-03' },
  { status: 'Delivered', color: '#28a745', date: '2024-08-04' }
];

function OrderTimeline() {
  return (
    <div className="timeline-container">
      <h3>Order Tracking Timeline</h3>
      <ul className="timeline">
        {timelineData.map((item, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-icon" style={{ backgroundColor: item.color }}></div>
            <div className="timeline-content">
              <h4>{item.status}</h4>
              <p>{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderTimeline;
