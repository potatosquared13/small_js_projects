const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);

    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } else if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }

    if (number >= start && number < end) return true;
    else return false;
  },
  words(word) {
    return word.split(" ");
  },
  pad(string, length) {
    if (string.length >= length) return string;
    else {
      let totalPadding = length - string.length;
      let beginPadding = Math.floor(totalPadding / 2);
      let endPadding = Math.ceil(totalPadding / 2);

      return " ".repeat(beginPadding) + string + " ".repeat(endPadding);
    }
  },
  has(obj, key) {
    if (key in obj) return true;
    else return false;
  },
  invert(obj) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      newObj[obj[key]] = key; //value = key (SWAP)
    });

    return newObj;
  },
  findKey(object, predicate) {
    for(key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) return key;
    }

    return undefined;
  },
  drop(arr, number) {
    if (!number) return arr.slice(1);
    else {
      return arr.slice(number);
    }
  },
  dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    });

    let dropArray = this.drop(arr, dropNumber);
    return dropArray;
  },
  chunk(arr, size) {
    let newArr = [];
    if (!size) size = 1;
    for (let i = 0; i < arr.length; i += size) {
      newArr.unshift(arr.slice(i, i + size));
    }
    return newArr;
  }
};

// Do not write or modify code below this line.
module.exports = _;
