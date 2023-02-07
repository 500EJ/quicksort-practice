import { expect } from "chai";

import quicksort from "../quicksort.js";

describe("Better Sorting Algorithms", function () {
  let arr: number[];

  beforeEach(function () {
    arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
  });

  it("performs a out-of-place quicksort", function () {
    let newArr = quicksort(arr);

    expect(newArr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(arr).to.deep.equal([2, 4, 6, 8, 1, 3, 5, 7, 9]);
  });
});
