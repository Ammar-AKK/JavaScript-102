const d = new Date(2023, 9, 20);
console.log(d.getFullYear());

const number = Math.ceil(9.12);
console.log(number);
//Math.floor
//Math.round
//Math.abs

const numberss = [4, 2, -9, 9, 7];
const num = Math.min(...numberss);
console.log(num);
/*
const num = Math.min(...numberss);
console.log(num);
 */

const str = '1.49';
const floatNumber = parseFloat(str);
console.log(floatNumber + 1);

/*
const str = '9090';
const intNumber = parseInt(str);
console.log(intNumber + 1);
*/

/*
const number = Math.trunc (4.16);

console.log(number);
*/

/*
const number = 3.12
const isInt = Number.isInteger(number);
console.log(isInt);*/

/*
const number =2**3;
console.log(number);
*/

/*
const number = Math.pow(2, 3);
console.log(number);
*/

/*
const number = 16;
const sqrtNumber = Math.sqrt(number);
Math.log(sqrtNumber);
*/

/*
const number = 3;
console.log(Math.sign(number));
*/

const result = 3 / 0;
console.log(result);

const randomNumber = Math.random();
console.log(randomNumber);

const numbeer = 357_643_912;
console.log(numbeer);


//Decimal
let age = 14;

//Hexadecimal
age = 0xe;

//Octal
age = 0o16;

//Binary
age = 0b1110;

console.log(age.toString(2));


function sum(firstNumber, secondNumber){
    return `[${firstNumber + secondNumber}]`;
}

function sub(firstNumber, secondNumber){
    return `[${firstNumber - secondNumber}]`;
}

function mul(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function operation(firstNumber, secondNumber, opCallback){
    return `[${opCallback(firstNumber, secondNumber)}]`;
}

console.log(operation(5,2, mul));
console.log(operation(5,2, sum));
console.log(operation(5,2, sub));


const colors = ['red', 'green', 'blue'];
colors.forEach(function(currentValue, index, array){
console.log(index, currentValue);
})

const ages = [11, 13, 15, 12];

const hasAdult = ages.some(function(element){
    return element >= 18
})
console.log(hasAdult);

const calors =  ['red','green','blue','green'];
const index = calors.indexOf('green, -2');
console.log(index);
/*
const index = calors.lastindexOf('green, -2');
console.log(index);
*/

/*
let name = 'camry';
let color = 'white';
let currentSpeed ='0';
function move(speed){
    carCurrentSpeed = speed
    return `The ${name} is moving at the speed of ${carCurrentSpeed} Km/h`;
}
function stop(){
    carCurrentSpeed = 0
     return `The ${name} stopped`
     
}
console.log(move(100));
*/

const car = {
    name: 'Caliber',
    color: 'orange',
    currentSpeed: 0,
    move: function(speed){
        this.currentSpeed = speed
        return `The ${this.name} is moving at the speed of ${this.carCurrentSpeed} Km/h`;
        },
    
    stop: function(){
        this.currentSpeed = 0
        return `The ${this.name} stopped`
    }
}

console.log(car.move(100));