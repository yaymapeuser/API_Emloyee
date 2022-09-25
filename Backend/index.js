// Requiring module
var express = require('express');
var morgan = require('morgan');
var cors = require('cors');

// Creating express object
var app = express();
 
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3525);

// Middlewares
app.use(morgan('dev'));
// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(express.json());   //BodyParse
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/employees', require('./routes/employee.routes.ts'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});