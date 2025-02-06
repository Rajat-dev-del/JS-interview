'use strict';

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


// myFunc();
// var myFunc = () => {
//     console.log('first');
// };
// myFunc();
// function myFunc(){
//     console.log('second')
// }
// myFunc();

//internal js working
// function myFunc(){
//     console.log('second')
// } // due to Hoisting
// myFunc();// second
// var myFunc = () => {
//     console.log('first');
// }; // only function declaration move at top not expressions
// myFunc(); //first
// myFunc(); // first


// foo = 20;
// console.log(foo);//20
// var foo = 100;
// console.log(foo);//100


// variable = 10;
// (()=>{
//     foo = 100;
//     console.log(variable);//10
//     var foo = 100;
//     variable = 20;
//     console.log(variable);//20
// })();
// console.log(foo);//error
// console.log(variable);//20
// var variable = 30;

// (()=>{
//     console.log(variable);//undefined
//     var variable = 10;
//     console.log(variable);//20
// })();
// console.log(variable);//Error variable is not defined


// let i=10;
// for( i=0;i<5;i++){
//     setTimeout(()=>{console.log(i)},0)
// }



// var i =0;
// for(i=0;i<5;i++){
//     setTimeout(()=> {console.log(i)},0)
// }


// function test() {
//     var c = 30;  // Function-scoped
//     let d = 40;  // Function-scoped
// }

// console.log(c); //  ReferenceError: c is not defined
// console.log(d); //  ReferenceError: d is not defined


// if (true) {
//     var a = 10;  // Function-scoped (Leaked outside)
//     let b = 20;  // Block-scoped (Only inside `if`)
// }

// console.log(a); //  10 (Accessible outside)
// console.log(b); //  ReferenceError: b is not defined


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 0);
// }

// 3 3 3   `var` (Function-scoped, same `i`)
// 0 1 2   `let` (Block-scoped, new `j` per iteration)


// var fullname = `Rajat Srivastava`;
// var obj ={
//     fullname : `hacked full name`,

//     prop: {
//         fullname:`inside prop`,
//         getFullname: function () {
//             return this.fullname;
//         },
//     },
//     getFullname: function () {
//         return this.fullname
//     },
//     getFullname2:() => this.fullname,
//     getFullname3: (function () {
//         return this.fullname;
//     })(),
// };

// console.log(obj.prop.getFullname());//inside prop
// console.log(obj.getFullname()); //hacked full name
// console.log(obj.getFullname2());//undefined
// console.log(obj.getFullname3);// with 'use strict' -> Error, without -> undefined



// const rajat = {
//     name : 'rajat',
//     sayName: function(){
//         return this.name;
//     }
// }
// const john = {
//     name : 'john',
//     sayName: function(){
//         return this.name;
//     }
// }

// const result = john.sayName.call(rajat);
// console.log(result); //Output-> rajat

// Note:
// call() invokes sayName() from john, but with `this` set to the rajat object.
// So, inside sayName(), `this` refers to rajat, and it returns rajat.name, which is 'rajat'.


// const rajat = {
//     name :'rajat',
//     sayName:function(){
//         console.log(this.name);
//     },
// };
// setTimeout(()=>{rajat.sayName()},3*1000); // after 3 second it will print `rajat`


// const obj = {
//     height:30,
// }
// console.log(obj.height); // 30
// delete obj.height;
// console.log(obj.height); // undefined


// const obj = Object.create({
//     height:30,
// }) 
// console.log(obj.height);// 30
// delete obj.height;
// console.log(obj.height);// 30 ->In Object.create, delete doesnt work bcuz values are stored in prototype of obj.


// for(var i=0;i<3;i++ ){
//     setTimeout(()=>{console.log(i)},1)
// }
// output : 3 3 3 due to global scope and seTtimeout will will return 3 after the completion of loop.


