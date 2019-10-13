// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
      let sum = 0
      for (var int of this.sides) {
          sum += int
      }
      return sum
  }
}

class Triangle extends Polygon {

}
