import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    const car = new Car();
    Object.assign(car, this);
    return car;
  }
}
