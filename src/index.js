module.exports = function toReadable(number) {
    let str = "";
    if (number > 99) {
        let hundred = Math.floor(number / 100);
        str = toNumber(hundred) + " hundred";
        if (number % 100 == 0) {
            return str;
        } else {
            number = number - hundred * 100;
        }
    }

    if (number < 100 && number > 19) {
        let dozens = Math.floor(number / 10);
        if (str === "") {
            str = toDozens(dozens);
        } else {
            str = str + " " + toDozens(dozens);
        }
        if (number % 10 == 0) {
            return str;
        } else {
            str = str + " " + toNumber(number-dozens*10);
        }
    }

    if (number < 20) {
        if (str === "") {
            str = toNumber(number);
        } else {
            str = str + " " + toNumber(number);
        }
    }
    return str;
}

function toDozens(number) {
    let rezult;
    switch (number) {
        case 2:
            rezult = "twenty";
            break;
        case 3:
            rezult = "thirty";
            break;
        case 4:
            rezult = "forty";
            break;
        case 5:
            rezult = "fifty";
            break;
        case 6:
            rezult = "sixty";
            break;
        case 7:
            rezult = "seventy";
            break;
        case 8:
            rezult = "eighty";
            break;
        case 9:
            rezult = "ninety";
            break;
    }
    return rezult;
}

function toNumber(number) {
    let rezult;
    switch (number) {
        case 0:
            rezult = "zero";
            break;
        case 1:
            rezult = "one";
            break;
        case 2:
            rezult = "two";
            break;
        case 3:
            rezult = "three";
            break;
        case 4:
            rezult = "four";
            break;
        case 5:
            rezult = "five";
            break;
        case 6:
            rezult = "six";
            break;
        case 7:
            rezult = "seven";
            break;
        case 8:
            rezult = "eight";
            break;
        case 9:
            rezult = "nine";
            break;
        case 10:
            rezult = "ten";
            break;
        case 11:
            rezult = "eleven";
            break;
        case 12:
            rezult = "twelve";
            break;
        case 13:
            rezult = "thirteen";
            break;
        case 14:
            rezult = "fourteen";
            break;
        case 15:
            rezult = "fifteen";
            break;
        case 16:
            rezult = "sixteen";
            break;
        case 17:
            rezult = "seventeen";
            break;
        case 18:
            rezult = "eighteen";
            break;
        case 19:
            rezult = "nineteen";
            break;
    }
    return rezult;
}
