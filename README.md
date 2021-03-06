property-manager
================

###Badges 

[![Coverage Status](https://img.shields.io/coveralls/MikeBBarreiro/property-manager.svg)](https://coveralls.io/r/MikeBBarreiro/property-manager?branch=master)
[![Build Status](https://travis-ci.org/MikeBBarreiro/property-manager.svg?branch=master)](https://travis-ci.org/MikeBBarreiro/property-manager)


### About
```
Property Manager is a Node.js application to be used at an apartment complex. It allows the owner 
to more easily manage the operations of the apartment complex.
```
### Models
```
Rooms
name
length
width
#area
#cost
#isBedroom
```

```
Renter
name
age
gender
profession
_isEvicted
_cash
#work
#payRent
#party
```

```
Apartment
unit
renters
rooms
#area
#cost
#revenue
#isAvailable
#purge
#collectRent
#save
.collection [-]
.find
.findById
.deleteById
.area
.cost
- Mocha
- MongoDB
```
### Running Tests
```bash
$ npm install
$ npm test
```

### Contributors
- [Michael Barreiro](https://www.linkedin.com/profile/view?id=221590218&trk=nav_responsive_tab_profile_pic)

### License
[MIT](LICENSE)
