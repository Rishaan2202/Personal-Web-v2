const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('Received a GET request at /');
});

app.post('/', (req, res) => {
  res.send('Data received!');
  console.log('Received a POST request at /');

  const processData = async function processData() {
    await console.log('Processing data...');
  }

  processData();

  if (processData()) {
    res.send('The Data has been processed successfully!');
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
