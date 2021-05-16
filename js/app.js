'use strict';

console.log('Hello World');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList  = document.getElementById('lima-list');
const mainContainer = document.getElementById('container');
const cookiesTable = document.querySelector('table');
let allStores = [];
console.log(mainContainer);

// console.log(mainContainer);

// Here I am going to try my constructor method. I think each attribute should be the same attributes of the previous formulas.
function Stores(name, min, max, avg, cookiesPerHourArray){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHourArray = [];
  this.dailyTotal = 0;
  allStores.push(this);
}
Stores.prototype.getCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
},
Stores.prototype.calcCookiesPerHour = function(){
  for (let i = 0; i <hours.length; i++) {
    let hourlyCustomer = this.getCustomersPerHour();
    let hourlyCookiesSold = Math.ceil(hourlyCustomer * this.avg);
    this.cookiesPerHourArray.push(hourlyCookiesSold);
    this.dailyTotal += hourlyCookiesSold;
    console.log(hourlyCookiesSold);
  }
},
Stores.prototype.render = function() {
  seattle.calcCookiesPerHour();
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
    seattleList.appendChild(li);
  }
}
let seattleStore = new Stores('Seattle', 23, 65, 6.3,);
seattleStore.render;

let tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
tokyoStore.render;

let dubiaStore = new Stores('Dubai', 11, 38, 3.7);
dubiaStore.render;

let parisStore = new Stores('Paris', 20, 38, 2.3);
parisStore.render;

let limaStore = new Stores('Lima', 2, 16, 4.6);
limaStore.render; 



let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    for (let i = 0; i <hours.length; i++) {
      let hourlyCustomer = this.getCustomersPerHour();
      let hourlyCookiesSold = Math.ceil(hourlyCustomer * this.avg);
      this.cookiesPerHourArray.push(hourlyCookiesSold);
      this.dailyTotal += hourlyCookiesSold;
      console.log(hourlyCookiesSold);
    }
  },
  render: function() {
    seattle.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      seattleList.appendChild(li);
    }
  },
};
seattle.render();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    for (let i = 0; i <hours.length; i++) {
      let hourlyCustomer = this.getCustomersPerHour();
      let hourlyCookiesSold = Math.ceil(hourlyCustomer * this.avg);
      this.cookiesPerHourArray.push(hourlyCookiesSold);
      this.dailyTotal += hourlyCookiesSold;
      console.log(hourlyCookiesSold);
    }
  },
  render: function() {
    tokyo.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      tokyoList.appendChild(li);
    }
  },
};
tokyo.render();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    for (let i = 0; i <hours.length; i++) {
      let hourlyCustomer = this.getCustomersPerHour();
      let hourlyCookiesSold = Math.ceil(hourlyCustomer * this.avg);
      this.cookiesPerHourArray.push(hourlyCookiesSold);
      this.dailyTotal += hourlyCookiesSold;
      console.log(hourlyCookiesSold);
    }
  },
  render: function() {
    dubai.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      dubaiList.appendChild(li);
    }
  },
};
dubai.render();

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    for (let i = 0; i <hours.length; i++) {
      let hourlyCustomer = this.getCustomersPerHour();
      let hourlyCookiesSold = Math.ceil(hourlyCustomer * this.avg);
      this.cookiesPerHourArray.push(hourlyCookiesSold);
      this.dailyTotal += hourlyCookiesSold;
      console.log(hourlyCookiesSold);
    }
  },
  render: function() {
    paris.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parisList.appendChild(li);
    }
  },
};
paris.render();

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  },
  calcCookiesPerHour: function(){
    for (let i = 0; i <hours.length; i++) {
      let hourlyCustomer = this.getCustomersPerHour();
      let hourlyCookiesSold = Math.ceil(hourlyCustomer * this.avg);
      this.cookiesPerHourArray.push(hourlyCookiesSold);
      this.dailyTotal += hourlyCookiesSold;
      console.log(hourlyCookiesSold);
    }
  },
  render: function() {
    lima.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      limaList.appendChild(li);
    }
  },
};
lima.render();
