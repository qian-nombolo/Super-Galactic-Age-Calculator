import Age from './../src/js/galatic-age.js';

describe('Age', () => {

  test('should correctly create a Age object with three ages', () => {
    const galatic = new Age(10, 15, 5);
    expect(galatic.futureB).toEqual(15);
  });

  test('should correctly calculate how many years have passed on each planet since a past birthday', () => {
    const galatic = new Age(10, 20, 5);
    expect(galatic.getPastYears()).toEqual({earthYears: 5, mercuryYears: '2.08', venusYears: '0.81', marsYears: '0.27', jupiterYears: '0.04'});
  });




});