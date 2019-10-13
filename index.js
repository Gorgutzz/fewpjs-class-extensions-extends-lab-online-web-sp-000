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
  get isValid(){
    if (this.countSides === 3){
      if ((this.sides[0] + this.sides[1]) > this.sides[2] &&
          (this.sides[1] + this.sides[2]) > this.sides[0] &&
          (this.sides[2] + this.sides[0]) > this.sides[1]) {
        return true;
      }
    }
    return false;
  }
}
