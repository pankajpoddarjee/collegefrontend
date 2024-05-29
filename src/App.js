//import logo from './logo.svg';
//import './App.css';
//import User from './demo/User';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './pages/bootstrap/css/bootstrap.min.css';
// import './pages/bootstrap/css/sidebar.css';
// import './pages/bootstrap/css/style.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CollegeList from './pages/college/CollegeList';
import CollegeDetail from './pages/college/CollegeDetail';
import InfiniteScrollExample1 from './pages/InfiniteScrollExample1';
import NoPage from './pages/NoPage';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/colleges" element={<CollegeList />} />
          <Route path="/college/:id" element={<CollegeDetail />} />
          <Route path="/scroll" element={<InfiniteScrollExample1 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
