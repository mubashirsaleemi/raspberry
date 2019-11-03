const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.static('dist/public'));
server.set('view engine', 'ejs');

server.use(cors())

server.get('*', (req, res) => {
    res.render('index', {});
});

server.listen(3000);
