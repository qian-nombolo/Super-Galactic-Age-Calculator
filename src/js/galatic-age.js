export default class Age {
  constructor(earth, futureB, pastB) {
    this.earth = earth;
    this.futureB = futureB;
    this.pastB = pastB;
    this.mercury = earth * 0.24;
    this.venus = earth * 0.62;
    this.mars = earth * 1.88;
    this.jupiter = earth * 11.86;
  }

  // checkType() {
  //   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
  //     return "not a triangle";
  //   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
  //     return "scalene triangle";
  //   }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
  //     return "equilateral triangle";
  //   } else {
  //     return "isosceles triangle";
  //   }
  // }  
  
  

}