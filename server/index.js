const express = require('express');
const ships = require('./ships');
const server = express();
const port = 4000;
const cors = require('cors');

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

server.use(cors());

server.get(['/api/ships', '/api/ships/:query'], (req, res) => {
  const query = req.params.query;

  if (!query) {
    return res.json(ships);
  }

  const matches = ships.filter((ship) =>
    ship.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(matches);
});
