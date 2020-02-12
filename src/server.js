const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

app.use(express.static('./dist/fonetApp'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/fonetApp/index.html'));
});


app.listen(process.env.PORT || 8080);

app.use(cors());