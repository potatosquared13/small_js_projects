const prompt = require('prompt-sync')({sigint: true});
const readLine = require('readLine');

const hole = 'O';
const hat = '^';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) { //array
    this._field = field;
  }
  
  get field() {
    return this._field;
  }

  print() {
    let arr = this.field;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].join(''));
    }
  }

  static userInput(input) {
    
  }
}

const myField = new Field([
  [pathCharacter, fieldCharacter, hole],
  [fieldCharacter, hole, fieldCharacter],
  [fieldCharacter, hat, fieldCharacter]
])

myField.print();
