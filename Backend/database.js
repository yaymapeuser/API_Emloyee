var mongoose = require('mongoose');

var URI = 'mongodb://localhost/mean-crud-employees';

mongoose.connect(URI)
        .then(db => console.log('DB ist connected'))
        .catch(err => console.error(err));

module.exports = mongoose;