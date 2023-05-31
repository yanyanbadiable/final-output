//Variables result
function result(){
    var x = 5;           
    var y = 6;         
    var z = x + y;

    alert(z);
}
//Pop-up alert result
function result1(){
    alert("Hello, world!");
}
//Pop-up confirm result
function result2(){
    var result = confirm("Are you sure you want to delete this item?");
    if (result) {
       alert("The item has been deleted !!!");
    } else {
    alert("Okay, you dont delete the item !")
    }     
}
//Pop-up prompt results
function result3(){
    var name = prompt("Please enter your name:");
        if (name) {
            alert("Hello, " + name + "!");
        } else {
            alert("You didn't enter your name.");
        }
}
//Arithmetic Operators
//Addition
function addResult(){
    let x = 5;
    let y = 2;
    let z = x + y;
    alert("The sum is "+ z);
}
//Subtraction
function subResult(){
    let x = 5;
    let y = 2;
    let z = x - y;
    alert("The difference is "+ z);
}
//Multiplication
function mulResult(){
    let x = 5;
    let y = 2;
    let z = x * y;
    alert("The product is "+ z);
}
//Division
function divResult(){
    let x = 5;
    let y = 2;
    let z = x / y;
    alert("The qoutient is "+ z);
}
//Exponentation
function expResult(){
    let x = 5;
    let y = 2;
    let z = x ** y;
    alert("The exponent of "+x+" raised to "+y+ " is equal to "+ z);
}
//Remainder
function remResult(){
    let x = 5;
    let y = 2;
    let z = x % y;
    alert("The remainder of "+x+" / "+y+" is "+ z);
}
//Increment
function incResult(){
    let x = 10;
    x++;
    let z = x;
    alert(z);
}
//Decrement
function decResult(){
    let x = 10;
    x--;
    let z = x;
    alert(z);
}

//Conditional Statement
function ifResult(){
    let hour = prompt("Enter the time today; ")
    if (hour < 18) {
        alert("Good morning");
        }
}
function eifResult(){
    let time = prompt("Enter the time today; ")
    if (time < 10) {
        alert("Good morning");
        } else if (time < 20) {
        alert("Good day");
        } else {
         alert("Good evening");
        }
}
function iefResult(){
    let hour = prompt("Enter the time today; ")
    if (hour < 18) {
        alert("Good morning");
    }else {
        alert("Good evening");
    }
}
//Loop
function whileResult(){
    let i = prompt("Enter a number less than 10: ");
    while (i <= 10) {
    alert(i);
    i++;
    }
} 
function dowhileResult(){
    let i = prompt("Enter a number less than 10: ");
    do {
        alert(i);
        i++;
    } while (i <= 10);
}  
//For loop
function forResult(){
    for (let i = prompt("Enter a number less than 10: "); i <= 10; i++) {
        alert(i);
    }
} 

// Array
// Push
function push(){
    let fruits = [' Santol' , ' Banana' , ' Apple' , ' Orange '];
    let add_fruits = prompt("Enter A Fruits: ");
    fruits.push(" "+ add_fruits);
    document.getElementById('result').innerHTML = fruits;
}
// Pop
function pop(){
    let fruits = [' Santol' , ' Banana' , ' Apple' , ' Orange '];
    fruits.pop();
    document.getElementById('result1').innerHTML = fruits;

    console.log(fruits)
}
// Unshift
function unshift(){
    let fruits = [' Santol' , ' Banana' , ' Apple' , ' Orange '];
    let add_fruits = prompt("Enter A Fruits: ");
    fruits.unshift(" "+ add_fruits);
    document.getElementById('result2').innerHTML = fruits;
}
// Shift
function shift(){
    let fruits = [' Santol' , ' Banana' , ' Apple' , ' Orange '];
    fruits.shift();
    document.getElementById('result3').innerHTML = fruits;
}

// Multidimensional Array
function mdArray(){

    let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
    ];
    console.table(activities)
    let len = prompt("Enter a number from 0-4: ");
    if (len >= activities.length){
        alert("Undefined Length \nRead Instruction!");
        return;
    }
    else{
        document.getElementById('result4').innerHTML = activities[len];
    }
   
}