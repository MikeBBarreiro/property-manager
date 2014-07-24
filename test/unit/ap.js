/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var Apartment;

describe('Apartment', function(){
  before(function(done){
    connect('property-management-test', function(){
      Apartment = require('../../app/models/ap');
      done();
    });
  });
  describe('constructor', function(){
    it('Should creat an Apartment', function(){
      var u1 = new Apartment('U1', [], []);
    });
  });
});

