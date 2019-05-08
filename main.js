console.log('Simple hello-world-like program. Altered the line');

const descriptor = { hello: 'world', first: 'second' };
class Cat {
  constructor(name) {
    this.name = name;
  }
  sayMeow() {
    return 'meow';
  }
}

const firstCat = new Cat('Leo');
firstCat.sayMeow();
