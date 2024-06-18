function createTuple<T1, T2, T3>(a: T1, b: T2, c: T3): [T1, T2, T3] {
  return [a, b, c];
}

const myTuple = createTuple("hello", 143, false);
