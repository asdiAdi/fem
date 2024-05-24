/**
 * O(n)
 * @desc Returns the index of the searched value
 * @template T
 * @param {Array<T>} arr Array of Data
 * @param {T} search Data to search
 * @returns  The index of the searched value or -1 if it does not exist on the array
 */
export function linearArraySearch<T>(arr: Array<T>, search: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return i;
    }
  }

  return -1;
}

/**
 * O(√N)
 * @desc Returns the index of the searched value
 * @template T
 * @param {Array<T>} arr Array of Data
 * @param {T} search Data to search
 * @returns  The index of the searched value or -1 if it does not exist on the array
 */
export function sqrtLinearArraySearch<T>(arr: Array<T>, search: T): number {
  if (arr.length < 1) return -1;
  const sqrt = Math.floor(Math.sqrt(arr.length));

  let lowerLimit = 0;
  let upperLimit = sqrt;

  for (let i = 0; i < sqrt + 1; i++) {
    if (lowerLimit >= arr.length) return -1;
    for (lowerLimit; lowerLimit < upperLimit; lowerLimit++) {
      if (arr[lowerLimit] === search) {
        return lowerLimit;
      }
    }
    upperLimit += sqrt;
  }

  return -1;
}
