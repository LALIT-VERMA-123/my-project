import React, { useState, useEffect } from 'react';
import './OrderRequirements.css'; // Import the CSS file for styling

function OrderRequirements() {
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    // Simulate fetching requirements data from an API
    setRequirements([
      { id: 1, requirement: 'Ensure packaging meets safety standards.' },
      { id: 2, requirement: 'Verify that all items are included in the shipment.' },
      { id: 3, requirement: 'Confirm delivery address and contact details.' },
      { id: 4, requirement: 'Provide necessary documentation for customs.' }
    ]);
  }, []);

  return (
    <div className="order-requirements">
      <h3>Order Requirements</h3>
      <ul>
        {requirements.map(req => (
          <li key={req.id} className="requirement-item">
            {req.requirement}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderRequirements;
