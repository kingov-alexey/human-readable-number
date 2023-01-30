module.exports = function toReadable(number) {

    //создаю объект цифр с их прописным значением 
    const nameNumber = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    // сразу вывожу то что явно есть в объекте 
    if (nameNumber[number]) {
        return nameNumber[number];
    }

    // получаю разряды введенного числа 
    const raz = `${number}`.split("").map((n) => +n);

    // создаю результирующую переменную 
    let result = '';

    //вывожу только сотни
    if (raz.length === 3 && raz[1] === 0 && raz[2] === 0) {
        result = nameNumber[raz[0]] + ' hundred';
        return result;
    }

    // проверяю из соток десятки до 20
    const des = Number(raz[1] + '' + raz[2]);
    console.log(des);
    if (raz.length === 3 && des > 0 && des <= 20) {
        result = nameNumber[raz[0]] + ' hundred ' + nameNumber[des];
        return result;
    }

    //вывожу только сотни
    if (raz.length === 3 && raz[2] === 0) {
        result = nameNumber[raz[0]] + ' hundred '+ nameNumber[Number(raz[1] + '0')];
        return result;
    }

    //проверяю сотни с целыми десятками
    if (raz.length === 3 && des > 20) {
        result = nameNumber[raz[0]] + ' hundred ' + nameNumber[Number(raz[1] + '0')] + ' ' + nameNumber[raz[2]];
        return result;
    }

    // проверяю десятки
    if (raz.length === 2 && number > 20) {
        result = nameNumber[Number(raz[0] + '0')] + ' ' + nameNumber[raz[1]];
        return result;
    }
};