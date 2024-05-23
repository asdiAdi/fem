import { binaryArraySearch } from './binary';

describe('Binary', () => {
  test('Returns the index of the search', () => {
    expect(binaryArraySearch(['halo', 'what', 'is', 'this'], 'is')).toEqual(2);
    expect(binaryArraySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  });

  test('Returns -1 if search is not existing on the array', () => {
    expect(binaryArraySearch([], 'is')).toEqual(-1);
    expect(binaryArraySearch(['ha', 'he', 'hi', 'ho', 'hu'], 'h')).toEqual(-1);
    expect(binaryArraySearch([], 'h')).toEqual(-1);
  });
});
