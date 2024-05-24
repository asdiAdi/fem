import { bubble } from './bubble';

describe('Binary', () => {
  test('Sorts ascending and descending string', () => {
    expect(bubble(['be', 'bi', 'bu', 'bo', 'ba'])).toEqual([
      'ba',
      'be',
      'bi',
      'bo',
      'bu',
    ]);
    expect(bubble(['be', 'bi', 'bu', 'bo', 'ba'], 'dsc')).toEqual([
      'bu',
      'bo',
      'bi',
      'be',
      'ba',
    ]);
  });

  test('Sorts ascending and descending string', () => {
    expect(bubble([10, 5, 2, 7, 1])).toEqual([1, 2, 5, 7, 10]);
    expect(bubble([10, 5, 2, 7, 1], 'dsc')).toEqual([10, 7, 5, 2, 1]);
  });

  test('Edge cases', () => {
    expect(bubble([])).toEqual([]);
  });
});
