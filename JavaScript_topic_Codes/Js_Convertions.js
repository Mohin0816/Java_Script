/* Convertion is nothing but converting one datatype to another datatype
    we have los of convertions like :- 
                                -> Number()
                                ->String()
                                ->Boolean()
                                ->etc
*/

/////////////////////////////////////////////Number Convertion//////////////////////////////////////

let age= 26                  //number type
console.log(typeof(age));
console.log("-----------------------------------------------------------------------");
//String to Number

let age1="26"       
let Age1=Number(age1);        //String
console.log("value "+Age1);         //26
console.log("Type "+typeof Age1)        //number


let age2="26asd"                //STring with integer + charechters
let Age2=Number(age2)
console.log("value:-"+Age2);        //NaN
console.log("Type:-"+typeof Age2);      //number

console.log("-----------------------------------------------------------------------");

// NaN to number

let a=NaN
let A=Number(a);
console.log("value:--"+A);
console.log("Type:-"+ typeof A);


console.log("-----------------------------------------------------------------------");
//Underfind to Number

let b=undefined
let B=Number(b);

console.log("Value:-"+B);
console.log("Typeof:-"+B);

console.log("-----------------------------------------------------------------------");
//Boolean to number

let pass=true
let result=Number(pass)
console.log(typeof result);
console.log(result

);



console.log("-----------------------------------------------------------------------");

////////////////////////////////////////////String Convertion//////////////////////////////////////////
console.log("-----------------------------------------------------------------------");
//Number to string

let marks=2345                  //number
let Marks=String(marks)
console.log("Value:-"+Marks);
console.log("Type Of:-"+typeof Marks);      //String

console.log("-----------------------------------------------------------------------");

///////////////////////////Boolean Convertion/////////////////////////////////////////////////////

console.log("-----------------------------------------------------------------------");
/* in the boolean 
        ->If we pass 1 in the Boolean() method that will return => true
        ->0 => false
        ->"" Empty String => false
        ->"Mohin" any string => true
*/

let tell=1
let Tell=Boolean(tell)
console.log(typeof Tell);
console.log(Tell)
console.log("-----------------------------------------------------------------------");

let x=0;
let X=Boolean(x)

console.log(typeof X);
console.log(X);

console.log("-----------------------------------------------------------------------");

let y=""
let Y=Boolean(y)

console.log(typeof Y);
console.log(Y);

console.log("-----------------------------------------------------------------------");

let z="mohin"
let Z=Boolean(z)
console.log(typeof Z);
console.log(Z);






