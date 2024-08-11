// // components/Orders.js
// import React from 'react';
// import './OrdersTable.css';

// const Orders = () => {
//     const orders = [
//         { id: 295665, category: 'Laptops and Computers', product: 'Macbook Pro Laptop', quantity: 1, price: 1700, date: '30-12-2019', address: '136 Church St, New York City, NY 10001', month: 12, sales: 1700, city: 'New York City' },
//         { id: 295666, category: 'Home Appliances', product: 'LG Washing Machine', quantity: 1, price: 600, date: '29-12-2019', address: '562 2nd St, New York City, NY 10001', month: 12, sales: 600, city: 'New York City' },
//         { id: 295667, category: 'Charging Cables', product: 'USB-C Charging Cable', quantity: 1, price: 11.95, date: '22-12-2019', address: '277 Main St, New York City, NY 10001', month: 12, sales: 11.95, city: 'New York City' },
//         // Add more orders here
//     ];

//     return (
//         <div className="table-container">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>Product Category</th>
//                         <th>Product</th>
//                         <th>Quantity Ordered</th>
//                         <th>Price Each</th>
//                         <th>Order Date</th>
//                         <th>Purchase Address</th>
//                         <th>Month</th>
//                         <th>Sales</th>
//                         <th>City</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map((order, index) => (
//                         <tr key={index}>
//                             <td>{order.id}</td>
//                             <td>{order.category}</td>
//                             <td>{order.product}</td>
//                             <td>{order.quantity}</td>
//                             <td>{order.price}</td>
//                             <td>{order.date}</td>
//                             <td>{order.address}</td>
//                             <td>{order.month}</td>
//                             <td>{order.sales}</td>
//                             <td>{order.city}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Orders;
import React, { useState, useEffect } from 'react';
import './ManageOrders.css'; // Import the CSS file for styling

// Sample data for orders
const initialOrders = [
  { id: 1, customer: 'Alice Johnson', items: ['Item 1', 'Item 2'], status: 'Order Received', date: '2024-08-01' },
  { id: 2, customer: 'Bob Brown', items: ['Item 3'], status: 'In Processing', date: '2024-08-02' },
  { id: 3, customer: 'Carol White', items: ['Item 4', 'Item 5'], status: 'Shipped', date: '2024-08-03' },
  { id: 4, customer: 'David Green', items: ['Item 6'], status: 'Delivered', date: '2024-08-04' }
];

function Orders() {
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
      {/* <h3>Manage Orders</h3> */}
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

export default Orders;
