const express= require('express');
const path= require('path');

const port=9003;
const db = require('./config/mongoose');
const Todo=require('./models/todolist');

const app=express();

app.use(express.static('assets'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err) {console.log("there is an erro");
    return;
}
    console.log('Yup! It is running',port);
});
