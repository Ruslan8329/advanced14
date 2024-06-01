String.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) {
    return this;
  }
  return this.slice(0, index) + this.slice(index + 1);
};

String.prototype.insert = function (index, sign) {
  if (index < 0) {
    return sign + this;
  }
  if (index >= this.length) {
    return this + sign;
  }
  return this.slice(0, index) + sign + this.slice(index);
};

String.prototype.trimSign = function () {
  return this.replace(/(.)\1+/g, "$1");
};

String.prototype.toggle = function () {
  return this.split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
};

String.prototype.counter = function (sign) {
  return this.split(sign).length - 1;
};

///////////////////

let string = "helloworld";
/////
console.log(string);
console.log(string.remove(2));
////////
console.log(string.insert(4, "A"));
//////
console.log(string.trimSign());
/////
console.log(string.toggle());
//////
console.log(string.counter("l"));
