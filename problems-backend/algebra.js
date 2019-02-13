const form = require('./generalFunctions');
function genQuadEq() {
    let a;
    let b;
    let c;
    do {
        a = form.rand(10);
        b = form.rand(10);        
        c = form.rand(10);
    } while (b*b - 4*a*c < 0);
    let string = `Find all real roots of ${a}x^2 + ${b}x + ${c}.`;
    let answerString = `Using the quadratic formuala, we determine that the roots of the equation are ${form.round(form.quad(a,b,c)[0], 3)} and ${form.round(form.quad(a,b,c)[1], 3)}`;   
    console.log(string);
    console.log(answerString);
    return [string, answerString];
    
}

function genUnsolvableQuadEq() {
    let a;
    let b;
    let c;
    do {
        a = form.rand(10);
        b = form.rand(10);
        c = form.rand(10);
    } while (b*b - 4*a*c >= 0);
    let string = `Find all real roots of ${a}x^2 + ${b}x + ${c}.`;
    let answerString = `Since the determinant = ${b}*${b} - 4*${a}*${c} = ${b*b - 4*a*c} < 0, there are no real roots`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function simEq() {
    let a1 = form.rand(10);
    let b1 = form.rand(10);
    let c1 = form.rand(10);
    let a2 = form.rand(10);
    let b2 = form.rand(10);
    let c2 = form.rand(10);
    string = `Solve the following system of simultaneous equations: ${a1}x + ${b1}y = ${c1} and ${a2}x + ${b2}y = ${c2}`;
    answerString = `Substituting x = (${c1} - ${b1}y)/${a1} into the second equation, we obtain y = ${form.round(form.sim(a1,b1,c1,a2,b2,c2)[1],3)} and x = ${form.round(form.sim(a1,b1,c1,a2,b2,c2)[0],3)}`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function factQuad() {
    let r1 = form.rand(20);
    let r2 = form.rand(20);
    r1 = Math.random() > 0.5? r1 : -r1;
    r2 = Math.random() > 0.5? r2 : -r2; 
    let c = r1*r2;
    let b = - r1 - r2;
    string = `Find all real roots of x^2 + ${b}x + ${c} = 0`;
    answerString = `Factoring the quadratic, we obtain (x - ${r1})(x - ${r2}) = 0. This the real roots are ${r1} and ${r2}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function aQuad() {
    let a = form.rand(10);
    let b = form.rand(10);
    let c = form.rand(10);
    let d = form.rand(10);
    let r1 = -b/a;
    let r2 = -d/c;
    let a1 = a*c;
    let b1 = a*d + b*c;
    let c1 = b*d;
    let string = `Find all real roots of ${a1}x^2 + ${b1}x + ${c1}`;
    let answerString = `Factoring the quadratic, we obtain (${a}x + ${b})(${c}x + ${d}) = 0. Thus, the roots are ${r1} and ${r2}.`;
}
function animalLegs() {
    let numberOfChickens = form.rand(30);
    let numberOfCows = form.rand(30);
    let total = numberOfChickens + numberOfCows;
    let totalLegs = 2*numberOfChickens + 4*numberOfCows;
    let animal = Math.random() > 0.5 ? 'chickens' : 'cows';
    let string = `On a farm there are a total of ${total} chickens and cows altogether. There are a total of ${totalLegs} legs on the farm. How many ${animal} are there on the farm?`;
    let answerString;
    if (animal === 'chickens') {
        answerString = `Let the total number of chickens be x and the total number of cows be y. Then, we know that x + y = ${total}. Since chickens have 2 legs, and cows have 4 legs, we know that ${totalLegs} = 2x + 4y. Solving this system, we obtain that the number of chickens is ${form.sim(1,1,total,2,4,totalLegs)[0]}`;
    } else {
        answerString = `Let the total number of chickens be x and the total number of cows be y. Then, we know that x + y = ${total}. Since chickens have 2 legs, and cows have 4 legs, we know that ${totalLegs} = 2x + 4y. Solving this system, we obtain that the number of cows is ${form.sim(1,1,total,2,4,totalLegs)[1]}`;
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function alienEyes() {
    const alienNames = ['Zogs', 'Nogs', 'Noolyles', 'Quaquaqs', 'Omerases', 'Omencils', 'Squitas', 'Vrooms', 'Zooms', 'Lolligers', 'Oompas', 'Loompas', 'Wonkas', 'Wonkies', 'Topuffs', 'Malhams', 'Jakors', 'Cogs', 'Neyners', 'Lettors', 'Nonums', 'Spaceklars', 'Uummoos'];
    const bodyParts = ['legs', 'arms', 'noses', 'feet', 'fingers', 'ears'];
    let firstName;
    let secondName;
    do {
        firstName = alienNames[Math.floor(Math.random()*alienNames.length)];
        secondName = alienNames[Math.floor(Math.random()*alienNames.length)];
    } while (firstName === secondName);
    let bodyPart = bodyParts[Math.floor(Math.random()*bodyParts.length)];
    let zogs = form.rand(30);
    let nogs = form.rand(30);
    let zogEyes;
    let nogEyes;
    do {
        zogEyes = form.rand(10) + 1;
        nogEyes = form.rand(10) + 1;
    } while (zogEyes === nogEyes);
    let total = zogs + nogs;
    let totalEyes = zogEyes*zogs + nogEyes*nogs;
    let alien = Math.random() > 0.5 ? firstName : secondName;
    let string = `An alien race has two types of individals: ${firstName} and ${secondName}. ${firstName} have ${zogEyes} ${bodyPart} and ${secondName} have ${nogEyes} ${bodyPart}. On a spaceship there are ${total} ${firstName} and ${secondName} altogether and there are a total of ${totalEyes} ${bodyPart} on the spaceship. If only ${firstName} and ${secondName} are on this spaceship, how many ${alien} are there?`;
    let answerString;
    if (alien === firstName) {
        answerString = `Let x be the number of ${firstName} and y be the number of ${secondName}. We know that x + y = ${total} and that ${zogEyes}x + ${nogEyes}y = ${totalEyes}. Thus, solving this system gives us x = ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[0]}. Thus, there are ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[0]} ${firstName}.`;
    } else {
        answerString = `Let x be the number of ${firstName} and y be the number of ${secondName}. We know that x + y = ${total} and that ${zogEyes}x + ${nogEyes}y = ${totalEyes}. Thus, solving this system gives us y = ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[0]}. Thus, there are ${form.sim(1,1,total, zogEyes, nogEyes, totalEyes)[1]} ${secondName}.`;
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function bookQuestion() {
    let firstPage = form.rand(999);
    let numOfPages = form.rand(10);
    let sum = numOfPages*firstPage + ((numOfPages -1)*(numOfPages))/2;

    string = `The sum of ${numOfPages} consecutive page numbers in a book is ${sum}. Find the sum of the biggest and the smallest number.`;
    answerString = `Let the smallest page number be x. Then, we know that ${numOfPages}x + ${((numOfPages -1)*(numOfPages))/2} = ${sum}. Thus, we have x = ${firstPage}. Therefore, the largest page is ${firstPage} + ${numOfPages} -1 = ${firstPage + numOfPages -1}. Therefore, the sum is ${firstPage + numOfPages -1 + firstPage} `;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}


function numSum() {
    let firstNumber = form.rand(80);
    let secondNumber = form.rand(80);
    let sum = firstNumber + secondNumber;
    let diff = firstNumber + secondNumber > 0? firstNumber : secondNumber;
    let somethinger = Math.random() > 0.5 ? 'greater' : 'smaller';
    string = `The sum of two numbers is ${sum}.  The difference between the two numbers is ${diff}.  Find the ${somethinger} number`;
    let answerString;
    if (somethinger === 'greater') {
        answerString = `Let the smaller number be x and the larger number be y. We know that x + y = ${sum} and y - x = ${diff}. Adding these two equations we get 2y = ${sum + diff} which implies that y = ${(sum + diff)/2}`;
    } else {
        answerString = `Let the smaller number be x and the larger number be y. We know that x + y = ${sum} and y - x = ${diff}. Subtracting these two equations we get 2x = ${sum - diff} which implies that x = ${(sum - diff)/2}`;
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function age() {
    let sisterAgeGap = form.rand(7) + 1;
    let brotherAgeGap = form.rand(6) + 1;
    const maleNames = ['Harry', 'Ron', 'Percy', 'Jack', 'Patrick', 'Kenny', 'Albert', 'Joshua', 'Robert', 'Earnest', 'James', 'Larry', 'Bob', 'Frank', 'Tim'];
    let name = maleNames[Math.floor(Math.random()*maleNames.length)];
    let kelvinAge = form.rand(35) + 15;
    let sisterAge = kelvinAge - sisterAgeGap;
    let brotherAge = sisterAge + brotherAgeGap;
    let yearsAgo = form.rand(10);
    let pastAgeSum = kelvinAge + sisterAge + brotherAge -3*yearsAgo;    
    string = `${name} is ${sisterAgeGap} years older than his sister, but she ${brotherAgeGap} years younger than his brother.  ${yearsAgo} years ago, the sum of their total age was ${pastAgeSum} years.  What is ${name}'s age now?`;
    answerString = `Let ${name}'s current age be x. Then, we have x + x - ${sisterAgeGap} + x - ${sisterAgeGap} + ${brotherAgeGap} - 3*${yearsAgo} = ${pastAgeSum}. Solving this equation, we get x = ${kelvinAge}`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}


