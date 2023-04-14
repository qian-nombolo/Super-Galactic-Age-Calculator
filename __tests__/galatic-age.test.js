import Age from './../src/js/galatic-age.js';

let galatic;

  beforeEach(() => {
  galatic = new Age(56, 61, 43);
  });

describe('Age', () => {

  test('should correctly create a Age object with three ages', () => {
    expect(galatic.futureB).toEqual(61);
  });

  test('should correctly calculate how many years have passed on each planet since a past birthday', () => {
    expect(galatic.getPastYears()).toEqual({earthYears: 13, mercuryYears: 54.16, venusYears: 20.96, marsYears: 6.91, jupiterYears: 1.09});
  });

  test('should correctly calculate how many years to pass until a future birthday', () => {
    expect(galatic.getFutureYears()).toEqual({earthYears: 5, mercuryYears: 20.83, venusYears: 8.06, marsYears: 2.65, jupiterYears: 0.42});
  });

});