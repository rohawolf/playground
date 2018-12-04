const express = require('express');
const os = require('os');

const app = express();

// app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
  const userName = os.userInfo().username;
  res.send({ username: userName });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
