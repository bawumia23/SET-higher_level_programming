#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (typeof w === 'number' && w > 0 && Number.isInteger(w) &&
        typeof h === 'number' && h > 0 && Number.isInteger(h)) {
      this.width = w;
      this.height = h;
    }
  }
}

module.exports = Rectangle;
