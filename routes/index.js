var express = require('express');
var csv = require("fast-csv");
var router = express.Router();
var fs = require('fs');

var mongoose = require('mongoose');

var Product  = mongoose.model('Products');

var csvfile = __dirname + "/../public/files/products.csv";
var stream = fs.createReadStream(csvfile);


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Import CSV using NodeJS' });

}).get('/import', function(req, res, next) {

    var  products  = []
    var csvStream = csv()
        .on("data", function(data){
         
         var item = new Product({
              orderate: data[0] ,
              region: data[1]   ,
              name: data[2],
              product: data[3],
              quantity:data[4],
              unitcost:data[5],
              total:data[6],

         });
         
          item.save(function(error){
            console.log(item);
              if(error){
                   throw error;
              }
          }); 

    }).on("end", function(){

    });
  
    stream.pipe(csvStream);
    res.json({success : "Data imported successfully. Now click on fetch data", status : 200});
     
  }).get('/fetchdata', function(req, res, next) {
    
    Product.find({}, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
  
});
module.exports = router;
