const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');


const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var models = require('./models');

models.sequelize.sync().then(function(){
    Console.log('Nice! Database looks nice ');
}).catch(function(err){
    console.log("somwthing went wrong with the database update!");
});
require('./routes')(app);
app.get('*',(req,res) => res.status(200).send({
    message: 'welcome to the beginning of nothingness.',
}));

// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;