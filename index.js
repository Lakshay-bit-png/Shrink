const express = require('express');
const connectDB = require('./config/db');
const route = require('./routes/route');


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

connectDB();
// Use API routes
app.use('/',route);
// index.js


async function callBackendRoute(link) {
    let url = 'http://localhost:3000'; 
    
    try {
     
      url = `${url}/save`;
  
    
      const x = await postData(url, { to: link });
  
     
      if (!x.data.to.startsWith('http://') && !x.data.to.startsWith('https://')) {
        x.data.to = `https://${x.data.to}`;
      }
  
      return `http://localhost:3000/${x.data.from}` ; 

  
    } catch (error) {
      console.error('Error calling backend route:', error);
    }
  }
  
  async function postData(url, data) {
    const fetch = await import('node-fetch');
    const response = await fetch.default(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  
  async function fetchData(url) {
    const fetch = await import('node-fetch');
    const response = await fetch.default(url);
    return response.json();
  }
  
  module.exports = {
    callBackendRoute,
  };
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
