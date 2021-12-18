'use strict'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Object
// one of the JavaScript`s data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and property
startLog('Literals and property')
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const lee = { name : 'lee' , age : 30 };
print(lee);

// with JavaScript magic (dynamically typed language), runtime때 타입이 결정됨.
// can add properties later
// 동적으로 추가해서 사용하는것은 유지보수에 좋지 않음.
lee.hasJob = true;
console.log(lee.hasJob); // true

// can delete properties later
delete lee.hasJob;
console.log(lee.hasJob); // undefined


// 2. Computed properties
// ket should be always string
startLog('Computed properties');
console.log(lee.name); // 코딩하는 순간 값을 받아올때. 일반적으로 사용
console.log(lee['name']); // Computed properties , runtime시점에 key값이 결정될때. 아래의 printVal() 같은 경우 즉, 동적으로 키를 가져와서 사용하는 경우
lee['hasJob'] = true;
console.log(lee.hasJob);

function printVal(obj , key){
    // console.log(obj.key);
    console.log(obj[key]);
}

printVal(lee, 'name');

// 3. Property value shorthand
startLog('Property value shorthand');
const person1 = { name : 'bob1' , age : 1};
const person2 = { name : 'bob2' , age : 2};
const person3 = { name : 'bob3' , age : 3}; // object를 필요할때마다 일일히 만들게되면 동일한 key,value 반복적으로 만들어야됨.
//const person4 = makePerson('bob4',4);
const person4 = new Person('bob4',4);
console.log(person4)
// function makePerson(name , age) {
//     return {
//         name, // name : name , key와value 이름이 동일하면 생략가능함.
//         age
//     };
// }

// 4. Constructor Function
// 일반적으로 대문자로 시작한다.
startLog('Constructor Function');
function Person(name , age) {
    // this = {}; 
    this.name = name;
    this.age = age;
    // return this;
    //62,65번 라인이 생략되어있다.
}

// 5. in operator : property existence check ( key in obj )
startLog('in operator : property existence check ( key in obj )');
console.log('name' in lee); // true
console.log('age' in lee); // true
console.log('random' in lee); // false
console.log( lee.random ); // undifined

// 6. for..in vs for..of
startLog('for..in vs for..of');
// for(key in obj)
// 모든 키를 받아서 처리할때 사용한다.
for (key in lee){
    console.log(key);
}

// for (value of iterable)
// 배열, 리스트 같은 순차적인 오브젝트에 사용한다.
const array = [1,2,3,4,5];
for( value of array){
    console.log(value);
}

// 7. Fun cloning
startLog('Fun cloning');
// Object.assign(dest, [obj1, obj2, obj3 ... ])
const user = {name : 'lee', age : 20};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way - 수동적인 방법
const user3 = {};
for (key in user){
    user[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
console.log(user4==user); // false

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue' , size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big

