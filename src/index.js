const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const dictionary = {
    "10": '.',
    "11": '-'
}

function decode(expr) {
    return expr.split(/\*+/gm)
        .map(word => decodeWord(word))
        .join(' ');
}

function decodeWord(word) {
    let length = word.length % 10;
    length = length === 0 ? 0 : 10 - length;
    word = word.padStart(word.length + length, '0');
    return word.match(/[10]{10}/g)
        .map(letter => MORSE_TABLE[decodeLetter(letter).join('')])
        .join('');
}

function decodeLetter(letter) {
    return letter.match(/[10]{2}/g)
        .map(comb => dictionary[comb])
        .filter(comb => comb !== undefined);
}

module.exports = {
    decode
}