// let data = "size";
// const bird = {
//     size: "small"
// };
// console.log(bird[data]);//small
// console.log(bird["size"]);//small
// console.log(bird.size);//small
// console.log(bird.data);//undefined
// console.log(bird)//{size:'small'}


// let c = {name:"rajat"};
// let d;

// d = c;
// c.name = 'srivastava';
// console.log(d.name); // srivastava : object stored reference not values of the varible in momory. if one variable changes other will also changes.


// let a = 3;
// let b = new Number(3);
// console.log(a == b); // True
// console.log(a === b); // False : number is not equal to object
// console.log(typeof(a == b), typeof(a === b)); // boolean, boolean
// console.log(typeof( a, b));// number, Object


// let name;
// nmae = {}; // Typo
// console.log(name) // nmae is not defined


// let number = 0;
// console.log(number++); // 0 : number will print 0 first then will increment to 1
// console.log(++number); // 2 : 1+1
// console.log(number); // 2


// function getAge(...args){
//     console.log((args)); // return Array with element [21] 
//     console.log(typeof(args)); // Object : in Js, Arrays are Objects
// }
// getAge(21);


// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age); // Error: age is not defined
// }
// getAge();


// How long is cool_session accessible?
// session.storage.setItem("cool_session",123); // gets Removed once Tab/Browser is closed


// const obj = {1:'a',2:'b',3:'c'};
// console.log(obj.hasOwnProperty('1'));//true : hasOwnProperty accepts both string and number value
// console.log(obj.hasOwnProperty(1));//true


// const obj = {a:'one', b:'two', a:'three'};
// console.log(obj) // {a:'three', b:'two'} // a will override but position of key will be same


// for(let i =1;i<5;i++){
//     if(i==3) continue;
//     console.log(i); // 1 2 4
// }
// for(let i =1;i<5;i++){
//     if(i==3) break;
//     console.log(i); // 1 2 
// }


// const foo = () => console.log('first');
// const bar = () => setTimeout(()=>console.log('second'),1);
// const buz = () => console.log('third');
// bar();
// foo();
// buz();
// Output:  first, third, second


// const person = { name : 'linda'};
// function getName(age){
//     return `${this.name}, ${age}`;
// }
// console.log(getName.call(person, 21)); // linda, 21
// console.log(getName.bind(person, 21)); // returns  getName() function
// console.log(getName.bind(person, 21)()); //linda, 21: call getName() function so will return -> linda, 21


// function sayHi(){
//     return (()=>0)(); //IIFE
// }
// console.log(sayHi()); // 0
// console.log(typeof sayHi()); // number


// function sayHi(){
//     return () => 0; //Not IIFE
// }
// console.log(sayHi()); // () => 0
// console.log(typeof sayHi()); // function


// console.log(typeof 1);
// console.log(typeof typeof 1);

// console.log(typeof typeof 42);          // string
// console.log(typeof typeof true);        // string
// console.log(typeof typeof undefined);   // string
// console.log(typeof typeof []);          // string
// console.log(typeof typeof function(){});// string

// console.log(typeof null) // object
// console.log(typeof NaN); // number
// console.log(typeof undefined); // undefined
// console.log(typeof []); // object
// console.log(typeof {}); // object
// console.log(typeof function(){}); // function


// const numbers = [1,2,3];
// numbers[9] = 11;
// console.log(numbers); // [1, 2, 3, empty × 6, 11] 
// console.log(numbers[5]); // undefined


// const numbers = [1,2,3];
// numbers[3] = numbers;
// console.log(numbers) // [1,2,3,[1,2,3]] at index 4 it will have same nested number array(array inside array)


// console.log(!!null); // false
// console.log(!!''); // false
// console.log(!!1); // true

// console.log([... "hello"]); // ['h', 'e', 'l', 'l', 'o']
// console.log({... "hello"}); // {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}
// console.log(typeof 7+4+'5'); // number45


// console.log([]==[]) // false
// console.log([]===[]) // false


