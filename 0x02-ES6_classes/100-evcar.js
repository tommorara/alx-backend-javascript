import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * For privacy reasons, cloning an EVCar yields a plain Car.
   */
  cloneCar() {
    // Only copy the Car‐relevant properties
    return new Car(this._brand, this._motor, this._color);
  }
}

