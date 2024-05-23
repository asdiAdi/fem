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
