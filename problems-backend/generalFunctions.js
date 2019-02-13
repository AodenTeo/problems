const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];
console.log(names.length);
const swimmingCreature = ['sting ray', 'shark', 'swordfish', 'dolphin', 'megladon', 'mermaid', 'jellyfish', 'submarine', 'spider crab', 'sunfish', 'sea star', 'narwhal', 'fangtooth'];
console.log(swimmingCreature.length);

const form = {
    rand(number) {
        return Math.floor(Math.random() * number + 1);
      },
      sin(degrees) {
        return Math.sin((degrees/360)*2*Math.PI);
      },
      cos(degrees) {
        return Math.cos((degrees/360)*2*Math.PI);
      },
      tan(degrees) {
        return Math.tan((degrees/360)*2*Math.PI);
      },
      
      round(number, dp) {
          return parseFloat(number).toFixed(dp);
      },
      quad(a,b,c) {
          let descriminant = b*b - 4*a*c;
          return [(-b + Math.sqrt(descriminant))/(2*a), (-b - Math.sqrt(descriminant))/(2*a) ];
      },
      sim(a1,b1,c1,a2,b2,c2) {
          let y = (a1*c2 - a2*c1)/(a1*b2 -a2*b1);
          let x = (c1 - b1*y)/a1;
          return [x,y];
      },
      quadExt(a,b,c) {
          let x = -b/(2*a);
          let y = a*x*x + b*x + c;
          return [x,y];
      }
}
module.exports = form;

