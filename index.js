import Cat from './cat_class.js';

console.log('Simple hello-world-like program. Altered the line');

const descriptor = { hello: 'world', first: 'second' };

const firstCat = new Cat('Leo');
firstCat.sayMeow();
const secondCat = new Cat('Begemot');
secondCat.sayMeow();