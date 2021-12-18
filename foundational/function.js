'use strict'
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1 , param2) { body... return; }
// one function === one thing
// naming : doSomthing, command, verb
// e.g. createCardAndPoint -> createCard , cratePoint
// function is object in JS
startLog('Function Declaration');
function printHello() {
    console.log('Hello');
}
printHello();

function log(msg) {
    console.log(msg);
}
log('Hello@');

// 2. Parameters
// premitive parameters : pass by value
// object parameters : pass by reference
startLog('Parameters');
function changeNm(obj) {
    obj.name = 'coder';
}

const jeasoek = { name : 'jeaseok'} ;
changeNm(jeasoek);
console.log(jeasoek);

// 3. Default parameters (added in ES6)
startLog('Default Parameters')
 function showMessage(msg , from = 'unknown'){
    // ES6 이전에는 아래와 같이 항상 체크 해야됨.
    // if( from === undefined ){
    //     from = 'unknown';
    // }
    console.log(`${msg} by ${from}`);
}
showMessage('Hi!'); 

// 4. Rest parameters (added in ES6)
startLog('Rest Parameters');
function printAll(...args) {
    // for( let i = 0 ; i < args.length ; i++) {
    //     console.log(args[i]);
    // }
        
    // for( const arg of args) {
    //     console.log(arg);
    // }

    args.forEach((arg) => console.log(arg));
}
printAll('lee', 'jae', 'seok');

// 5. Local scope
startLog('Local Scope');
let glbalMsg = 'global'; // global variable
function printMsg(){
    let msg = 'hello';
    console.log(msg);
    console.log(glbalMsg);
    function printAother() {
        console.log(msg);
        let childMsg = 'hello';
    }
    //console.log(childMsg); // error
}
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

// 6. Return a value
startLog('Return a value');
function  sum( a , b) {
    return a + b;
}
const result = sum(1, 2);
console.log(` sum : ${sum(1, 2)}`);

// 7. Early return, early exit
startLog('Early return, early exit');
// bad
function upgradeUser(user) {
    if(user.point > 10){
        // long upgrade logic
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;       
    }
    // long upgrade logic
}

// 8. First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be returned by another function

// 1. Function expresstion
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
startLog('First-class function');
//printA(); // error , var 또는 named function으로 처리하면 hoisted
const printA = function () {// anonymous function
    console.log('print');
};
//print();
const printAgain = printA;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));