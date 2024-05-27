// Array
export type Arr<T> = Array<T>;

// LinkedList
export type LinkedList<T> = {
  get length(): number;
  insertAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  removeAt(index: number): T | undefined;
  // more
  value: T;
  next?: LinkedList<T>;
  prev?: LinkedList<T>;
};

// Constraints make things fast

// Queue
// - FIFO System, first in first out
// - it uses a Data Structure and implements an algorithm on top of it.
// - insertion algorithm
// - most common, specific implementation of LinkedList
// - singly LinkedList
