import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { Link } from 'react-router-dom';

const DataTablePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/data/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Dummy Data Table</h1>
      <DataTable data={data} />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default DataTablePage;