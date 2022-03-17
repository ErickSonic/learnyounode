const qrcode = require('qrcode-terminal');
const readDB = require('../readDB')

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


/*client.on('message', message => {
	console.log(message.body);
});*/

readDB.catch(console.error).then(val => {
	client.on('ready', () => {
    console.log('Client is ready!');
		val.forEach(birthdayBoy => {
			console.log(birthdayBoy.name + " " + birthdayBoy.phone);
			const number = "521" + birthdayBoy.phone;
			//console.log(number)
			const chatId = number + "@c.us";
			client.sendMessage(chatId, 'Feliz cumpleaños ' + birthdayBoy.name + '!');
		});
	});
});

module.exports = client;