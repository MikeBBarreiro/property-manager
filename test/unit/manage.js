/* jshint expr:true */
/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Renter = require('../../app/models/manage');

describe('Renter', function(){
  describe('Constructor', function(){
    it('Should create resident', function(){
      var resident = new Renter ('Rick', 34, 'Male', 5000, false, 'Movie Star');
        expect(resident.name).to.equal('Rick');
        expect(resident.age).to.equal(34);
        expect(resident.gender).to.equal('Male');
        expect(resident.cash).to.equal(5000);
        expect(resident.isEvicted).to.equal(false);
        expect(resident.profession).to.equal('Movie Star');
      });
    });
  describe('#work', function(){
    it('Should  show Mocie Stars work', function(){
      var resident = new Renter ('Rick', 34, 'Male', 5000, false, 'Movie Star');
      resident.work();
      expect(resident.cash).to.be.within(8000, 15000);
    });
    it('Should show Coders work', function(){
      var coder = new Renter ('Michael', 20, 'Male', 1000, false, 'Coder');
      coder.work();
      expect(coder.cash).to.be.within(2000,8000);
    });
    it('Should show Waiters work', function(){
      var waiter = new Renter ('Rachel', 23, 'Female', 200, false, 'Waiter');
      waiter.work();
      expect(waiter.cash).to.be.within(250, 450);
    });
    it('Should show Social Workers work', function(){
      var socialWorker = new Renter ('Austin', 29, 'Male', 100, false, 'Social Worker');
      socialWorker.work();
      expect(socialWorker.cash).to.be.within(250, 850);
    });
  });

  describe('#payRent', function(){
    it('Should pay rent', function(){
      var coder = new Renter ('Michael', 20, 'Male', 1000, false, 'Coder');
      coder.cash = 2000;
      coder.payRent('750');
      expect(coder.cash).to.equal(1250);
      expect(coder.isEvicted).to.equal(false);
    });
  });
  describe('#party', function(){
    it('Should cause no disturbance from parties', function(){
      var coder = new Renter ('Michael', 20, 'Male', 1000, false, 'Coder');
        while(true){
          coder.party();

          if(!coder.isEvicted){
            break;
          }
    }
      expect(coder.isEvicted).to.equal(false);
    });
  });
});
