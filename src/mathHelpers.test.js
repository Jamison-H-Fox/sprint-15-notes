const { averageTestScore } = require("./mathHelpers.js");

describe("mathHelpers", () => {

    describe("averageTestScore", () => {

        it("should calculate the average for an array of numbers", () => {
            const scores = [2, 4, 6, 6, 2];

            const average = averageTestScore(scores);

            expect(average).toBe(4);
        });

        it.todo("should throw an error if the argument is not an array", () => {
            expect(() => { averageTestScore(5) }).toThrow();
            expect(() => { averageTestScore("five and two") }).toThrow();
            expect(() => { averageTestScore({ number: 5 }) }).toThrow();
            expect(() => { averageTestScore(undefined) }).toThrow();
            expect(() => { averageTestScore(null) }).toThrow();
            expect(() => { averageTestScore(NaN) }).toThrow();
        });

    });

})