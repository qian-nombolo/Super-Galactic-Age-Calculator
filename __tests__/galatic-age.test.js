import Age from './../src/js/galatic-age.js';

describe('Age', () => {

  test('should correctly create a Age object with three ages', () => {
    const galatic = new Age(10, 15, 5);
    expect(galatic.futureB).toEqual(15);
  });

  test('should correctly calculate how many years have passed on each planet since a past birthday', () => {
    const galatic = new Age(56, 61, 43);
    expect(galatic.getPastYears()).toEqual({earthYears: 13, mercuryYears: 54.16, venusYears: 20.96, marsYears: 6.91, jupiterYears: 1.09});
  });




});