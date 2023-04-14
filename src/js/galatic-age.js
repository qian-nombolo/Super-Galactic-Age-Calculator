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

  getPastYears() {
    let earthYears = this.earth - this.pastB;
    let mercuryYears = Math.floor((earthYears / 0.24)*100) / 100;
    let venusYears = Math.floor((earthYears / 0.62)* 100) / 100;
    let marsYears = Math.floor((earthYears / 1.88)* 100) / 100;
    let jupiterYears = Math.floor((earthYears / 11.86)* 100) / 100;

    return {
      earthYears: earthYears,
      mercuryYears: mercuryYears,
      venusYears: venusYears,
      marsYears: marsYears,
      jupiterYears: jupiterYears
    };
  }  
  
  

}