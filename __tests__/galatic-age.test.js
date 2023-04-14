import Age from './../src/js/galatic-age.js';

describe('Age', () => {

  test('should correctly create a Age object', () => {
    const galatic = new Age(10);
    expect(galatic.mercury).toEqual(2.4);
  });





});