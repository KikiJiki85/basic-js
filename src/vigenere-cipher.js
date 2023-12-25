const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(forward = true) {
    this.forward = forward;
  }

  encrypt(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let cipherStr = '';
    let keyIdx = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[A-Z]/)) {
        const charCode = ((char.charCodeAt(0) - 65) + (key[keyIdx % key.length].charCodeAt(0) - 65)) % 26 + 65;
        cipherStr += String.fromCharCode(charCode);
        keyIdx++;
      } else cipherStr += char;
    }

    return this.forward ? cipherStr : cipherStr.split('').reverse().join('');
  }

  decrypt(cipherStr, key) {
    if (typeof cipherStr !== 'string' || typeof key !== 'string') throw new Error('Incorrect arguments!');

    cipherStr = cipherStr.toUpperCase();
    key = key.toUpperCase();
    let message = '';
    let keyIdx = 0;

    for (let j = 0; j < cipherStr.length; j++) {
      const char = cipherStr[j];
      if (char.match(/[A-Z]/)) {
        let charCode = ((char.charCodeAt(0) - 65) - (key[keyIdx % key.length].charCodeAt(0) - 65) + 26) % 26 + 65;
        message += String.fromCharCode(charCode);
        keyIdx++;
      } else message += char;
    }

    return this.forward ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
