import {stringManipulationService,NumberManipulationService} from "./main-service";

class StringManipulations implements stringManipulationService{
    print(word: String): void {
        console.log("Word is : " + word);
        console.log("UPPER CASE : " + word.toUpperCase());
        console.log("lower case : " + word.toLowerCase());
        console.log("Char at : " + word.charAt(2));
        console.log("concat : " + word.concat(" superb"));
        console.log("Slice : " + word.slice(1, -2));
        console.log("Length : " + word.length);
    }

    printWithSpace(sentence: string): void{
        console.log("Split : " + sentence.split("").join(" "));
    }

    findVowel(str: string): void {
        let cnt: number = 0;
        for (let i: number = 0; i < str.length; i++){
            if (str[i] == "a" || str[i] == "e" || str[i] == "i"
                || str[i] == "o" || str[i] == "u" || str[i] == "A"
                || str[i] == "E" || str[i] == "I" || str[i] == "O"
                || str[i] == "U")
            {
                cnt++;
            }
        }
        console.log(cnt + " vowel is in the " + str);
    }
}

class NumbersManipulations implements NumberManipulationService{
    findPrime(num: number): void{
        let check: boolean = true;
        if (num < 2)
            console.log(num + " is not prime number.");
        else
            for (let i: number = 2; i < Math.sqrt(num); i++){
                if (num % i === 0) {
                    console.log(num + " is not prime number.");
                    check = false;
                    break;
                }   
            }
        if (check)
            console.log(num + " is not prime number.");  
    }

    findMagic(num: number): void{
        if (num % 9 === 1)
            console.log(num + " is magic number.");
        else
            console.log(num + " is not magic number.");
    }
}

let obj = new StringManipulations();
obj.print("Ravi");
obj.printWithSpace("FACEPrep ProGrad");
obj.findVowel("Information Technology");

let numobj = new NumbersManipulations();
numobj.findPrime(512);
numobj.findMagic(50311);