//string functions

//1.string length
const str = "ritik pandey";
console.log(str.length);

//2.indexOf()
const st = "hello world";
console.log(st.indexOf("world"));

//3.LastIndexOf()
const a = "hello world world world";
console.log(a.lastIndexOf("world"));

//4.str.slice(start , end)
console.log(str.slice(0 , 3));//the end index value does not diplay on the screen

//5.replace word
console.log(st.replace("world" , "lalu"));

//6.split
console.log(str.split(" "));

//7.trim
const value ="               hello               World                               ";
console.log(value.trim());

//8.toUpperCase()
console.log(str.toUpperCase());

//9.toLowerCase
console.log(str.toLowerCase());

