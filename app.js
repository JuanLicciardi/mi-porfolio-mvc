
const express = require('express');
const path = require ('path');

const port= 3030;

const app=express();

app.use(express.static('public'));
app.listen(port, ()=> console.log('Server running in http://localhost:'+port));

app.get('/', (req,res)=> res.sendFile(path.resolve(__dirname,'views','home.html')));
app.get('/about', (req,res)=> res.sendFile(path.resolve(__dirname,'views','about.html')));

