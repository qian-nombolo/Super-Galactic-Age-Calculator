import Day from './../src/js/galatic-day.js';

describe('Day', () => {

  test('should correctly create a Day object with year, month and date', () => {
    const birthday = new Day(1993, 10, 1);
    expect(birthday.month).toEqual(10);
  });

  test('should correctly calculate how many days to pass until a future birthday', () => {
    const birthday = new Day(1993, 10, 1);
    expect(birthday.getDays().earthDays).toEqual(365);
  });

});