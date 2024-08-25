import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DataTablePage from './components/DataTablePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataTablePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;