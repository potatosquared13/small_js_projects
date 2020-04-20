/* 
 Parent Class: Media
 Sub-Classes: Book, Movie, CD

 Book {
   author: string [get]
   title: string [get]
   pages: number [get]
   isCheckedOut: bool (default: false) [get]
   ratings: array (default: empty array) [get]
   .getAverageRating()
   .toggleCheckOutStatus()
   .addRating()
 }

 Movie {
   director: string [get]
   title: string [get]
   runTime: number [get]
   isCheckedOut: bool (default: false) [get]
   ratings: array (default: empty array) [get]
   .getAverageRating()
   .toggleCheckOutStatus()
   .addRating()
 }

 CD {
   artist: string [get]
   title: string [get]
   isCheckedOut: bool (default: false) [get]
   ratings: array (default: empty array) [get]
   .getAverageRating()
   .toggleCheckOutStatus()
   .addRating()
 }
*/

class Media {
  constructor(title) {
    this._title = title; //string
    this._isCheckedOut = false; //bool
    this._ratings = []; //array
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(check) {
    this._isCheckedOut = check;
  }

  addRating(rating) {
    if (rating >= 1 && rating <= 5) this.ratings.push(rating);
    else console.log(`Rating of ${rating} is invalid. Please enter a rating between 1 and 5.`);
  }

  getAverageRating() {
    let arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
    let average = arrSum(this.ratings) / this.ratings.length;
    return average.toFixed(2);
  }

  toggleCheckoutStatus() {
    if (this.isCheckedOut) this.isCheckedOut = false;
    else if (!this.isCheckedOut) this.isCheckedOut = true;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs; //array
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  addSong(song) {
    this.songs.push(song);
  }

  shuffle() {
    //todo
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckoutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckoutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.addRating(6);
