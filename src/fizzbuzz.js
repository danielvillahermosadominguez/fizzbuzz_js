export let FizzBuzz = function () { };

FizzBuzz.prototype.of = function (number) {
    if (number % 3 != 0 && number % 5 != 0) {
        return number.toString();
    }
    var result = "";

    if (number % 3 == 0) {
        result += "Fizz";
    }
    if (number % 5 == 0) {
        result += "Buzz";
    }

    return result;
}