import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Deals from './pages/Deals';
import Community from './pages/Community';
import About from './pages/About';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="discover" element={<Discover />} />
            <Route path="deals" element={<Deals />} />
            <Route path="community" element={<Community />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<div>Login Page</div>} />
            <Route path="signup" element={<div>Signup Page</div>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App