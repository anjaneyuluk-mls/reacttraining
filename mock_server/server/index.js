const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3600;
app.use(express.static(__dirname + '/public'));

function getFileData(fileName, callback) {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (error, data) => {
    callback(JSON.parse(data));
  });
}

app.post('/signIn', (req, res) => {
  const data = req.body;
  const username = data.username;
  const pass = data.password;
  getFileData('users.json', (users) => {
    if (users[username] && pass === 'admin') {
      res.json({ message: 'sucess', token: 'authentationtoken', user: users[username] });
    } else {
      res.status = 'Authentication failure';
      res.statusCode = 401;
      res.statusMessage = 'username and password is wrong';
      res.json({ message: 'Authentication failure' });
    }
  });
});

app.get('/user', (req, res) => {
  res.json({
    name: 'Anji',
  });
});

app.get('/movies', (req, res) => {
  fs.readFile(path.join(__dirname, 'movies.json'), 'utf8', (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    setTimeout(() => {
      res.json(JSON.parse(data));
    }, 2000);
  });
});

app.post('/movie', (req, res) => {
  fs.readFile(path.join(__dirname, 'movies.json'), 'utf8', (error, data) => {
    const movies = JSON.parse(data);
    const newItem = { id: movies.items.length + 1, ...req.body };
    movies.items.push(newItem);
    fs.writeFile(path.join(__dirname, 'movies.json'), JSON.stringify(movies), 'utf8', () => {
      res.json({ status: 'success' });
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('I am listeneing at port', port);
});
