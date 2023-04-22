export default class Age {
  constructor(earth, futureB, pastB) {
    this.earth = earth;
    this.futureB = futureB;
    this.pastB = pastB;
  }

  getGalaticYears() {
    let earthYears = this.earth;
    let mercuryYears = earthYears * 0.24;
    let venusYears = earthYears * 0.62;
    let marsYears = earthYears * 1.88;
    let jupiterYears = earthYears * 11.86;

    return {
      mercuryYears: mercuryYears,
      venusYears: venusYears,
      marsYears: marsYears,
      jupiterYears: jupiterYears
    };
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
  
  getFutureYears() {
    let earthYears = this.futureB - this.earth;
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

  getFutureDays() {
    let earthDays = this.futureB - this.earth;
    let mercuryDays = Math.floor((earthDays / 0.24)*100) / 100;
    let venusDays= Math.floor((earthDays / 0.62)* 100) / 100;
    let marsDays = Math.floor((earthDays / 1.88)* 100) / 100;
    let jupiterDays = Math.floor((earthDays / 11.86)* 100) / 100;

    return {
      earthDays: earthDays,
      mercuryDays: mercuryDays,
      venusDays: venusDays,
      marsDays: marsDays,
      jupiterDays: jupiterDays
    };
  }

}