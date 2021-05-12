'use strict';

console.log('Hello World');

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  getRandomNumberCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}
