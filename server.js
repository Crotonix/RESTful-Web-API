const express = require('express'),
       path = require('path'),
       bodyParser = require('body-parser'),
       cors = require('cors'),
       mongoose = require('mongoose'),
	   config = require('./config/DB'),
	   personModelRoutes = require ('./routes/personmodel.route');

const app = express();
	
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
	() => {console.log('Database is connected') },
	err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 4000;
app.use('/personmodels', personModelRoutes);

const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});