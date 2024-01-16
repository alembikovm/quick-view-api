
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', (req, res) => {
  const file = req.files.image;
  const username = req.body.username;
  const imagePath = path.join(__dirname, 'public', 'images', 'users', username, file.name);

  file.mv(imagePath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('File uploaded!');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
