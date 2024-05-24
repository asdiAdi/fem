// Array
export type Arr<T> = Array<T>;

// LinkedList
export type LinkedList<T> = {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  value: T;
  next?: LinkedList<T>;
  prev?: LinkedList<T>;
};

// Queue - FIFO System, first in first out
