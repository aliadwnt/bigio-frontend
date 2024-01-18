// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListStory from './pages/listStory';
import AddStory from './pages/addStory';
import AddChapter from './pages/addChapter';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ListStory />} />
          <Route path="/addStory" element={<AddStory />} />
          <Route path="/addChapter" element={<AddChapter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
