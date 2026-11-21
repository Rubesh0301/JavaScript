const x = 5;

let forFactorial = 1;
for (let i = 1; i <= x; i++) {
    forFactorial *= i;
    console.log(forFactorial);
}

let whileFactorial = 1;
let whileCounter = x;
while (whileCounter > 0) {
    whileFactorial *= whileCounter;
    console.log(whileFactorial);
    whileCounter--;
}

let doWhileFactorial = 1;
let doWhileCounter = x;
do {
    doWhileFactorial *= doWhileCounter;
    console.log(doWhileFactorial);
    doWhileCounter--;
} while (doWhileCounter > 0);
