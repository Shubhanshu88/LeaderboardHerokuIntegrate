const express = require('express');
const key = require('../config/keys');
const User = [
  {
    login: 'Shubhanshu',
    year: 1,
    followers: 0,
    following: 2
  },
  {
    login: 'Kartik',
    year: 2,
    followers: 20,
    following: 9
  },
  {
    login: 'Avinash',
    year: 3,
    followers: 27,
    following: 12
  },
  {
    login: 'Karan',
    year: 4,
    followers: 37,
    following: 18
  }
]

let firstYear=[], secondYear=[], thirdYear=[], fourthYear=[];

const router = express.Router();

User.forEach(function(memberData) {
  if(memberData.year == 1)
    firstYear.push(memberData);
  else if(memberData.year == 2)
    secondYear.push(memberData);
  else if(memberData.year == 3)
    thirdYear.push(memberData);
  else if(memberData.year == 4)
    fourthYear.push(memberData);
});

router.get('/', (req, res) => {
  res.render('members.ejs', {
    yearOne: firstYear,
    yearTwo: secondYear,
    yearThree: thirdYear,
    yearFour: fourthYear,
    counter: [1,1,1,1],
    url: key.keys.rootUrl
  });
});

module.exports = router;