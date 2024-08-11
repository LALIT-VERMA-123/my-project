// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import SupplierProfile from './components/SupplierProfile';
import WalmartLoginPage from './components/WalmartLoginPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/walmart-login" element={<WalmartLoginPage />} />
        <Route path="/profile" element={<SupplierProfile />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
