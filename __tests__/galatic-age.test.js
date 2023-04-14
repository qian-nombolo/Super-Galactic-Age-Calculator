import Age from './../src/js/galatic-age.js';

describe('Age', () => {

  test('should correctly create a Age object with three ages', () => {
    const galatic = new Age(10, 15, 5);
    expect(galatic.futureB).toEqual(15);
  });




});