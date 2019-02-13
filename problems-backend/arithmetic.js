const form = require('./generalFunctions');

function bell() {
    let bellTime1;
    let bellTime2;
    let  bellTime3;
    let commonality = form.rand(5);
    do {
        bellTime1 = commonality*(form.rand(20) + 3);
        bellTime2 = commonality*(form.rand(20) + 3);
        bellTime3 = form.rand(60) + 10;
    } while (bellTime1 === bellTime2 || bellTime1 == bellTime3 || bellTime2 === bellTime3);
    const time = form.rand(10);
    const day = form.rand(20);
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October', 'November', 'December'][Math.floor(Math.random()*11 + 1)];
    let string = `Three wolves howl at regular intervals of ${bellTime1} minuites, ${bellTime2} minuites, and ${bellTime3} minuites respectively. Given that they howl together at ${time} on the ${day}th of ${month}, how long in minuites will it be before they howl together again.`;
    let answerString = `Taking the lowest commen multiple of ${bellTime1}, ${bellTime2}, and ${bellTime3} we get ${form.lcm([bellTime1, bellTime2, bellTime3])}. Thus, the next time that they howl together wil be in ${form.lcm([bellTime1, bellTime2, bellTime3])} minuites`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

bell();



