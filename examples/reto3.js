const EventEmitter = require('events');
const uuid = require('uuid');

const fs = require('fs');
const path = require('path');
const msgData = []

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
    msgData.push({ id: uuid.v4(), msg })
    fs.writeFile(
      path.join(__dirname, '/', 'msg2.json'),
        JSON.stringify(msgData),
      err=> {
        if (err)
        console.log(err);
        
      else {
        console.log("File written succesfully");
      };
      })
  }
}

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');

logger.log('Hi');
logger.log('Hello');
logger.log('Cheo');
logger.log('Web');


