const EventEmitter = require("events");
const { listenerCount } = require("process");

class Emitter extends EventEmitter{}

const emit = new Emitter();
let x = 1;
let y = 0.1;
emit.on("foo", () => {
    console.log("events occurred");


})

emit.on("bar", (y) => {
    console.log("different events occurred" + y);

    emit.emit("baz", y);

})

emit.once("baz", (x) => {
    console.log("baz events occurred" + x++);
    console.log("baz events occurred1"+ x++);
    console.log("baz events occurred2"+ x++);
    console.log("baz events occurred3"+ x++);


})
emit.emit("foo");
console.log("test");
//emit.emit("baz");
emit.emit("bar", y);


listenerCount