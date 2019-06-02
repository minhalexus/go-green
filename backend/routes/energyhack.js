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

router.post('/', async (req, res) => {
  console.log(req.body);

  var total = parseInt(req.body.oil) + parseInt(req.body.natural_gas) + parseInt(req.body.coal) + parseInt(req.body.solar) + parseInt(req.body.hydro);
  var pct_oil = parseInt(req.body.oil)/total;
  var pct_natural_gas = parseInt(req.body.natural_gas)/total;
  var pct_coal = parseInt(req.body.coal)/total;
  var pct_hydro = parseInt(req.body.hydro)/total;
  var pct_solar = parseInt(req.body.solar)/total;

  var start_year = parseInt(req.body.start_year) || 2020
  var end_year = parseInt(req.body.end_year) || 2051

  console.log(pct_solar);


  console.log(total);


  console.log('Starting the script...');

  let {PythonShell} = require('python-shell');


  let options = {
    mode: 'json',
  //   pythonPath: 'path/to/python',
  //   pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '/home/minhal/MeanStack/uwEnergyHacks/backend',
    args: [pct_natural_gas, pct_coal, pct_oil, pct_hydro, pct_solar, start_year, end_year]
  };

  PythonShell.run('my_script.py', options, function (err, results) {
    if (err) throw err;

    console.log('results: %j', results);
    console.log('finished');
    res.send({ result: results });
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
