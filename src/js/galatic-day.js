export default class Day {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getDays() {
    const birthDay = new Date(this.year, this.month, this.day);
    const birthDay2 = new Date(this.year +1, this.month, this.day);
    let earthDays = (birthDay2.getTime() - birthDay.getTime()) / (1000 * 3600 * 24)
    let mercuryDays = Math.floor((earthDays / 0.24)*100) / 100;
    let venusDays = Math.floor((earthDays / 0.62)* 100) / 100;
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