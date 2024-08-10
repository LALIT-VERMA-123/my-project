import React from 'react';
import './TrackOrders.css';

function TrackOrders() {
  return (
    <div className="track-orders">
      <h3>Track Your Order</h3>
      <div className="timeline">
        <div className="timeline-item order-received">
          <div className="timeline-dot"></div>
          <div className="timeline-content">Order Received</div>
        </div>
        <div className="timeline-item in-processing">
          <div className="timeline-dot"></div>
          <div className="timeline-content">In Processing</div>
        </div>
        <div className="timeline-item shipped">
          <div className="timeline-dot"></div>
          <div className="timeline-content">Shipped</div>
        </div>
        <div className="timeline-item delivered">
          <div className="timeline-dot"></div>
          <div className="timeline-content">Delivered</div>
        </div>
        <div className="timeline-item cancelled">
          <div className="timeline-dot"></div>
          <div className="timeline-content">Cancelled</div>
        </div>
      </div>
    </div>
  );
}

export default TrackOrders;
