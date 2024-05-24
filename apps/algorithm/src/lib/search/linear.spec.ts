import { linearArraySearch, sqrtLinearArraySearch } from './linear';

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
    expect(linearArraySearch([], 'h')).toEqual(-1);
  });
});

describe('Square Root Linear', () => {
  test('Returns the index of the search', () => {
    expect(sqrtLinearArraySearch(['halo', 'what', 'is', 'this'], 'is')).toEqual(
      2
    );
    expect(sqrtLinearArraySearch([1, 2, 3, 4, 5], 5)).toEqual(4);

    // return the very first instance of equal data
    expect(
      sqrtLinearArraySearch(['ja', 'ja', 'je', 'je', 'ja', 'ja', 'je'], 'je')
    ).toEqual(2);
  });

  test('Returns -1 if search is not existing on the array', () => {
    expect(sqrtLinearArraySearch([], 'is')).toEqual(-1);
    expect(sqrtLinearArraySearch(['ha', 'he', 'hi', 'ho', 'hu'], 'h')).toEqual(
      -1
    );
    expect(sqrtLinearArraySearch([], 'h')).toEqual(-1);
  });
});
