import { FizzBuzz } from "../src/fizzbuzz.js";

describe("BizzBuzz Suite Test", () => {
    var fizzbuzz;
    beforeEach(() => {
        fizzbuzz = new FizzBuzz();;
    });

    it("Should returns numbers", () => {
        expect(fizzbuzz.of(1)).toEqual("1");
        expect(fizzbuzz.of(2)).toEqual("2");
        expect(fizzbuzz.of(4)).toEqual("4");
        expect(fizzbuzz.of(7)).toEqual("7");
        expect(fizzbuzz.of(8)).toEqual("8");
    });

    it("Should returns Fizz", () => {
        expect(fizzbuzz.of(3)).toEqual("Fizz");
        expect(fizzbuzz.of(6)).toEqual("Fizz");
        expect(fizzbuzz.of(9)).toEqual("Fizz");
    });

    it("Should returns Buzz", () => {
        expect(fizzbuzz.of(5)).toEqual("Buzz");
        expect(fizzbuzz.of(10)).toEqual("Buzz");
    });

    it("Should returns FizBuzz", () => {
        expect(fizzbuzz.of(15)).toEqual("FizzBuzz");
    });
});