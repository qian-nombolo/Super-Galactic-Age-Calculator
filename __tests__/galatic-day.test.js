import Day from './../src/js/galatic-day.js';

describe('Day', () => {

  test('should correctly create a Day object with year, month and date', () => {
    const birthday = new Day(1993, 10, 01);
    expect(birthday.month).toEqual(10);
  });

});