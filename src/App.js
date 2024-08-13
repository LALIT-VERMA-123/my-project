// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import WalmartLoginPage from './components/WalmartLoginPage';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/walmart-login" element={<WalmartLoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
