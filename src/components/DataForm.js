import React, { useState } from 'react';

const DataForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    column1: '',
    column2: '',
    column3: '',
    column4: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ column1: '', column2: '', column3: '', column4: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="column1"
        value={formData.column1}
        onChange={handleChange}
        placeholder="Column 1"
        required
      />
      <input
        type="text"
        name="column2"
        value={formData.column2}
        onChange={handleChange}
        placeholder="Column 2"
        required
      />
      <input
        type="text"
        name="column3"
        value={formData.column3}
        onChange={handleChange}
        placeholder="Column 3"
        required
      />
      <input
        type="text"
        name="column4"
        value={formData.column4}
        onChange={handleChange}
        placeholder="Column 4"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataForm;