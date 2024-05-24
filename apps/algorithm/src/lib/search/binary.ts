/**
 * O(log(n))
 * @desc Returns the index of the searched value
 * @param {Array<string> | Array<number>} arr Array of sorted number | string Data
 * @param {number | string} search Data of type number | string to search
 * @returns  The index of the searched value or -1 if it does not exist on the array
 */
export function binaryArraySearch(arr: string[], search: string): number;
export function binaryArraySearch(arr: number[], search: number): number;
export function binaryArraySearch(
  arr: string[] | number[],
  search: string | number
): number {
  if (arr.length < 1) return -1;

  let lo = 0;
  let hi = arr.length - 1;
  let mid = Math.floor(hi / 2);

  while (hi - lo >= 0) {
    if (arr[mid] === search) {
      return mid;
    } else {
      if (search > arr[mid]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }

      mid = Math.floor((hi - lo) / 2) + lo;
    }
  }

  return -1;
}
