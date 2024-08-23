module.exports = function toReadable(number) {
    const numDict = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        15: 'fifteen',
        18: 'eighteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        80: 'eighty'
    };

    const numArr = String(number).split('');
    let resString = '';

    let hundreds = numDict[String(Math.floor(number / 100))] || '';
    resString += hundreds.length > 0 ? hundreds + ' hundred ' : '';

    let numRest = number % 100;
    let dozens;
    let ones;

    if (numDict[String(numRest)]) {
        resString += numDict[String(numRest)];
    } else {
        if (number === 0) {
            resString = "zero";
        } else if (numRest > 13 && numRest <= 19) {
            resString += numDict[String(number).slice(-1)] + 'teen';
        } else if (numRest > 0) {
            dozens = numDict[String(Math.floor(numRest / 10) * 10)] || numDict[String(Math.floor(numRest / 10))] + "ty";
            ones = numDict[String(numRest % 10)] || "";
            resString += `${dozens} ${ones}`;
        }
    }

    return resString.trim();
}