import Age from './../src/js/galatic-age.js';

describe('Age', () => {

  test('should correctly create a Age object with three ages', () => {
    const galatic = new Age(10, 15, 5);
    expect(galatic.futureB).toEqual(15);
  });

  test('should correctly calculate how many years have passed on each planet since a past birthday', () => {
    const galatic = new Age(10, 20, 5);
    expect(galatic.earth.getPastYears()).toEqual(5);
  });




});