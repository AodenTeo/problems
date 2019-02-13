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



const geometry = [shadow, comp];
module.exports = geometry;
