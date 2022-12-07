describe("The sum of numbers in an array", () => {
  it("Returns the sum of numbers in an array", () => {
    assert.equal(sum([1, 2, 3]), 6);
  });

  it("Any value except the expected value", function () {
    assert.notEqual(sum([1, 2, 3]), 7);
  });
});

describe("The multiplication of numbers in an array", () => {
  it("Returns the multiplication of numbers in an array", () => {
    assert.equal(multiply([1, 2, 3, 4]), 24);
  });

  it("Any value except the expected value", function () {
    assert.notEqual(multiply([1, 2, 3]), 78);
  });
});

describe("The reverse of a string", () => {
  it("Returns reverse of a string", () => {
    assert.equal(reverse("pukar"), "rakup");
  });

  it("Any value except the expected value", function () {
    assert.notEqual(reverse("pukar"), "pukar");
  });
});

describe("Array of long words compared to the given integer", () => {
  it("Returns the longer words as an array compared to the given integer", () => {
    assert.deepEqual(
      filterLongWords(
        ["Humagain", "Subedi", "Shrestha", "Khanal", "Pukar", "Budathoki"],
        5
      ),
      ["Humagain", "Subedi", "Shrestha", "Khanal", "Budathoki"]
    );
  });

  it("Any value except the expected value", function () {
    assert.notDeepEqual(
      filterLongWords(
        ["Humagain", "Subedi", "Shrestha", "Khanal", "Pukar", "Budathoki"],
        5
      ),
      ["Humagain", "Shrestha", "Khanal", "Budathoki"]
    );
  });
});
