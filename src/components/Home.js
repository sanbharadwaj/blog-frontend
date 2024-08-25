import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <Link to="/data">View Data Table</Link>
    </div>
  );
};

export default Home;