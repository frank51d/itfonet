const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.use((req, res, next) => {
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
app.get('/auth/login', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(process.env.PORT || 8080);