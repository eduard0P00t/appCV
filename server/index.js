const app = require('./app');
const config = require('./config');
const path = require('path');
const express = require('express');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'));
});

app.get('/cvform', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'cvform.html'));
});
  app.listen(app.get('port'), () =>
  
  
    {
    console.log(`Server listening on port ${config.app.port}`);
  });

