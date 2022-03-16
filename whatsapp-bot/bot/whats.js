const qrcode = require('qrcode-terminal');
const dat = require('../readDB')

const { Client } = require('whatsapp-web.js');
const client = new Client();



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

console.log(dat);

/*client.on('message', message => {
	console.log(message.body);
});*/

client.on('message', message => {
	if(message) {
		client.sendMessage(message.from, 'Hola');
	}
});

module.exports = client;