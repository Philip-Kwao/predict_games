// pages/football.js
import React from 'react';

const Dummy = ({ dataJSON, error }) => {
  if (error) {
    console.error('Error:', error);
    return <div>Error: {error}</div>;
  }

  console.log('Data received in component:', dataJSON);

  return (
    <div>
      <h1>Dummy Competitions</h1>
      <pre>{JSON.stringify(dataJSON, null, 2)}</pre>
    </div>
  );
};

// const fetch = require('node-fetch');

const url = 'https://dummyjson.com/products';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const testFetch = async () => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error: ", error.message);
  }
};

testFetch();

export default Dummy;