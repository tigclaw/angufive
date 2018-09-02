const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');

const app = express();


// const api = require('./routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:4200',
}));

// app.use(express.static(path.join(__dirname, '../dist')));

const SAMPLE_DATA = [
  {
    id: 1,
    first_name: 'Allie',
    last_name: 'Treacher',
    email: 'atreacher0@phoca.cz',
    gender: 'Male',
    ip_address: '225.33.152.245',
  },
  {
    id: 2,
    first_name: 'Mirelle',
    last_name: 'Beynon',
    email: 'mbeynon1@tripod.com',
    gender: 'Female',
    ip_address: '109.13.18.47',
  },
  {
    id: 3,
    first_name: 'Johan',
    last_name: 'Lennox',
    email: 'jlennox2@utexas.edu',
    gender: 'Male',
    ip_address: '138.108.141.244',
  },
  {
    id: 4,
    first_name: 'Myrwyn',
    last_name: 'Inglish',
    email: 'minglish3@cnet.com',
    gender: 'Male',
    ip_address: '199.63.114.235',
  },
  {
    id: 5,
    first_name: 'De witt',
    last_name: 'Croote',
    email: 'dcroote4@uol.com.br',
    gender: 'Male',
    ip_address: '212.0.2.217',
  },
  {
    id: 6,
    first_name: 'Neile',
    last_name: 'Korn',
    email: 'nkorn5@blogspot.com',
    gender: 'Female',
    ip_address: '62.69.22.140',
  },
  {
    id: 7,
    first_name: 'Chip',
    last_name: 'McEnery',
    email: 'cmcenery6@nih.gov',
    gender: 'Male',
    ip_address: '152.209.198.130',
  },
  {
    id: 8,
    first_name: 'Cordey',
    last_name: 'Adaway',
    email: 'cadaway7@pinterest.com',
    gender: 'Female',
    ip_address: '187.134.68.80',
  },
  {
    id: 9,
    first_name: 'Shannen',
    last_name: 'Poletto',
    email: 'spoletto8@loc.gov',
    gender: 'Female',
    ip_address: '107.122.192.36',
  },
  {
    id: 10,
    first_name: 'Arv',
    last_name: 'Petcher',
    email: 'apetcher9@engadget.com',
    gender: 'Male',
    ip_address: '53.185.144.207',
  },
];

app.use('/api/users', (req, res) => {
  res.send(SAMPLE_DATA);
});

// Send all other requests to the angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server running on localhost', port);
});
