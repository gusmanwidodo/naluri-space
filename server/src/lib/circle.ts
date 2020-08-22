class Circle {
  private pi = 0;
  public radius = 0;

  constructor(radius: number, piDigit: number = 100) {
    this.radius = radius;
    this.calculatePi(piDigit);
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

  calculatePi(digit: number) {
    this.pi = 3.14;
  }
}

export default Circle;
