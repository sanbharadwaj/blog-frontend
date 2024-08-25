import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
            <td>{item.column4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;