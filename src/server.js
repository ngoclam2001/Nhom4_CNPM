const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const data = require('./server/database/connection');
const PORT = 8080;
const route = require('./server/routes/index');
const methodOverride = require('method-override');


data.connect();

// Static middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(methodOverride('_method'));

//template engine
app.engine('hbs', engine({
    extname: '.hbs',
   
})); 

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('tiny'));

//Router
route(app);
app.listen(PORT, () => console.log(`Server running ${PORT}`));
