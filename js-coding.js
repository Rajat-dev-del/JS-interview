'use strict'

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