export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // The “species” of Car is itself.  Subclasses inherit this,
  // so cloneCar() will use the subclass constructor by default.
  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    // look up the constructor to use for cloning
    const C = this.constructor[Symbol.species];
    // create a fresh instance with the same underscore props
    return new C(this._brand, this._motor, this._color);
  }
}

