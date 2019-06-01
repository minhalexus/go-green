var R = require('r-script');

R("ex-sync.R")
  .data('hello world', 40)
  .call(function(err, d){
    if (err) throw err;
    console.log(d);
  });
