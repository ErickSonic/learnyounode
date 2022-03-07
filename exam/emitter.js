const events = require("events")
const eventEmitter = new events.EventEmitter()

function createEmitter(onOpen, onClose){
  eventEmitter.on('opened', onOpen)
  eventEmitter.on('closed', onClose)
}
function opened(emitter){
  eventEmitter.emit('opened', emitter)
}
function closed(emitter){
  eventEmitter.emit('closed', emitter)
}
let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
)
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;