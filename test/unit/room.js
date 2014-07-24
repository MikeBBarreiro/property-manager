/* jshint expr:true */
/*global describe, it */

'use strict';

var expect = require('chai').expect;
var Room = require('../../app/models/room');

describe('Room', function() {
    describe('constructor', function(){
      it('Should create a room', function(){
        var a1 = new Room('A1', 25, 15);
        expect(a1.name).to.equal('A1');
        expect(a1.width).to.equal(25);
        expect(a1.length).to.equal(15);
      });
    });
    describe('#area', function(){
      it('Should compute the area of the room', function(){
        var lr = new Room('Livingroom', 25, 15);
        expect(lr.area()).to.equal(375);
      });
    });
    describe('#cost', function(){
      it('Should compute the cost of the room', function(){
        var lr = new Room('Livingroom', 25, 15);

        expect(lr.cost()).to.equal(1875);
      });
    });
  });
