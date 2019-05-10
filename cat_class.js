exports default class Cat {
  constructor(name) {
    this.name = name;
  }
  sayMeow() {
    return `{this.name} is meowing`;
  }
}
