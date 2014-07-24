'use strict';


function Renter(name, age, gender, cash, isEvicted, profession){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.cash = cash;
  this.isEvicted = false;
  this.profession = profession;
}

Renter.prototype.work = function(){
  var low, high;

  switch(this.profession){
    case 'Movie Star':
      low = 3000;
      high = 10000;
      break;
    case 'Coder':
      low = 1000;
      high = 7000;
      break;
    case 'Waiter':
      low = 50;
      high = 250;
      break;
    case 'Social Worker':
      low = 150;
      high = 750;
  }

  this.cash += randBetween(low, high);
};

function randBetween(low, high){
  return Math.random() * (high - low) + low;
}

Renter.prototype.payRent = function(amount){
  amount = parseInt(amount);

  if(this.cash === amount){
    this.isEvicted = true;
  }else{
    this.isEvicted = false;
    this.cash -= amount;
  }
};

Renter.prototype.party = function(){
  if(this.isEvicted){return;}

  var volume = Math.floor(Math.random() * 10) + 1;
  this.isEvicted = volume > 8;
};





module.exports = Renter;
