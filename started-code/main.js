"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log("Word is : " + word);
        console.log("UPPER CASE : " + word.toUpperCase());
        console.log("lower case : " + word.toLowerCase());
        console.log("Char at : " + word.charAt(2));
        console.log("concat : " + word.concat(" superb"));
        console.log("Slice : " + word.slice(1, -2));
        console.log("Length : " + word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log("Split : " + sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] == "a" || str[i] == "e" || str[i] == "i"
                || str[i] == "o" || str[i] == "u" || str[i] == "A"
                || str[i] == "E" || str[i] == "I" || str[i] == "O"
                || str[i] == "U") {
                cnt++;
            }
        }
        console.log(cnt + " vowel is in the " + str);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var check = true;
        if (num < 2)
            console.log(num + " is not prime number.");
        else
            for (var i = 2; i < Math.sqrt(num); i++) {
                if (num % i === 0) {
                    console.log(num + " is not prime number.");
                    check = false;
                    break;
                }
            }
        if (check)
            console.log(num + " is not prime number.");
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 === 1)
            console.log(num + " is magic number.");
        else
            console.log(num + " is not magic number.");
    };
    return NumbersManipulations;
}());
var obj = new StringManipulations();
obj.print("Ravi");
obj.printWithSpace("FACEPrep ProGrad");
obj.findVowel("Information Technology");
var numobj = new NumbersManipulations();
numobj.findPrime(512);
numobj.findMagic(50311);
