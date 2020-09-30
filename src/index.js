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
}

function decode(expr) {
    const encodedLetters = expr.match(/.{10}/g)

    const decodedLetters = encodedLetters.reduce((accumulator, encodedLetter) => {
        if (encodedLetter === '**********') {
            return accumulator + ' '
        }

        const encodedLetterSymbols = encodedLetter.match(/.{2}/g)

        const morseEncodedLetter = encodedLetterSymbols.reduce((accumulator, currentValue) => {
            switch (currentValue) {
                case '10':
                    return accumulator + '.'
                case '11':
                    return accumulator + '-'
                default:
                    return accumulator
            }
        }, '')

        const decodedLetter = MORSE_TABLE[morseEncodedLetter]

        return accumulator + decodedLetter
    }, '')

    return decodedLetters
}

module.exports = {
    decode,
}
