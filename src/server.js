const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static('./dist/fonetApp'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/fonetApp/index.html'));
});

app.listen(process.env.PORT || 8080);

app.use(function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
