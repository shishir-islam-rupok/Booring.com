import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Prices from './pages/Prices';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Future from './components/Future';
import About from './components/About';
import Developer from './pages/Developer';

const App = () => {
  useEffect(() => {
    // Handle mobile viewport height
    const setVH = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div
          style={{
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
            paddingLeft: 'env(safe-area-inset-left)',
            paddingRight: 'env(safe-area-inset-right)'
          }}
        >
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<Future />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/settings" element={<Home />} />
              <Route path="/help" element={<Home />} />
              <Route path="/developer" element={<Developer />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
