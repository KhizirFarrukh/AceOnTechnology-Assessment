const express = require('express');
const bodyParser = require('body-parser');

const readFileAsync = require('./FileModule');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
var users = [{"ID":1,"Name":"Khizir Farrukh Chawla", "Age":22}];

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send("Welcome to the Node.js server!");
});

app.get('/users', (req, res) => {
  res.send(JSON.stringify(users));
});

app.get('/users/:id', (req, res) => {
  res.send(JSON.stringify(users.find(user => user.ID === parseInt(req.params.id))));
});

app.post('/users', (req, res) => {
  console.log(req.body.user);
  const user = req.body.user;
  users.push(user);
  
  res.status(201);
  res.send(JSON.stringify(user));
});

app.put('/users/:id', (req, res) => {
  const index = users.findIndex((user => user.ID === parseInt(req.params.id)));

  if(index === -1) {
    res.status(404);
    res.send("User not found");
  } else {
    users[index] = req.body.user;

    res.status(200);
    res.send("User updated successfully");
  }
});

app.delete('/users/:id', (req, res) => {
  const index = users.findIndex((user => user.ID === parseInt(req.params.id)));

  if(index === -1) {
    res.status(404);
    res.send("User not found");
  } else {
    users.splice(index, 1);
    res.status(204);
  }
});