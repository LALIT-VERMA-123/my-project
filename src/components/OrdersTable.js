// components/OrdersTable.js
import React from 'react';
import './OrdersTable.css';

const OrdersTable = () => {
    const orders = [
        { id: 295665, category: 'Laptops and Computers', product: 'Macbook Pro Laptop', quantity: 1, price: 1700, date: '30-12-2019', address: '136 Church St, New York City, NY 10001', month: 12, sales: 1700, city: 'New York City' },
        { id: 295666, category: 'Home Appliances', product: 'LG Washing Machine', quantity: 1, price: 600, date: '29-12-2019', address: '562 2nd St, New York City, NY 10001', month: 12, sales: 600, city: 'New York City' },
        { id: 295667, category: 'Charging Cables', product: 'USB-C Charging Cable', quantity: 1, price: 11.95, date: '22-12-2019', address: '277 Main St, New York City, NY 10001', month: 12, sales: 11.95, city: 'New York City' },
        // Add more orders here
    ];

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product Category</th>
                        <th>Product</th>
                        <th>Quantity Ordered</th>
                        <th>Price Each</th>
                        <th>Order Date</th>
                        <th>Purchase Address</th>
                        <th>Month</th>
                        <th>Sales</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.category}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.date}</td>
                            <td>{order.address}</td>
                            <td>{order.month}</td>
                            <td>{order.sales}</td>
                            <td>{order.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
