'use strict';
/* jshint expr:true */
/* global describe, it */
var expect = require('chai').expect;
var Room   = require('../../app/models/room');
/* var Apartment = require('../../app/models/manage.js');*/

describe('Room', function(){
  describe('Constructor', function(){
    it('Should create a room', function(){
      var room = new Room('Livingroom', 20, 15);

      expect(room).to.be.instanceof(Room);
      expect(room.name).to.equal('Livingroom');
      expect(room.length).to.equal(15);
      expect(room.width).to.equal(20);
    });
  });
    describe('#area', function(){
      it('Should give the area of all rooms', function(){
        var apt = new Room('Livingroom', 25, 15);
          expect(apt.area()).to.equal(375);
      });
    });
  describe('#cost', function(){
    it('should give the total cost of all rooms', function(){
      var apt = new Room('Bedroom', 20, 10);
      expect(apt.cost()).to.equal(1000);
    });
  });
});
