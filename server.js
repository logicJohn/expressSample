

// jshint esversion: 6
const express = require('express');
const app = express();

const path = require("path");



const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/webpage'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/webpage/index.html'));
});

app.get('/bio', (req, res) => {
    res.sendFile(path.join(__dirname+'/webpage/pages/bio.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname+'/webpage/pages/projects.html'));
});

app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname+'/webpage/pages/resume.html'));
});



app.listen(port, () => {
    
    console.log(`Listening on http://localhost:${port}...`);

});