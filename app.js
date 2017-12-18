const express = require('express');
const path = require('path');
// const SerialPort = require('serialport');

// routing
const index = require('./routes/index');

const app = express();

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

// // capture data emitted from Arduino
// let message = '';

// // create port to listen to Arduino
// const port = new SerialPort('/dev/tty.wchusbserial1410');

// // start listening to and collecting data being emitted from Arduino
// console.log('Starting up serial host...');
// port.on('data', (data) => {
//     message = data.toString();
//     //console.log('Data:', message);
// });

// // handle get for site root
// app.get('/', (req, res) => {
//     res.send({ message });
// })


// localhost http server for site interface
app.listen('8080', () => {
    console.log('Server started on port 8080');
});
