import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Makeup from 'C:/Users/User/Desktop/빅프/KT_BigProject_07/frontend/src/pages/MakeupMethod/makeupmethod.js';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Makeup />} />
          {/* More routes */}
        </Routes>
      </Router>
    );
  }
  

export default App;