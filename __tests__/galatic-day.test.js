import Day from './../src/js/galatic-day.js';

describe('Day', () => {

  test('should correctly calculate how many days to pass until a future birthday', () => {
    expect(galatic.getFutureDays().mercuryDays).toEqual(87.6);
  });


});