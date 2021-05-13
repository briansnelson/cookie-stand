'use strict';

console.log('Hello World');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}
calcCookiesPerHour: function(){
  // calc cookies for all 14 hours
  // write a for loop that uses the length of the hours arary
  //  in that loop
  let custThisHour = this.getCustomersPerHour();
  let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
  this.cookiesPerHourArray.push(cookiesSoldThisHour);
  console.log('I am in the calcCookiesPerHour method', 'custThisHour: ', custThisHour, 'cookiesSoldThisHour: ', cookiesSoldThisHour);
},
render: function(){
  this.calcCookiesPerHour();
  console.log('this is the render method');

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}
calcCookiesPerHour: function(){
  // calc cookies for all 14 hours
  // write a for loop that uses the length of the hours arary
  //  in that loop
  let custThisHour = this.getCustomersPerHour();
  let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
  this.cookiesPerHourArray.push(cookiesSoldThisHour);
  console.log('I am in the calcCookiesPerHour method', 'custThisHour: ', custThisHour, 'cookiesSoldThisHour: ', cookiesSoldThisHour);
},
render: function(){
  this.calcCookiesPerHour();
  console.log('this is the render method');

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}

calcCookiesPerHour: function(){
  // calc cookies for all 14 hours
  // write a for loop that uses the length of the hours arary
  //  in that loop
  let custThisHour = this.getCustomersPerHour();
  let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
  this.cookiesPerHourArray.push(cookiesSoldThisHour);
  console.log('I am in the calcCookiesPerHour method', 'custThisHour: ', custThisHour, 'cookiesSoldThisHour: ', cookiesSoldThisHour);
},
render: function(){
  this.calcCookiesPerHour();
  console.log('this is the render method');
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}
calcCookiesPerHour: function(){
  // calc cookies for all 14 hours
  // write a for loop that uses the length of the hours arary
  //  in that loop
  let custThisHour = this.getCustomersPerHour();
  let cookiesSoldThisHour = Math.ceil(custThisHour * this.avg);
  this.cookiesPerHourArray.push(cookiesSoldThisHour);
  console.log('I am in the calcCookiesPerHour method', 'custThisHour: ', custThisHour, 'cookiesSoldThisHour: ', cookiesSoldThisHour);
},
render: function(){
  this.calcCookiesPerHour();
  console.log('this is the render method');

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  cookiesPerHourArray: [],
  getCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
  }
}

