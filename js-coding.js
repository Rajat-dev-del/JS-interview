'use strict'
// console.log("Try programiz.pro");

// let a = {
//     name:'rajat'    
// }
// let b = {
//     ...a
// }
// b.name = 'sri'
// console.log(a,b)


// let a = 10;
// let b = new Number(10);
// let c = 10;
// console.log(a===b);
// console.log(b===c);


// function test(record){
//     if(record == {age:28}){
//         console.log(`Adult`);
//     }else if (record === {age:28}){
//         console.log(`still adult`)
//     }else{
//         console.log(`No Record`)
//     }
// }
// test({age:28})


// console.log(+true);
// console.log(-true);
// console.log(+false);
// console.log(-false);
// console.log(+false === -false);
// console.log(+true === -true);
// console.log(!'test');

// var a = {};
// var b = {key :'b'};
// var c = {key:'c'};

// a[b]=600;
// b[c]=700;
// b[b]=400;
// console.log(a[c]);
// console.log(a[b]);
// console.log(b[b]);
// console.log(b[a]);


// let str1 ='abcdef';
// let str2 = 123;

// expected output = a1b2c3def

// let str = 'abc';
// let str2 = 123456;
// expected output = a1b2c3456


// console.log(a); // undefined
// var a = 5;
// console.log(a); // 5

//  a = 100;
// console.log(a);
//  let a = 30; // Error: Cannot access 'a' before initialization

myFunc();
var myFunc = () => {
    console.log('first');
};
myFunc();
function myFunc(){
    console.log('second')
}
myFunc();