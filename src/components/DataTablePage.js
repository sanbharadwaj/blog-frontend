import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import DataForm from './DataForm';
import { Link } from 'react-router-dom';

const DataTablePage = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:8000/api/data/')
      .then(response => response.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (formData) => {
    fetch('http://localhost:8000/api/data/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        fetchData();
      });
  };

  return (
    <div>
      <h1>Dummy Data Table</h1>
      <DataForm onSubmit={handleSubmit} />
      <DataTable data={data} />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default DataTablePage;