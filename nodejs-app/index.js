const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('ta da it works!! this is the recent image !! ');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
