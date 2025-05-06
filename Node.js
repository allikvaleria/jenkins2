const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Minu lemmikmagustoit on jäätis!');
});

app.listen(PORT, () => {
  console.log(Server töötab pordil ${PORT});
});
