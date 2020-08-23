import Spigot from './spigot';

class Circle {
  private pi = 0;
  public radius = 0;

  constructor(radius: number) {
    this.radius = radius;
    this.calculatePi();
  }

  getDiameter() {
    return 2 * this.radius;
  }

  getPi() {
    return this.pi;
  }

  getCircumference() {
    return this.pi * this.getDiameter();
  }

  getArea() {
    return this.pi * this.radius * this.radius;
  }

  calculatePi() {
    // const pi = spigot.getPi();
    // this.pi = parseFloat(spigot.currentPi);
  }
}

export default Circle;
