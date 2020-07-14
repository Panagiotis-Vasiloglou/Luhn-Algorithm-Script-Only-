// All VALID credit card numbers
const valid1 = 4539677908016808;
const valid2 = 5535766768751439;
const valid3 = 371612019985236;
const valid4 = 6011144340682905;
const valid5 = 4539404967869666;

// All INVALID credit card numbers
const invalid1 = 4532778771091795;
const invalid2 = 5795593392134643;
const invalid3 = 375796084459914;
const invalid4 = 6011127961777935;
const invalid5 = 5382019772883854;

// Can be either valid or invalid
const mystery1 = 344801968305414;
const mystery2 = 5466100861620239;
const mystery3 = 6011377020962656203;
const mystery4 = 4929877169217093;
const mystery5 = 4913540463072523;

// An array of all the arrays above
const batch = [
    valid1,
    valid2,
    valid3,
    valid4,
    valid5,
    invalid1,
    invalid2,
    invalid3,
    invalid4,
    invalid5,
    mystery1,
    mystery2,
    mystery3,
    mystery4,
    mystery5,
];

let checkCard = (cardNumber) => {
    // Make input to array and then integers

    let numberToArray = cardNumber.toString().split("");

    for (let i = 0; i < numberToArray.length; i++) {
        numberToArray[i] = parseInt(numberToArray[i]);
    }

    // Condition to see if input is even or odd

    if (numberToArray.length % 2 === 0) {
        for (let i = 0; i <= numberToArray.length - 2; i += 2) {
            numberToArray[i] *= 2;

            if (numberToArray[i] > 9) {
                numberToArray[i] -= 9;
            }
        }

        // If input is odd
    } else if (numberToArray.length % 2 !== 0) {
        for (let i = 1; i <= numberToArray.length - 1; i += 2) {
            numberToArray[i] *= 2;

            if (numberToArray[i] > 9) {
                numberToArray[i] -= 9;
            }
        }
    }

    // Add all numbers

    let final = numberToArray.reduce((first, second) => first + second);

    if (final % 10 === 0) {
        return true;
    } else {
        return false;
    }
};

//console.log(checkCard());
