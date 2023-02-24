// Binary to base 10
// 0b1010
// 0b0011
const binaryToDecimal = binary => parseInt(binary, 10);

console.log(binaryToDecimal(0b1010)); //10
console.log(binaryToDecimal(0b0011)); // 3

// Binary to hexadecimal
// 0b1010
// 0b0011
const binaryToHexadecimal = binary => parseInt(binary, 16);

console.log(binaryToHexadecimal(0b1010)); // 16
console.log(binaryToHexadecimal(0b0011)); // 3

// Hexadecimal to base 10
// 0xa1
// 0xff
const hexadecimalToBase10 = hex => parseInt(hex, 10);

console.log(hexadecimalToBase10(0xa1)); // 161
console.log(hexadecimalToBase10(0xff)); // 255

// Hexadecimal to binary
// 0xa1
// 0xff
const hexadecimalToBinary = hex => '0b' + ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);

console.log(hexadecimalToBinary(0xa1)); // 0b01100001
console.log(hexadecimalToBinary(0xff)); // 0b01010101

// Base 10 to binary
// 8
// 24
// 255
const base10ToBinary = decimal => '0b' + ("00000000" + (parseInt(decimal, 10)).toString(2)).substr(-8);

console.log(base10ToBinary(8)); // 0b00001000
console.log(base10ToBinary(24)); // 0b00011000
console.log(base10ToBinary(255)); // 0b11111111

// Base 10 to hexadecimal
// 8
// 24
// 255
const base10ToHexadecimal = decimal => decimal.toString(16);

console.log(base10ToHexadecimal(8)); // 8
console.log(base10ToHexadecimal(24)); // 18
console.log(base10ToHexadecimal(255)); // ff

// Base 10 to ASCII
// 65
// 66
// 97
// 98
const base10ToAscii = decimal => String.fromCharCode(decimal);
console.log(base10ToAscii(65)); // A
console.log(base10ToAscii(66)); // B
console.log(base10ToAscii(97)); // a
console.log(base10ToAscii(98)); // b

// Hexadecimal to ASCII
// 0x41
// 0x42
// 0x61
// 0x62
const hexadecimalToAscii = hex => String.fromCharCode(hex);
console.log(hexadecimalToAscii(0x41)); // A
console.log(hexadecimalToAscii(0x42)); // B
console.log(hexadecimalToAscii(0x61)); // a
console.log(hexadecimalToAscii(0x62)); // b

// Binary to ASCII
// 0b01000001
// 0b01000010
// 0b01100001
// 0b01100010
const binaryToAscii = binary => String.fromCharCode(binary);
console.log(binaryToAscii(0b01000001)); // A
console.log(binaryToAscii(0b01000010)); // B
console.log(binaryToAscii(0b01100001)); // a
console.log(binaryToAscii(0b01100010)); // b
