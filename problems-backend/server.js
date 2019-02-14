//This is the basic code required to set-up a server with express
const trigonometry = require('./problems.js');
const algebra = require('./algebra.js');
const geometry = require('./geometry.js');
const arithmetic = require('./arithmetic.js');
const express = require('express');
const app = express();
const port = 8080;
let problems = [];
let solutions = [];
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));


//This is the data stored in the server

//Makes the server static
app.use(express.static('public'));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
//Here we can define our routes

app.post('/trigonometry/:number', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    for (let x = 0; x < req.params.number; x++ ) {
        index = Math.floor(Math.random()*trigonometry.length);
        let string = trigonometry[index]();
        let questionNumber = 'Question ';
        problems.push({ text: questionNumber, style: 'header'});
        problems.push({text: ' '});
        problems.push(string[0]);
        problems.push('  ');
        solutions.push({ text: questionNumber, style: 'header'});
        solutions.push({text: ' '});
        solutions.push(string[1]);
        solutions.push('  ');
   }
});
app.post('/algebra/:number', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    for (let x = 0; x < req.params.number; x++ ) {
        index = Math.floor(Math.random()*algebra.length);
        let string = algebra[index]();
        let questionNumber = 'Question ';
        problems.push({ text: questionNumber, style: 'header'});
        problems.push({text: ' '});
        problems.push(string[0]);
        problems.push('  ');
        solutions.push({ text: questionNumber, style: 'header'});
        solutions.push({text: ' '});
        solutions.push(string[1]);
        solutions.push('  ');
   }
});
app.post('/geometry/:number', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    for (let x = 0; x < req.params.number; x++ ) {
        index = Math.floor(Math.random()*geometry.length);
        let string = geometry[index]();
        let questionNumber = 'Question ';
        problems.push({ text: questionNumber, style: 'header'});
        problems.push({text: ' '});
        problems.push(string[0]);
        problems.push('  ');
        solutions.push({ text: questionNumber, style: 'header'});
        solutions.push({text: ' '});
        solutions.push(string[1]);
        solutions.push('  ');
   }
});
app.post('/arithmetic/:number', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    for (let x = 0; x < req.params.number; x++ ) {
        index = Math.floor(Math.random()*arithmetic.length);
        let string = arithmetic[index]();
        let questionNumber = 'Question ';
        problems.push({ text: questionNumber, style: 'header'});
        problems.push({text: ' '});
        problems.push(string[0]);
        problems.push('  ');
        solutions.push({ text: questionNumber, style: 'header'});
        solutions.push({text: ' '});
        solutions.push(string[1]);
        solutions.push('  ');
   }
});


app.get('/problems', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    for (let x = 0; x < problems.length; x+=4) {
        //problems[x] = 'Question ' + (x/4 + 1);
        problems[x] = { text: 'Question ' + (x/4 + 1), style: 'header'};
    }
    for (let x = 0; x < solutions.length; x+=4) {
        //solutions[x] = 'Question ' + (x/4 + 1);
        solutions[x] = { text: 'Question ' + (x/4 + 1), style: 'header'};
    }
    problems.unshift({ text: 'Problems', style: 'center'});
    solutions.unshift({ text: 'Solutions', style: 'center'});
    let response = {problems: problems, solutions: solutions}
    res.send(response);
    problems = [];
    solutions = [];
})