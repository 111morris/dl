const choice = document.querySelector("#choice");
const inputNumber = document.querySelector('#inputNumber');
const result = document.querySelector("#results");
const convert = document.querySelector("#convert");

let binaryOutput, octalOutput, hexOutput, decimalOutput;

convert.addEventListener('click', () => handleConversion(choice.value, inputNumber.value));

function handleConversion(choice, input) {
 switch (choice) {
  case 'decimal':

   decimalOutput = input;
   binaryOutput = convertDecimalToBase(input, 2);
   octalOutput = convertDecimalToBase(input, 8);
   hexOutput = convertDecimalToBase(input, 16);
   break;

  case 'binary':
   if (!/^[01]+$/.test(inputNumber.value)) {
    // binaryOutput = 'undefined';
     console.log(binaryOutput);
   } else {
    decimalOutput = convertToDecimal(input, 2);
    binaryOutput = input;
    octalOutput = convertDecimalToBase(decimalOutput, 8);
    hexOutput = convertDecimalToBase(decimalOutput, 16);
   }
   break;

  case 'octal':
   decimalOutput = convertToDecimal(input, 8);
   octalOutput = input;
   binaryOutput = convertDecimalToBase(decimalOutput, 2);
   hexOutput = convertDecimalToBase(decimalOutput, 16);
   break;

  case 'hexadecimal':
   decimalOutput = convertToDecimal(input, 16);
   hexOutput = input;
   binaryOutput = convertDecimalToBase(decimalOutput, 2);
   octalOutput = convertDecimalToBase(decimalOutput, 8);
   break;

  default:
   console.error('Invalid selection. Please check the option values.');
   return;
 }

 updateUI(binaryOutput, octalOutput, hexOutput, decimalOutput);
}

function convertDecimalToBase(number, base) {
 return parseInt(number, 10).toString(base).toUpperCase();
}

function convertToDecimal(number, base) {
 return parseInt(number, base).toString(10);
}

function updateUI(binary, octal, hex, decimal) {
 if (binary === 'undefined') {
  result.innerHTML = "Please input a valid binary number"
 } else if (octal === 'undefined') {
  result.innerHTML = "please input a valid octal number"
 } else if (hex === 'undefined') {
  result.innerHTML = "please input a valid hexadecimal number"
 } else if (decimal === 'undefined') {
  result.innerHTML = "please input a valid decimal number"
 } else {
  result.innerHTML = `
     <p><strong>Binary:</strong> ${binary}</p>
     <p><strong>Octal:</strong> ${octal}</p>
     <p><strong>Hexadecimal:</strong> ${hex}</p>
     <p><strong>Decimal:</strong> ${decimal}</p>
   `;
 }
 }
