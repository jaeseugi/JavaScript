'use strict'
// Q1. make a string out of an array
{
    const fruits = ['apple','banana','orange'];

    // let result = "";
    // fruits.forEach( ( fruit , idx ) =>  result = result + fruit  );
    // console.log(result);

     const result = fruits.join('/'); // default ,
     console.log(result);
}

//Q2. make an array out of a string
{
    const str = 'A,B,C,D';
    const arr =  str.split(','); // seperator을 안주면 0번 index에 다들어감..
    console.log(arr);
}

// Q3. make this array look like this : [5,4,3,2,1]
/**
 * reverse()
 * 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.
 */
{
    const arr = [1,2,3,4,5];
    const result = arr.reverse(); // This method mutates the array and returns a reference to the same array.
    result[0] = 10;
    console.log(result); // (5) [10, 4, 3, 2, 1]
    console.log(arr); // (5) [10, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
/**
 * slice()
 * 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
 */
{
    const oldArr = [1, 2, 3, 4, 5];
    //const newArr = oldArr.splice(2,3);  
    //console.log(newArr);
    
    const newArr = oldArr.slice(2,5);  // 기존의 배열은 그대로 두고, 배열에서 원하는 부분만 리턴해서 받아옴.
    console.log(`newArr :  ${newArr}`);
    console.log(`oldArr : ${oldArr}`);
    
}

class Student {
    constructor (name , age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const  students = [
    new Student('A' , 29, true, 45),
    new Student('B' , 28, false, 80),
    new Student('C' , 30, true, 90),
    new Student('D' , 40, false, 66),
    new Student('E' , 18, true, 88),
];

// Q5. find a student width the source 90
/**
 * find()
 * 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환한다.
 */
{
    //const arr = studens.filter( ( student , idx ) => student.score === 90 );
    const arr = students.find(  (student, idx) =>  student.score === 90 ); // 한문장이면 return, {} , ; 다 생략가능
    console.log(arr);
}

// Q6. make an array of enrolled students
/**
 * filter()
 * 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
 */
{
    // 배열안에 요소를 원하는 방식으로 다른데이터로 변경시 유용.
    const arr = students.filter( ( student , idx ) => student.enrolled );
    console.log(arr);
}

// Q7. make an array containing only the students` scores
// result should be : [45, 80, 90, 66 ,88]
/**
 * map()
 * 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
 */
{
    const arr = students.map( (student) => student.score);
    console.log(`map : ${arr}`);
}

// Q8. check  if there is a student with the score lower than 50
/**
 * some()
 * 참고: 빈 배열에서 호출하면 무조건 false를 반환합니다.
 * every()
 * 참고: 빈 배열에서 호출하면 무조건 true를 반환합니다.
 */
{
    const arr2 = students.some( (student ) => student.score < 50 ); // 배열중에 어떤것이라도 하나만
    console.log(`some : ${arr2}`);
    console.log([].some( item => item < 10));
    
    const arr = !students.every( (student ) => student.score >= 50 );// 배열중 모든 
    console.log([].every( item => item < 10));
}

// Q9. compute student`s average score
{
    //let result = 0;
    //students.forEach( ( student ) => result += student.score );
    //console.log( result/students.length );

    // const result = students.reduce( (prev , curr) => { // 배열의 내의 값을 로직에 의해 누적할떄 사용.
    //     console.log("-----------");
    //     console.log(prev , curr);
    //     return prev + curr.score; // 다음번에 prev로 전달되는값.
    // },0);    

    const result = students.reduce( (prev , curr) => prev + curr.score, 0);
    
    //reduceRight : 배열의 제일 뒤에서 부터 시작.

    console.log( result / students.length );
}

// Q10.make a string containing all thr scores
// result should be : '45,80,90,66,88' 
{
    // const arr = students.map( (student) => student.score);
    // console.log( arr.toString() );

    const arr = students.map( (student) => student.score).filter( (score) => score >=50 ).join();
    // 함수형 프로그래밍!!
    console.log( arr );
}

// Bonus! do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88, 90'
{   
    const arr = students.map( (student) => student.score).sort().join();
    console.log( arr );
}