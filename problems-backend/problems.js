const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];
console.log(names.length);
const swimmingCreature = ['sting ray', 'shark', 'swordfish', 'dolphin', 'megladon', 'mermaid', 'jellyfish', 'submarine', 'spider crab', 'sunfish', 'sea star', 'narwhal', 'fangtooth'];
console.log(swimmingCreature.length);


function rand(number) {
  return Math.floor(Math.random() * number + 1);
}
function sin(degrees) {
  return Math.sin((degrees/360)*2*Math.PI);
}
function cos(degrees) {
  return Math.cos((degrees/360)*2*Math.PI);
}
function tan(degrees) {
  return Math.tan((degrees/360)*2*Math.PI);
}

function sharkQuestion() {
  let x;
  let firstName;
  let secondName;
  do {
    firstName = names[rand(names.length - 1)];
    secondName = names[rand(names.length) - 1];
  } while (firstName === secondName);

  let chosenAnimal = swimmingCreature[Math.floor(Math.random() * swimmingCreature.length)]
  x = Math.floor((Math.random() * 100 + 1));
  let y = rand(90);
  let z = rand(90);
  let name;
  name = Math.random() > 0.5 ? firstName : secondName;
  let string = `${firstName} and ${secondName} are snorkeling ${x} meters apart on the surface of the water. At that moment, they spot a ${chosenAnimal}. The angle of depression from ${firstName} to the ${chosenAnimal} is ${y} degrees and the angle of depression from ${secondName} to the ${chosenAnimal} is ${z} degrees. Find the distance between ${name} and the ${chosenAnimal}.`;
  let answerString;
  let answer;
  if (name === firstName) {
    answer = parseFloat((x * Math.sin((z / 360) * Math.PI * 2)) /
      Math.sin(((180 - y - z) / 360) * Math.PI * 2)).toFixed(3)

    answerString = `Let ${firstName}, the ${chosenAnimal}, and ${secondName} be at points A, B and C respectively. Let the distance between ${firstName} and the ${chosenAnimal} be x. By the sum of angles in ABC, angle ABC =180 - ${y} - ${z} = ${180 - y - z} degrees. By the law of sines, we have (${x} * sin z)/(sin ${180 - y - z}) = x =${answer} `;
  } else {
    answer = parseFloat((x * Math.sin((y / 360) * Math.PI * 2)) /
      Math.sin(((180 - y - z) / 360) * Math.PI * 2)).toFixed(3)
    answerString = `Let ${firstName}, the ${chosenAnimal}, and ${secondName} be at points A, B and C respectively. Let the distance between ${secondName} and the ${chosenAnimal} be x. By the sum of angles in ABC, angle ABC = 180 - ${y} - ${z} = ${180 - y - z} degrees. By the law of sines, we have (${x} * sin z)/(sin ${180 - y - z}) = x =${answer} `;
  }
  console.log(string);
  console.log(answerString);
  return [string, answerString];
}
function rockClimbingQuestion() {
  let x;
  let firstName;
  let secondName;
  do {
    firstName = names[rand(names.length) - 1];
    secondName = names[rand(names.length) - 1];
  } while (firstName === secondName)
  x = rand(100);
  let y = rand(89);
  let z = rand(89);
  let random = Math.random();
  let name;
  name = Math.random() > 0.5 ? firstName : secondName;
  let string = `${firstName} and ${secondName} are rock climbing ${x} meters apart on the surface a mountain. At that moment, ${firstName} and ${secondName} spot an eagle. The angle of elevation from ${firstName} to the eagle is ${y} degrees and the angle of depression from ${secondName} to the eagle is ${z} degrees. Find the distance between ${name} and the eagle.`;
  let answer;
  if (name === firstName) {
    answer =
`Let ${firstName}, the eagle, and ${secondName} be at points A,B and C respectively. Let the distance between ${firstName} and the eagle be x. Then, by the sum of angles in triangle ABC, we have angle ABC = 180 - y - z = ${180 - y- z}. By the law of sines we have x = (${x} * sin ${z})/(sin ABC) = ${parseFloat((83 * Math.sin((z / 360) * Math.PI * 2)) /
      Math.sin(((180 - y - z) / 360) * Math.PI * 2)).toFixed(3)}`;
  } else {
    answer =
    `Let ${firstName}, the eagle, and ${secondName} be at points A,B and C respectively. Let the distance between ${secondName} and the eagle be x. Then, by the sum of angles in triangle ABC, we have angle ABC = 180 - y - z = ${180 - y- z}. By the law of sines we have x = (${x} * sin ${y})/(sin ABC) = ${parseFloat((83 * Math.sin((y / 360) * Math.PI * 2)) /
      Math.sin(((180 - y - z) / 360) * Math.PI * 2)).toFixed(3)}`;
  }
  console.log(answer);
  console.log(string);

  return [string, answer];
}
function pythag() {
  let m;
  let n;
  do {
    m = rand(10);
    n = rand(10);
  } while (m === n);
  let a = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
  console.log(a);
  let b = 2 * m * n;
  console.log(b);
  let c = m * m + n * n;
  let diff = a - b > 0 ? a - b : b - a;
  let answer = a - b > 0 ? a : b; 
  let string = `One leg of a right triangle is ${diff}cm more than the other. If the hypotenuse is ${c}cm, create and solve an equation and find the length of the legs.`;
  let answerString = `Let the shorter leg of the right triangle be x. Then, we have the equation x^2 + (x+${diff})^2 = ${c}. Solving this equation using the quadratic formula gives us x = ${answer}.`;
  console.log(answerString);
  console.log(string);
  return [string, answerString];
}
function triangleRangeQuestion() {
  let m;
  let n;
  do {
    m = rand(10);
    n = rand(10);
  } while (m === n);
  let a = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
  let b = 2 * m * n;
  let c = m * m + n * n;
  console.log(c);
  let triangly = Math.random() > 0.5 ? 'obtuse' : 'acute';
  let string = `Let ABC be a triangle such with AB=${a}cm and BC=${b}cm. Let AC be opposite the largest angle in the triangle. Assume that ABC is ${triangly}. Find the range of possible values of AC.`;
  let answerString;
  console.log(string);
  let secondLongestSide = a > b ? a : b;
  if (triangly === 'obtuse') {
    answerString = `Using the law of cosines and the triangle inequality, we determine that a triangle is obtuse if and only if its longest side is greater that the sum of the squares of the other two sides. As such we obtain ${c} < AC < ${a + b}`
    console.log(`${c} < AC < ${a + b}`)
  } else {
    answerString = `Using the law of cosines, we determine that a triangle is acute if and only if its longest side is greater that the sum of the squares of the other two sides. As such we obtain ${secondLongestSide} < AC < ${c}`;
    
    console.log(`${secondLongestSide} < AC < ${c}`);
  }
  console.log(answerString);
  return [string, answerString];
}
function trapezoidQuestion() {
  let m;
  let n;
  do {
    m = rand(10);
    n = rand(10);
  } while (m === n);
  let a = m * m - n * n > 0 ? m * m - n * n : n * n - m * m;
  let b = 2 * m * n;
  let c = m * m + n * n;
  let angle = rand(89);
  let AB = a > b ? a : b;
  let AD = a < b ? a : b;
  let string = `Let ABCD be an issoceles trapezoid, with base AB=${AB} and AD=CB=${AD}. Let angle ACB=${angle} degrees. Find the length of the diagonal AC.`;
  console.log(string);
  let answer = (Math.sqrt(c * c - 2 * a * b * Math.cos(((angle) / 360) * 2 * Math.PI))).toFixed(3);
  console.log(answer);
  let answerString = `To find diagonal AC, we simply apply the law of cosines to triangle ACB. Thus, we obtain that AC = sqrt(AB^2 + BC^2 - 2*AB*BC*cos ACB) = ${answer}`;
  console.log(answerString);
  return [string, answerString];
}
function mountain() {
  let height = rand(1000);
  let depression = rand(89);
  let elevation = rand(89);
  let string = `An plane is flying ${height} feet above the ground. The angle of depression from the plane to the summit of a mountain is ${depression} degrees. The angle of elevation of the summit of the mountain a man on the ground directly below the plane is ${elevation} degrees. Find the height of the mountain.`;
  let answerString = `Let the plane, the summit of the mountain, and the man be at points A,B and C respectively, and let the height of the mountain be h. We are given that AC=${height}. Let M be a point such that BMA = 90 degrees and let BM = d. tan ${elevation} = (${height} - h)/d. Similarly, tan ${depression} = h/d. Dividing these equations by each other, we obtain (${height} - h)/h = tan ${elevation} / tan ${depression}. Solving this equation, we obtain h = ${parseFloat((height)/(1 + (Math.tan((elevation/360)*2*Math.PI)/(Math.tan((depression/360)*2*Math.PI))))).toFixed(3)} `;
  console.log(string);
  console.log(answerString);
  return [string, answerString];
}
function running() {
  let firstName = names[Math.floor(Math.random() * names.length)];
  let speed = rand(10);
  let angle = rand(45);
  let newAngle = rand(45);
  angle = angle < newAngle ? angle : newAngle;
  newAngle = angle < newAngle ? newAngle : angle;
  let string = `${firstName} is jogging at a constant pace of ${speed}m/s along a road past a lighthouse. Initially, the bearing of the lighthouse from his path is ${angle} degrees. After 10 minuites, the bearing becomes ${newAngle} degrees. What is the closest he will come to the lighthouse. `;
  let distanceTravelled = speed * 10 * 60;
  let thirdAngle = 180 - newAngle;
  let fourthAngle = 180 - angle - thirdAngle;
  let hypotenuse = (distanceTravelled*sin(angle)/sin(fourthAngle));
  let closestDistance = hypotenuse*sin(newAngle);
  console.log(closestDistance);
  answerString = `Since we know that the jogger travelled at a speed of ${speed}m/s, we can conclude that the distance travelled in 10 minuites was ${speed} * 10 * 60 = ${distanceTravelled}. Let the initial position of the jogger be I, the final position of the jogger be F, and the position of the lighthouse be L. We know that angle IFL = 180 - ${newAngle} = ${thirdAngle} degrees. Thus, we know that angle ILF = ${fourthAngle}. Using the law of sines, we obtain that line FL = ${parseFloat(hypotenuse).toFixed(3)}m. When the distance between the jogger and the lighthouse is minimal, the bearing of the lighthouse must be 90 degrees. Thus, the minimal distance is ${parseFloat(closestDistance).toFixed(3)}.`
  console.log(string);
  return [string, answerString];
}
function lawOfCosines() {
  let angle = rand(89);
  let length1 = rand(10);
  let length2 = rand(10);
  let dice = Math.random()
  let A;
  let B;
  let C;
  if (dice > 0.6666666666) {
    A = 'A';
    B = 'B';
    C = 'C';
  } else if (dice > 0.3333333333333) {
    A = 'B';
    B = 'C';
    C = 'A';
  } else {
    A = 'C';
    B = 'A';
    C = 'B';
  }

  let string = `Let ABC be a triangle. Let ${A}${B}=${length1} and ${B}${C} = ${length2}. Let angle ${A}${B}${C} = ${angle} degrees. Find all the remaining sides and angles in the triangle.`;
  let thirdSide = parseFloat(Math.sqrt(length1*length1 + length2*length2 - 2*length1*length2*cos(angle))).toFixed(3);
  let secondAngle = parseFloat(((Math.acos((+thirdSide*thirdSide + length1*length1 - length2*length2)/(2*length1*thirdSide)))/(2*Math.PI))*360).toFixed(3);
  console.log((+thirdSide*thirdSide + length1*length1 - length2*length2)/(2*length1*thirdSide))
  let answerString = `Using the law of cosines, we obtain that ${A}${C} = ${thirdSide}, angle ${B}${A}${C} = ${secondAngle} and ${A}${C}${B} = ${parseFloat(180 - angle - secondAngle).toFixed(3)}`;

  console.log(string);
  console.log(answerString);
  return [string, answerString];
}
function lawOfSines() {
  let angle = rand(89);
  let length1 = rand(10);
  let angle2 = rand(89);
  let dice = Math.random();
  let A;
  let B;
  let C;
  if (dice > 0.6666666666) {
    A = 'A';
    B = 'B';
    C = 'C';
  } else if (dice > 0.3333333333333) {
    A = 'B';
    B = 'C';
    C = 'A';
  } else {
    A = 'C';
    B = 'A';
    C = 'B';
  }

  let string = `Let ABC be a triangle. Let ${A}${B}=${length1}. Let angle ${A}${B}${C} = ${angle} and ${C}${A}${B} = ${angle2} degrees. Find all the remaining sides and angles in the triangle.`;
  let angle3 = 180 - angle - angle2;
  let AC = parseFloat(length1*sin(angle)/sin(angle3)).toFixed(3);
  let BC = parseFloat(length1*sin(angle2)/sin(angle3)).toFixed(3);
  let answerString = `By the angle sum in triangle ${A}${B}${C}, we determine that angle ${A}${C}${B} = ${angle3}. Using the law of sines, we then find that ${A}${C} = ${AC} and ${B}${C} = ${BC}`;
  console.log(string);
  console.log(answerString);
  return [string, answerString];
}



sharkQuestion();
pythag();
rockClimbingQuestion();
triangleRangeQuestion();
trapezoidQuestion();
mountain();
running();
lawOfCosines();
lawOfSines();

const trigonometry = [sharkQuestion, pythag, rockClimbingQuestion, triangleRangeQuestion, trapezoidQuestion, mountain, running, lawOfSines, lawOfCosines];

module.exports = trigonometry;