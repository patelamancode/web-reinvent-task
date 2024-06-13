import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/pages/Signin';
import SignUp from './components/pages/Signup';
import Dashboard from './components/pages/Dashboard'; 
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/common/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Router>
      <Footer />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
