const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
        for(let i = 0; i < (expr.length / 10); i++) {
            result.push(expr.substring(i * 10, i * 10 + 10));
        }
            result = result.map(function (string) { 
        if (string  === '**********') 
        return ' ';
            string = string.replace (/00/ig,''); 
            string = string.replace (/10/ig,'.');
            string = string.replace (/11/ig,'-');
        return MORSE_TABLE[string];
        });
    return result.join(''); 
}

module.exports = {
    decode
}