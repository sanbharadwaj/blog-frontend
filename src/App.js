import './App.css';
import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/data/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <h1>Dummy Data Table</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;
