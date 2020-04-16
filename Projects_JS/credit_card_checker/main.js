// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const invalid6 = [9, 5, 3, 9 ,6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, invalid6]

const companies = ['Amex', 'Visa', 'Mastercard', 'Discover'];

// Add your functions below:
const validateCred = cardNumber => {
  let doubleNumber = cardNumber.slice(0, cardNumber.length - 1);//take out last digit
  let lastDigit = cardNumber.slice(cardNumber.length - 1, 1); //last digit
  doubleNumber.reverse(); //reverse digits

  //doubles the even number indexes of the array
  for (let i = 0; i < doubleNumber.length; i++) {
    if (i % 2 === 0) { 
      doubleNumber[i] *= 2;
      if (doubleNumber[i] > 9) doubleNumber[i] -= 9;
    }
  }

  doubleNumber.push(lastDigit[0]); //adds last digit

  let total = 0;
  for (let j in doubleNumber) { //sum of all numbers
    total += doubleNumber[j];
  }

  return total % 10 === 0;
};


//Find Invalid Cards
const findInvalidCards = cardList => {
  const invalidNumbers = [];
  
  for (let i = 0; i < cardList.length; i++) {
    let currentCard = cardList[i]; //gets a card number

    if (!validateCred(currentCard)) {
      invalidNumbers.push(currentCard); //if it's invalid, add to list
    }
  }
  return invalidNumbers;
}


//Companies
const idInvalidCardCompanies = invalidNumbers => {
  let cardCompanies = [];

  for (let i = 0; i < invalidNumbers.length; i++) {
    let firstDigit = invalidNumbers[i].slice(0, 1)
    // console.log(firstDigit);
    if (firstDigit[0] === 3) {
      if (cardCompanies.indexOf('Amex') == -1) cardCompanies.push('Amex');  //if not in array, add the company
    } else if (firstDigit[0] === 4) {
      if (cardCompanies.indexOf('Visa') == -1) { cardCompanies.push('Visa'); }
    } else if (firstDigit[0] === 5) {
      if (cardCompanies.indexOf('Mastercard') == -1) cardCompanies.push('Mastercard');
    } else if (firstDigit[0] === 6) {
      if (cardCompanies.indexOf('Discover') == -1) cardCompanies.push('Discover');
    } else {
      console.log('Card number ' + invalidNumbers[i].join('') + ' is invalid!');  //li
    }
  }

  return cardCompanies;
}

console.log(idInvalidCardCompanies(batch));