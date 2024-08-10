import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import SupplierProfile from './components/SupplierProfile';
import TrackOrders from './components/TrackOrders';
import ManageOrders from './components/ManageOrders';
import Feedback from './components/Feedback';
import OrderRequirements from './components/OrderRequirements'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<SupplierProfile />}>
          <Route path="track-orders" element={<TrackOrders />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="requirements" element={<OrderRequirements />} /> {/* Nested route */}
        </Route>
        {/* <Route path="/" element={<SignUpForm />} /> Default route */}
      </Routes>
    </Router>
  );
}

export default App;
