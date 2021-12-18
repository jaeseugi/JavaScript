// 1. Logical operators: || (or), && (and), ! (not)
startLog('Logical operators')
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// true 나오는순간 연산이 종료되므로, 연산을 많이하는 함수나 표현식을 제일 앞에 두면 비효율적.

// && (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`);
// false 나오는순간 연산이 종료.

function check() {
    for(let i = 0 ; i < 10 ; i++){
        console.log('###');
    }
    return true;
}
// often used to compress long if-statement
// nullableObject && nullableObject.someting
//  if(nullableObject != null) {
    //      nullableObject.something;
    //  }
    
    //2. Equality
    startLog('Equality')
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const lee1 = { name : 'lee'};
const lee2 = { name : 'lee'};
const lee3 = lee1;
console.log(lee1 == lee2); // false
console.log(lee1 === lee2); // false
console.log(lee1 === lee3); // true 

console.log( 0 == false); // true
console.log( 0 === false); // false
console.log( '' == false); // true
console.log( '' === false); // false
console.log( null == undefined); // true
console.log( null === undefined); // false
