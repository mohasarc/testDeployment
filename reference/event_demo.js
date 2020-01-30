const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('eventyy', (data)=>console.log('Event Fired!', data))

// init event
myEmitter.emit('eventyy', 5);
myEmitter.emit('eventyy', 4);
myEmitter.emit('eventyy', 2);
myEmitter.emit('eventyy', "hahaha");
myEmitter.emit('eventyy', {name: "someone", age : 54});
myEmitter.emit('eventyy', [1, 2, 3, 4, 5, 6]);
