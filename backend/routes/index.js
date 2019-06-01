var express = require('express');
var router = express.Router();

const documents = [
  {id: 1, document: 'sdfsdfadf'},
  {id: 2, document: 'sdfasdfdsaffasd'}
]


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('incoming request....', req.headers['content-type']);
  res.format({
  
    'text/html': function(){
      res.send('<b>hey html</b>');
    },
  
    'application/json': function(){
      res.send({ message: 'hey api' });
    },

    'text/plain': function(){
      res.send('hey plain text');
    },
  
    'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
    }
  });
});


router.get('/yo', function(req,res,next){
  console.log("In the api get request....", req.headers['content-type']);

  let x;
  const request = require('request');

  request('https://open.canada.ca/data/en/api/3/action/package_search?q=spending', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });


  // request({
  //   uri: 'https://open.canada.ca/data/en/api/3/action/package_search?q=spending',
  //   qs: {}, 
  //   function (error, response, body) {
  //     console.error('error:', error); // Print the error if one occurred
  //     res.send(body);
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // }});
});

module.exports = router;
