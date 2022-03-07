const { opened } = require("./emitter")

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
)
opened(emitter);
closed(emitter);