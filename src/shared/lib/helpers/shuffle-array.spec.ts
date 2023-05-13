import { describe, it } from 'vitest';
import { shuffleArray } from './shuffle-array';

describe('shuffleArray', () => {
  let arr: Array<number>;

  beforeEach(() => {
    arr = [1, 2, 3, 4, 5];
  });

  it('should return a copy of array with the same length', () => {
    const shuffledArray = shuffleArray(arr);

    expect(shuffledArray.length === arr.length);
  });

  it('should contain the same elements in both arrays', () => {
    const map = new Map();

    arr.forEach((el) => {
      map.set(el, true);
    });

    const shuffledArray = shuffleArray(arr);

    const isEveryItemInShuffledArray = shuffledArray.every((el) => map.has(el));

    expect(isEveryItemInShuffledArray).toBeTruthy();
  });

  it('should contain elements in sorted order', () => {
    let isShuffled = false;

    const shuffledArray = shuffleArray(arr);

    for (let i = 0; i < shuffledArray.length; i++) {
      if (shuffledArray[i] !== arr[i]) {
        isShuffled = true;
        break;
      }
    }

    expect(isShuffled).toBeTruthy();
  });
});
