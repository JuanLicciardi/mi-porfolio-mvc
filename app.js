
const express = require('express');

const port= 3000;

const app=express();
const mainRoutes=require('./routes/main');

app.listen(port, ()=> console.log('Server running in http://localhost:'+port));

app.use('/',mainRoutes);
app.use(express.static('public'));


