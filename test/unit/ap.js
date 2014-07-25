/* jshint expr:true */
/* global describe,before, beforeEach, it */

'use strict';

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var Room = require('../../app/models/room.js');
var Renter = require('../../app/models/manage.js');
var Apartment;

describe('Apartment', function(){
  before(function(done){
    connect('property-management-test', function(){
      Apartment = require('../../app/models/ap');
      done();
    });
  });
  beforeEach(function(done){
    global.mongodb.collection('units').remove(function(){
      done();
    });
  });


  describe('constructor', function(){
    it('Should creat an Apartment', function(){
      var apt = new Apartment('U1');

        expect(apt).to.be.instanceof(Apartment);
        expect(apt.unit).to.equal('U1');
        expect(apt.rooms.length).to.equal(0);
        expect(apt.renters.length).to.equal(0);
    });
  });
  describe('#bedrooms', function(){
    it('Should give the total number of bedrooms', function(){
      var apt = new Apartment('A1');
      apt.rooms = [
       new Room('Bedroom', 10, 15),
       new Room('Bedroom', 10,12),
       new Room('kitchen', 10, 10),
       new Room('Bathroom', 5, 10)
      ];
      var bedrooms = apt.bedrooms();
      expect(bedrooms).to.equal(2);
    });
  });
  describe('#isAvailable', function(){
    it('Should show if any rooms are available', function(){
      var apt = new Apartment('A1');

      apt.rooms = [
        new Room('Livingroom', 20,10),
        new Room('Bedroom', 10, 10),
        new Room('Bedroom', 10, 12),
        new Room('Bathroom', 5, 8)
      ];
    apt.renters = [
      new Renter('John', 46, 'Male', 2000, false, 'Store Manager')
      ];
    var available = apt.isAvailable();

      expect(available).to.be.false;
    });
  });
  describe('#purgeEvicted', function(){
    it('Should remove anyone who has been evicted', function(){
      var apt = new Apartment('A1');

      apt.rooms = [
      new Room('Livingroom', 20,10),
      new Room('Bedroom', 10, 10),
      new Room('Bedroom', 10, 12),
      new Room('Bathroom', 5, 8)
      ];
    apt.renters = [
      new Renter('John', 46, 'Male', 2000, false, 'Store Manager')
      ];
    apt.renters[0].isEvicted = true;
    apt.purgeEvicted();
    expect(apt.renters.length).to.equal(0);

    });
  });
  describe('#payRent', function(){
    it('Should pay rent', function(){
      var apt = new Apartment('A1');
      
      apt.rooms = [
        new Room('Bedroom',12, 10),
        new Room('Bedroom',12, 10),
        new Room('Bedroom',12, 10),
        new Room('kitchen',5, 7),
        new Room('Bathroom',5, 5)
      ];

      apt.renters = [
        new Renter('Michael',20, 'Male', 10500, false, 'Coder'),
        new Renter('Mitchell',21, 'Male', 102500, false, 'Coder'),
        new Renter('Lexie',19, 'Female', 12000, false, 'Student'),
        ];
    for(var i = 0; i < apt.renters.length; i++){
      apt.renters[i].cash = 700;
    }
    apt.payRent();
    expect(apt.renters.length).to.equal(3);
    });
    });
});
