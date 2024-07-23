import './App.css';
 import './assets/fonts.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './components/SignInPage';

function App() {
  return (
    /*
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>*/
    <SignInPage />
  );
}

export default App;
