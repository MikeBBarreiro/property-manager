'use strict';

function Apartment(unit){
  this.unit = unit;
  this.rooms = [];
  this.renters = [];
}

Apartment.prototype.area = function(){
  var totalArea = 0;
  for(var i = 0;i < this.rooms.length; i++){
    totalArea += this.rooms[i].area();
}
return totalArea;
};

Apartment.prototype.cost = function(){
  var totalCost = 0;
  for(var i = 0; i < this.rooms.length; i++){
    totalCost += this.rooms[i].cost();
}
return totalCost;
};

Apartment.prototype.bedrooms = function(){
  var totalRooms = 0;
  for(var i = 0; i < this.rooms.length; i++){
    if(this.rooms[i].name === 'Bedroom'){
      totalRooms++;
}
}
return totalRooms;
};

Apartment.prototype.isAvailable = function(){
  if(this.bedrooms !== true){
return false;
  }
};

Apartment.prototype.purgeEvicted = function(){
  for(var i = this.renters.length - 1; i >= 0; i--){
    if(this.renters[i]){
      this.renters.splice(i, 1);
    }
}
};

Apartment.prototype.payRent = function(){
  return this.renters*2100/3;
};

module.exports = Apartment;
