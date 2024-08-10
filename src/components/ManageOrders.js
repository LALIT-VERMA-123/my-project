import React, { useState, useEffect } from 'react';
import './ManageOrders.css'; // Import the CSS file for styling

// Sample data for orders
const initialOrders = [
  { id: 1, customer: 'Alice Johnson', items: ['Item 1', 'Item 2'], status: 'Order Received', date: '2024-08-01' },
  { id: 2, customer: 'Bob Brown', items: ['Item 3'], status: 'In Processing', date: '2024-08-02' },
  { id: 3, customer: 'Carol White', items: ['Item 4', 'Item 5'], status: 'Shipped', date: '2024-08-03' },
  { id: 4, customer: 'David Green', items: ['Item 6'], status: 'Delivered', date: '2024-08-04' }
];

function ManageOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders data from an API
    setOrders(initialOrders);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="manage-orders">
      <h3>Manage Orders</h3>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items.join(', ')}</td>
              <td>{order.status}</td>
              <td>{order.date}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option value="Order Received">Order Received</option>
                  <option value="In Processing">In Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageOrders;
