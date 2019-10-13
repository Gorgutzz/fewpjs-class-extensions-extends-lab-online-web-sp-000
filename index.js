// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
      let answer = 0
      for (var int of this.sides) {
          answer += int
      }
      return answer
  }
}
