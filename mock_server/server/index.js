const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3600;
app.use(express.static(__dirname + '/public'));

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }),
);

const uploadImage = (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.image;

  uploadPath = __dirname + '/public/' + sampleFile.name;

  sampleFile.mv(uploadPath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('File uploaded to ' + uploadPath);
  });
};

app.post('/upload', function (req, res) {});

function getFileData(fileName, callback) {
  fs.readFile(path.join(__dirname, fileName), 'utf8', (error, data) => {
    callback(JSON.parse(data));
  });
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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

// app.use((req, res, n) => {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ error: 'No credentials sent!' });
//   }
//   n();
// });

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
    const { name, image, hit, release_date } = req.body;
    console.log(name, image, req.files);
    const newItem = {
      id: movies.items.length + 1,
      name,
      hit,
      release_date,
      image: req.files?.image?.name,
    };
    movies.items.push(newItem);
    fs.writeFile(path.join(__dirname, 'movies.json'), JSON.stringify(movies), 'utf8', () => {
      if (req.files) {
        uploadImage(req, res);
      } else {
        res.json({ status: 'success' });
      }
    });
  });
});

app.listen(port, () => {
  console.log('I am listeneing at port', port);
});
