const express = require('express');
require('dotenv').config();
require('./helpers/init_mongodb');

const app = express();
app.listen(process.env.port || 4000, function() {
    console.log('Now listenning for requests on: http://localhost:4000');
    
}
);