function quadConsec() {
    let numOfConsec = Math.random() > 0.5 ? 2 : 3;
    let x = form.rand(30) + 1;
    let string;
    let answerString;
    if (numOfConsec === 2) {
        let sum = x*x + (x+1)*(x+1);
        let somethinger = Math.random() > 0.5? 'smaller': 'larger';
        string = `The sum of the squares of ${numOfConsec} consecutive integers is ${sum}. Find the ${somethinger} integer.`;
        if (somethinger === 'smaller') {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 = ${sum} which implies that 2x^2 + 2x + 1 - ${sum} = 0. Solving the equation we get x = ${form.quad(2, 2, 1 - sum)[0]}. Thus, the smaller integer is ${form.quad(2,2,1-sum)[0]}`;
        } else {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 = ${sum} which implies that 2x^2 + 2x + 1 - ${sum} = 0. Solving the equation we get x = ${form.quad(2, 2, 1 - sum)[0]}. Thus, the larger integer is ${form.quad(2, 2, 1 - sum)[0]} + 1`;
        }
    } else {
        let sum = x*x + (x+1)*(x+1) + (x + 2)*(x + 2);
        let somethinger = Math.random() > 0.5? 'smallest': 'largest';
        string = `The sum of the squares of ${numOfConsec} consecutive integers is ${sum}. Find the ${somethinger} integer.`;
        if (somethinger === 'smaller') {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 + (x + 2)^2 = ${sum} which implies that 3x^2 + 6x + 5 - ${sum} = 0. Solving the equation we get x = ${form.quad(3,6,5-sum)[0]}. Thus, the ${somethinger} integer is ${form.quad(3,6,5-sum)[0]}`;
        } else {
            answerString = `Let the smaller integer be x. Then, we have x^2 + (x + 1)^2 + (x + 2)^2 = ${sum} which implies that 3x^2 + 6x + 5 - ${sum} = 0. Solving the equation we get x = ${form.quad(3,6,5-sum)[0]}. Thus, the ${somethinger} integer is ${form.quad(3,6,5-sum)[0] + 2}`;
        }
    }
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function quadSim() {
    let x = form.rand(20) + 5;
    let y = form.rand(20) + 5;
    let sum = x + y;
    let squareSum = x*x + y*y;
    let string = `The sum of two integers is ${sum} and the sum of the squares of the integers is ${squareSum}. Find the two integers.`;
    let answerString = `Let the two integers be x and y. We know that x + y = ${sum} and that x^2 + y^2 = ${squareSum}. If we substitute y = ${sum} - x into the second equation, we get x^2 + (${sum} - x)^2 = ${squareSum}. This implies that 2x^2 - ${2*sum}x + ${sum*sum - squareSum} = 0. Solving this equation, we get that x = ${form.quad(2, -2*sum, sum*sum - squareSum)[0]} or ${form.quad(2, -2*sum, sum*sum - squareSum)[1]}. Substituting x back into the original equation, we get y = ${form.quad(2, -2*sum, sum*sum - squareSum)[1]} or ${form.quad(2, -2*sum, sum*sum - squareSum)[0]}. Thus, the numbers are ${x} and ${y} `;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}


function fence() {
    let totalFence = form.rand(40) + 10;
    let string = `A farmer has a total of ${totalFence}m of fence in order to build a rectangular pen for his sheep. What dimensions should the farmer make the pen in order to maximize its area?`
    let answerString = `The then pen be x meters by y meters. Then, x + y = ${totalFence/2}. Then, the area of the fence = x(${totalFence/2} - x) = ${totalFence/2}x - x^2. Thus, the maximum point is (${form.quadExt(-1, totalFence/2, 0)[0], form.quadExt(-1, totalFence/2, 0)[1] }). Thus, the dimensions should be ${form.quadExt(-1, totalFence/2, 0)[0]} by ${totalFence - form.quadExt(-1, totalFence/2, 0)[0]}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



const algebra = [genQuadEq, genUnsolvableQuadEq, simEq, factQuad, animalLegs, alienEyes, bookQuestion, numSum, age, quadConsec, quadSim, fence];
module.exports = algebra;