// const data = [1,2,3].map((num)=>{
//     if(typeof num == 'number') return;
//     return num*2;
// })
// console.log(data); // [undefined, undefined, undefined]; 


// const getInfo = (member) =>{
//     member.name = 'anil'
// }
// const person = {name:'rajat'};

// getInfo(person);
// console.log(person); // anil

// function Car() {
//     this.make = 'tata';
//     return {make:'kia'}
// }
// const myCar = new Car();
// console.log(myCar) // kia


// (()=>{
//     let x = (y = 10);
// })();
// console.log(typeof x) // undefined x is block scope
// console.log(typeof y) // number :  y is 7 cuz y will be var by default hence global scope


// (()=>{
//     let x = 10;
// })();
// (()=>{
//     let x = 10;
// })();
// console.log(typeof x); // undefined


// (()=>{
//     let x = y = 10;
// })();
// (()=>{
//     let x = y = 20;
// })();
// console.log(y); // 20


// let x = 100;
// (()=>{
//     var x = 20;
//     console.log(x) // 20
// })();
// console.log(x) // 100 

// console.log(typeof (true + + '10')) // number
// console.log( (true + + '10')) // 11


// what are generator functions?
// function that can be paused and resumed during execution using the yield keyword. It is defined using function* syntax.

// function* getmultipleValue(){
//     yield 10;
//     yield 20;
// }
// const result = getmultipleValue();

// console.log(result.next()) // {value: 10, done: false}
// console.log(result.next().value) // 10
// console.log(result.next().value) // 20
// console.log(result.next()) // {value: undefined, done: true}


// const person = {
//     name:'rajat',
//     age:28,
// }

// Output 1: [["name","rajat"],["age","28"]]
// const array =  Object.entries(obj);
// console.log(array); // Convert Object Entries to Array (Key-Value Pairs)

// Output 2:[{key: 'name', value: 'rajat'},{key: 'age', value: 28}]
// const customArray = Object.entries(obj).map(([key, value]) => ({ key, value }));
// console.log(customArray); // Convert Object to an Array of Custom Format


// const obj = { a: 1, b: 2, c: 3 };
// const keysArray = Object.keys(obj);
// console.log(keysArray); // ['a', 'b', 'c']  Convert Object Keys to Array


// const obj = { a: 1, b: 2, c: 3 };
// const valuesArray = Object.values(obj);
// console.log(valuesArray); // [1, 2, 3] Convert Object Values to Array

// Add on question

// const person = {
//     name:'rajat',
//     age:28,
// }

// Output 1: [["name","rajat"],["age","28"]] without Object.entries()
//Solution: will use Object.keys and map to retun [[key,value]]

// const getObjectEntries = (obj) =>{
//     const keys = Object.keys(person);
//     // console.log(keys); // ['name', 'age']
//     const result = keys.map((key)=>{
//         const value = obj[key]; // obj[name] , obj[age]
//         // console.log(value)// rajat , 28
//         return [key, value]
//     } )
//     console.log(result)
// }
// getObjectEntries(person);


// const data ='<h1 style="color:red;">Hello Rajat</h1>';
// document.getElementById('root').textContent = data;


// 'use strict';

// let x = `{
//     "b": 1,
//     "c": 2
// }`;
// let y = JSON.parse(x);  
// console.log(typeof y)



// let x = 1;
// let y = '1';
// console.log(++x,++y)


// let x = "b";
// let y = 'a';
// console.log(x+y+ +y+y) //


// const a = {
//     b:{
//         c:2
//     }
// }
// const b = {...a}
// a.b.c = 3;
// console.log(b);

// let x = [1,2,3];
// let [, ,y] = x;
// console.log(y)


// let x = {a:1,b:2};
// let y = {b:3};
// let z = {...x,...y};
// console.log(z)

// let x = [1,2,3];
// let y = x.map((num)=>{
//     x.push(num+3);
//     return num+1
// })






















