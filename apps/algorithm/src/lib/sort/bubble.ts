/**
 * O(n^2)
 * @desc Sorts the array
 * @param {Array<string> | Array<number>} arr Array of sorted number | string Data
 * @param dir Data of type number | string to search
 * @returns  The index of the searched value or -1 if it does not exist on the array
 */
export function bubble(arr: string[], dir?: 'asc' | 'dsc'): string[];
export function bubble(arr: number[], dir?: 'asc' | 'dsc'): number[];
export function bubble(
  arr: string[] | number[],
  dir: 'asc' | 'dsc' = 'asc'
): string[] | number[] {
  const _arr = [...arr];

  for (let i = 0; i < _arr.length; i++) {
    for (let j = i + 1; j < _arr.length; j++) {
      if (dir === 'asc' ? _arr[i] > _arr[j] : _arr[j] > _arr[i]) {
        const tmp = _arr[j];
        _arr[j] = _arr[i];
        _arr[i] = tmp;
      }
    }
  }

  return _arr as string[] | number[];
}
