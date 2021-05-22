'use strict';

console.log('Hello World');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

const cookiesTable = document.querySelector('table');
let allStores = [];

// Here I am going to try my constructor method. I think each attribute should be the same attributes of the previous formulas.
function Stores(name, min, max, avg){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHourArray = [];
  this.dailyTotal = 0;
  this.render();
  allStores.push(this);
}
Stores.prototype.getCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
};
Stores.prototype.calcCookiesPerHour = function(){
  for (let i = 0; i <hours.length; i++) {
    let hourlyCustomer = this.getCustomersPerHour();
    let hourlyCookiesSold = Math.ceil(hourlyCustomer * this.avg);
    this.cookiesPerHourArray.push(hourlyCookiesSold);
    this.dailyTotal += hourlyCookiesSold;
    console.log(hourlyCookiesSold);
  }
};
Stores.prototype.render = function(){
  this.calcCookiesPerHour();
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (let i = 0; i < hours.length; i++){
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHourArray[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.dailyTotal;
  tableRow.appendChild(tableData);
  cookiesTable.appendChild(tableRow);
};

function tableHeader(){
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++){
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily Location Totals';
  tr.appendChild(th);

  cookiesTable.appendChild(thead);
}
tableHeader();

let seattleStore = new Stores('Seattle', 23, 65, 6.3);
// seattleStore.render();

let tokyoStore = new Stores('Tokyo', 3, 24, 1.2);
// tokyoStore.render();

let dubiaStore = new Stores('Dubai', 11, 38, 3.7);
// dubiaStore.render();

let parisStore = new Stores('Paris', 20, 38, 2.3);
// parisStore.render();

let limaStore = new Stores('Lima', 2, 16, 4.6);
// limaStore.render(); 



