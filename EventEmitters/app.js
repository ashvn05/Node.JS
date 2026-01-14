const EventEmitter = require('events');


class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

myEmitter.on('foo', () => {
    console.log('foo event has been emitted');
});

myEmitter.on('fool', (x) => {
    console.log('Another listener for foo event');
    console.log(`Received argument: ${x}`);
});
myEmitter.once('call', (x) => {
    console.log('This will be logged only once for fool event');
    console.log(`Received argument: ${x}`);
});
myEmitter.emit('foo');
myEmitter.emit('fool', 'bar');
myEmitter.emit('call', 'baz');
myEmitter.emit('call', 'qux'); // This will not trigger the listener again

const secondEmitter = new Emitter();
secondEmitter.on('ping', () => {
    console.log('ping event received');
}  );

secondEmitter.emit('ping');