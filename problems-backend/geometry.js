const form = require('./generalFunctions');

function shadow() {
    let lamp;
    let man;
    do {
        man = form.rand(50) + 150;
        lamp = form.rand(100) + 200
    } while (man >= lamp);
    let standDist = form.rand(500);
    let commonRatio = lamp/man;
    let shadowLength = parseFloat(standDist/(commonRatio -1)).toFixed(3);
    let string = `A man whose height is ${man}cm stands ${standDist}cm away from a ${lamp}cm street lamp. How long is his shadow?`;
    let answerString = `Let the first ray of light that is not blocked by the man be L. Let the point at which L almost touches the man's head be B, the point that L touches the ground be C, and the point at which L touches the lamp be A. Let the point at which the lamp meets the ground be X and let the point at which the man is standing be Y. Note that triangle ACX is similar to triangle BCY. Thus, the length of the shadow is ${shadowLength}cm.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}



function comp() {
    let number = form.rand(20) + 1;
    let smallerAngle = parseFloat(180/(number + 1)).toFixed(3);
    let largerAngle = 180 - smallerAngle;
    let string = `Two angles are complimentary such that the larger angle is ${number} times larger than the smaller angle. Find both angles.`;
    let answerString = `Let the smaller angle be x. Then, we have ${number + 1}x = 180. Solving this equation, we get x = ${smallerAngle}. Thus the two angles are ${smallerAngle} and ${largerAngle}.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

function simTri() {
    let m;
    let n;
    do {
        m = form.rand(20);
        n = form.rand(20);
    } while (m === n);
    let x = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
    let y = 2 * m * n;
    let c = m * m + n * n;
    let AD = parseFloat((x*y)/c).toFixed(3);
    let BD = parseFloat((x*x)/c).toFixed(3);
    let AM = parseFloat((AD*BD)/x).toFixed(3);
    let string = `Let ABC be a right triangle with angle CAB = 90 degrees. Let AD be an altitude of triangle ABC and let DM be an altitude of triangle ADC. Given that BD = ${BD} and AM = ${AM}, find AB.`;
    let answerString = `Note that triangle ABD is similar to triangle DAM. Thus, AB/BD = AD/AM which implies that AB/${BD} = AD/${AM}. Hence, we have AD = ${AM}*AB/${BD} = AD. Thus, BD^2 = (1 - (${AM}/${BD})^2)*AB^2 which implies that (1 - (${AM}/${BD})^2)*AB^2 = ${parseFloat(BD*BD).toFixed(3)}. Solving this equation, we get AB = ${x}. `;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

simTri();

function ramp() {
    let m;
    let n;
    do {
        m = form.rand(20);
        n = form.rand(20);
    } while (m === n);
    let a = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
    let b = 2 * m * n;
    let c = m * m + n * n;
    let random = form.rand(10) + 1;
    let a1 = a*random;
    let b1 = b*random;
    let c1 = c*random;
    let speed = form.rand(10);
    let time = parseFloat(a/speed).toFixed(3);
    const activities = [{activity: 'cycling', surface: 'ramp'}, {activity: 'running', surface: 'incline'}, {activity: 'skateboarding', surface: 'ramp'}, {activity: 'skiing', surface: 'ski slope'}, {activity: 'driving', surface: 'ramp'}, {activity: 'roller blading', surface: 'ramp'}, {activity: 'snowboarding', surface: 'slope'}];
    const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];
    let variation = activities[Math.floor(Math.random()*activities.length)];
    let name = names[Math.floor(Math.random()*names.length)];
    let string = `${name} is ${variation.activity} up a ${variation.surface} at a speed of ${speed}m/s. The ${variation.surface} is ${a1}m long horizontally. After ${time} seconds, ${name} has travelled ${a} meters horizontally. How tall is the ${variation.surface}?`;
    let answerString = `The distance travelled in ${time} seconds is ${time}*${speed} = ${c}. Thus, the total length of the surface of the ${variation.surface} is (${a1}/${a})*${c} = ${c1}. Thus, using the pythagorean theorem, we get that the height of the slope is equal to sqrt(${c1}^2 - ${a1}^2) = ${b1}m.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

ramp();

function race() {
    const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];
    let firstName;
    let secondName;
    let thirdName;
    do {
      firstName = names[form.rand(names.length) - 1];
      secondName = names[form.rand(names.length) - 1];
      thirdName = names[form.rand(names.length) - 1];
    } while (firstName === secondName || firstName === thirdName || secondName === thirdName);
    let radius = form.rand(30);
    let theta = form.rand(89);
    let winnerAngle = theta/2;
    let lead = parseFloat((theta/360)*2*Math.PI*radius).toFixed(3);
    let speed = form.rand(10) + 5;
    let string = `${firstName}, ${secondName}, and ${thirdName} are running the last lap of a race around a circular track of radius ${radius}m. They all run the last lap at a constant pace. ${firstName} and ${secondName} are running at ${speed}m/s, with ${firstName} being slightly ahead of ${secondName}. ${thirdName} is running the fastest. ${form.rand(10) + 1} seconds before ${thirdName} crosses the finish line, let the positions of ${firstName}, ${secondName} and ${thirdName} be A, B and C respectively. Angle ACB is ${winnerAngle} degrees. How much faster did ${firstName} finish the race than ${secondName} in seconds?`;
    let answerString = `Since angle ACB = ${winnerAngle} degrees, the arc AB is ${theta} degrees. Hence ${firstName} is ${lead}m ahead of ${secondName}. Thus, ${firstName} will finish ${parseFloat(lead/speed).toFixed(3)} seconds faster.`;
    console.log(string);
    console.log(answerString);
    return [string, answerString];
}

race();

const geometry = [shadow, comp, simTri, ramp, race];
module.exports = geometry;
