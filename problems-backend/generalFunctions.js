const names = ['Tom', 'Peter', 'Sue', 'Denise', 'Rodger', 'Anne', 'Lucy', 'Lily', 'David', 'Joanne', 'Elizabeth', 'James', 'Bob', 'Michael', 'Albert', 'Stephen', 'Steve', 'Bill', 'Catherine', 'Emma', 'Emily', 'Elaine', 'Bianka', 'Ethan', 'Eliot', 'Lauren', 'Sam', 'Leonard', 'Nathan', 'Joy', 'Gretchen', 'Lousia', 'Zoey', 'Noah', 'Oliver', 'Benjamin'];

const swimmingCreature = ['sting ray', 'shark', 'swordfish', 'dolphin', 'megladon', 'mermaid', 'jellyfish', 'submarine', 'spider crab', 'sunfish', 'sea star', 'narwhal', 'fangtooth'];


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
      },
      lcm(input_array) {
        if (toString.call(input_array) !== "[object Array]")  
            return  false;  
     var r1 = 0, r2 = 0;
        var l = input_array.length;
        for(i=0;i<l;i++) {
            r1 = input_array[i] % input_array[i + 1];
            if(r1 === 0) {
                input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
            }
            else {
                r2 = input_array[i + 1] % r1;
                if(r2 === 0) {
                    input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
                }
                else {
                    input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
                }
            }
        }
        return input_array[l - 1];
    },
    gcd_two_numbers(x, y) {
      if ((typeof x !== 'number') || (typeof y !== 'number')) 
        return false;
      x = Math.abs(x);
      y = Math.abs(y);
      while(y) {
        var t = y;
        y = x % y;
        x = t;
      }
      return x;
    },
    gcd(input) {
      if (toString.call(input) !== "[object Array]")  
            return  false;  
      var len, a, b;
      len = input.length;
      if ( !len ) {
        return null;
      }
      a = input[ 0 ];
      for ( var i = 1; i < len; i++ ) {
        b = input[ i ];
        a = this.gcd_two_numbers( a, b );
      }
      return a;
    }
}

module.exports = form;

