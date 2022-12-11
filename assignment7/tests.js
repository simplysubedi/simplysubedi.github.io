describe("Removing banned word from a string", () => {
    it("Returns the string after removing the word", () => {
        assert.equal(
            "This house is not nice!".filter("not"),
            "This house is nice!"
        );
    });
});

describe("Bubble sort in an array", () => {
    it("Returns the sorted array", () => {
        assert.deepEqual([6, 4, 0, 3, -2, 1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });
});

describe("Inheritance Exercise", () => {
    it("Returns the name and subject when the teacher is called", () => {
        assert.equal(teacher.teaches("WAP"), "Pukar is now teaching WAP");
    });
});