var express = require('express');
var morgan = require('morgan');
var app = express();
 
const { mongoose } = require('./database');


// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());   //BodyParse

//Routes
app.use(require('./routes/employee.routes'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});