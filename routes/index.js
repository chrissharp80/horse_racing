const express = require('express');
const router = express.Router();
const SerialPort = require('serialport');

// capture data emitted from Arduino
let message = 'hello';

// create port to listen to Arduino
const port = new SerialPort('/dev/tty.wchusbserial1410');

// start listening to and collecting data being emitted from Arduino
console.log('Starting up serial host...');
port.on('data', (data) => {
    message = data.toString();
    //console.log('Data:', message);
});

// get home page
router.get('/', (req, res, next) => {
    res.render('index', {
		title: 'Home',
		message: message
    });
});

module.exports = router;