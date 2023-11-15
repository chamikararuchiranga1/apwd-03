console.log("AFSD");

// console.log("Chamikara Ruchiranga");

// console.log("Chamikara Ruchiranga");
// console.log("Chamikara Ruchiranga");
// console.log("Chamikara Ruchiranga");
console.log("Chamikara Ruchiranga");

// Alert
// alert('Chamikara');

document.write('Panadura')
document.write("\n\n");
document.write('<br>')
document.write('<h1>Colombo</h1>')
document.write('<button>Click</button>')
document.write('<br><br>')
document.write('<h3>Chamikara Ruchiranga <br> 29 <br> Panadura</h3>')
// document.write('<h3>Rchiranga</h3>')

// global Variable 
var name = 'Chamikara';

// local variable 
{
    var town = "Panadura";
}

// task 
// Full Name
// Age 
// Town 

// data types 
// Numbers e.g. 112, 67, 87.98

// String 
// "Chamikara"

// Boolean 
// true / false

// Object
const obj = {
    name : "chamikara",
    age: "45",
    run: function name() {
    }
}

// Array 
const array = ["chamikara", "Kasun"];

// var / let / const 

// Var 
// can redeclared
var a = "run"
var a = "run-2"
console.log(a)
{var b = 10}
// use hear 
console.log(b)
// can reassign
a = 50
console.log(a)

// Let 
let c = 12;
console.log(c);
// can not redeclared 
// let c = 12;
{let d = 30}
// console.log(d);
// can reassign 
c = 15;
console.log(c);

// Const 
const con = "acpt"
// can not reassign
// con = "apwd"
// can not redeclared
// const con = "apwd"
{const k = "apwd"}
// console.log(k);


// Arithmetic Operators 

// Addition (+)
const l = 12;
const w = 34;
const addition = l+w;
console.log(addition);

// Subtraction (-)
const subtraction = w-l;
console.log(subtraction);

// Miltiplication (*)
const multiplication = l*w;
console.log(multiplication);

// Division (/)
const division = w/l
console.log(division);

// Modulus (%)
const modulus = w%l;
console.log(modulus);

// Increment (++)
let h = 100;
h++
h++
h++
console.log(h);

// Decrement (--)
let y = 200;
y--
y--
y--
console.log(y);

// Comparison Operators 
const s = 14;
const f = 14;

// Equal (==)
console.log("Equal = ", s == f);

// Not Equal (!=)
console.log("Not Equal = ", s != f);

// Greater than (>)
console.log("Greater than = ",s > f);

// Less than (<)
console.log("Less than = ", s < f);

// Greater than or Equal to (>=)
console.log("Greater than or Equal to = ", s >= f);

// Less than or Equal to (<=)
console.log("Less than or Equal to = ", s <= f);


// Logical Operators 
const u = true;
const o = false;

// AND (&&)
console.log("AND = ",u && o);

// OR (||)
console.log("OR = ", u || o);

// NOT (!)
console.log("NOT = ", !u);

// Function 
function MyName (name, address, age) {
    console.log("My Name is : ",name);
    console.log("My Address is : ",address);
    console.log("My Age is : ",age);
}

// const myName = () => {
//     console.log("My Name is : Chamikara");
// }

// myName();

MyName("Chamikara", "Panadura", 55);

// function name -> NumberEqual 
// number 1, number 2

function NumberEqual(num1, num2){
    const equal = num1+num2
    // console.log("Equal : ");
    return equal
}

const value = NumberEqual(12, 45);
console.log(value);
// NumberEqual(56, 100);
// NumberEqual(12565, 12565);


// num 4 < 100 input numbers

const myFunction = (num1,num2, num3, num4) => {
    const total = num1+num2+num3+num4;
    const avg = total/4;
    return avg;
}

const total = myFunction(23, 76, 95, 57);
console.log(total);

// Flow Controllers
// if
const marks = 66
if(80 < marks){
   console.log("A") 
}else if(50 < marks){
    console.log("B");
}else{
    console.log("C");
}