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

class Triangle extends Polygon{
  get isValid() {
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    if (this.countSides === 3) {
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        return true;
      }
    }
    return false;
  }
}
