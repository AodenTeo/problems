//This is the basic code required to set-up a server with express
const trigonometry = require('./problems.js');
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
    console.log(trigonometry);
    for (let x = 0; x < req.params.number; x++ ) {
        index = Math.floor(Math.random()*trigonometry.length);
        console.log(trigonometry[index])
        let string = trigonometry[index]();
        let questionNumber = 'Question ' + (x+1);
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
    let response = {problems: problems, solutions: solutions}
    res.send(response);
})