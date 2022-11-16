import aes from "aes-js";
import { cesarCipher } from './cesarCipher.js';

const textCiphered = cesarCipher("TextMustBe16Byte");
console.log('Texto na cifra de cesar: ',   textCiphered)

const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
const initializationVector = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];

const aesInstance = new aes.ModeOfOperation.cbc(key,initializationVector);

const textAsBytes = aes.utils.utf8.toBytes(textCiphered);
const encryptedBytes = aesInstance.encrypt(textAsBytes);

const textEncrypted = aes.utils.hex.fromBytes(encryptedBytes);
console.log('Valor encriptado utilizando CBC : ' , textEncrypted);

//Decriptando os dados

const aesCfb = new aes.ModeOfOperation.cbc(key, initializationVector);

const decryptedBytes = aesCfb.decrypt(encryptedBytes);
const decryptedText = aes.utils.utf8.fromBytes(decryptedBytes);

console.log('Valor decryptado em texto: ' , decryptedText);