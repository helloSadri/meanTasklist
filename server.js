var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();

var port = 8888;

//view Engine (!!!...doneJs // ejs & {{ http://expressjs.com/en/guide/using-template-engines.html }}...!!!.)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set Static Folder (Angular)
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/src')));


// Body Parser (!!!... https://www.npmjs.com/package/body-parser ...!!! )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//rout
app.use('/',index);
app.use('/api', tasks);



app.listen(port, function(){
	console.log('Server started on port '+port);
});