import { linearArraySearch } from './linear';
import { binaryArraySearch } from './binary';

describe('Linear', () => {
  test('Returns the index of the search', () => {
    expect(linearArraySearch(['halo', 'what', 'is', 'this'], 'is')).toEqual(2);
    expect(linearArraySearch([1, 2, 3, 4, 5], 5)).toEqual(4);

    // return the very first instance of equal data
    expect(
      linearArraySearch(['ja', 'ja', 'je', 'je', 'ja', 'ja', 'je'], 'je')
    ).toEqual(2);
  });

  test('Returns -1 if search is not existing on the array', () => {
    expect(linearArraySearch([], 'is')).toEqual(-1);
    expect(linearArraySearch(['ha', 'he', 'hi', 'ho', 'hu'], 'h')).toEqual(-1);
    expect(binaryArraySearch([], 'h')).toEqual(-1);
  });
});
