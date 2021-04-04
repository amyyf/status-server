const express = require('express');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.use('/v1', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
