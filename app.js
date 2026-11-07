// Question 01  Counting Generator 
//Solution

// for(var i=1; i<=100; i++){
// console.log(i)
// }



// Question 02  Reverse Counting 
//Solution

// for(var i=50; i>=1;i--){
// console.log(i)
// }


// Question 03 Even & Odd Number Generator 
// Solution

// for (var i=2; i<=50; i=i+2){
//     console.log(i)

// }

// for(var i=1; i<=50; i=i+2){
//     console.log(i)

// }



// Question 04 Multiplication Table 
// Solution


// var userNumber = prompt("Enter Your Table Number");
// for (var i=1 ;  i<=10;i++){
// document.write("<h1> "+ userNumber + " x " +i+ " = " +userNumber* +i+ "</h1>")
// }





// Question 05  Sum of Natural Numbers 
// Solution




// var N = +prompt("Enter a positive integer:");
// var sum = 0;

// for (var i = 1; i <= N; i++) {
//     sum = sum + i;
// }

// console.log("Sum =", sum);



// Question 06  Display Array Elements 
// Solution

// var userName = ["ali", "asad", "aftab","aman","asif","asim","awais","areeb"];

// for (var i = 0; i < userName.length ; i++) {
//       console.log( i + 1 ,userName[i]);
// }



// Question 07  Find Largest & Smallest 
// Solution


// var numbers = [45, 12, 89, 3, 67, 22, 91, 10];

// var largest = [0];
// var smallest = numbers[0];

// for (var i = 0; i < numbers.length; i++) {

//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }

//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }
// }

// console.log("Largest:", largest);
// console.log("Smallest:", smallest);




// Question 08  Reverse an Array 
// // Solution
// var Fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// for (var i = Fruits.length -1; i >= 0; i--){
//     console.log(Fruits[i])

// }



// Question 09  Filter Passing Students 
// Solution

// var marks =[ 85,42,67,30,90,55,25,78];

// var passingMarks =[];

// for (var i = 0; i <marks.length;i++){
//     if(marks[i] >=50){
//         passingMarks.push(marks[i]);

//     }

// }
// console.log("Passing Marks:", passingMarks);
// console.log("Total Passed:", passingMarks.length);


// Question 10  Sum & Average of Array
// Solution

// var Prices = [1200, 850, 430, 1600, 990];
// var total = 0;

// for (var i = 0; i < Prices.length; i++) {
//     total = total + Prices[i];
// }

// var average = total / Prices.length;

// console.log("Total:", total);
// console.log("Average:", average);



// Question 11  Student Name Search 
// Solution

// var Students = ["Ali","Ahmed","Sara","Hamza","Ayesha"];
// var name =prompt("Enter a student name.");
// var isMatch=false;
// for( var i =0; i<Students.length; i++){

//     if(name==Students[i]){
//         isMatch=true;
//         alert("Student Found ! ");
//         break
//     }
// }
// if(isMatch==false){
//     alert("Student Not Found!");

// }
// console.log("isMatch:",isMatch)







// Question 12  Find a Number
// Solution


// var numbers = [10, 25, 40, 55,70, 85, 100];
// var num =+prompt("Enter a number.");
// var isMatch=false;
// for( var i =0; i< numbers.length; i++){

//     if(num==numbers[i]){
//         isMatch=true;
//         alert("Number found at index " + i);
//         break
//     }
// }
// if(isMatch==false){
//     alert("Number Not Found!");

// }
// console.log("isMatch:",isMatch)





// Question 13  Filter Numbers 
// Solution


// var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];

// var positive = [];
// var negative = [];
// var zeros = [];

// for (var i = 0; i < numbers.length; i++) {

//     if (numbers[i] > 0) {
//         positive.push(numbers[i]);
//     }
//     else if (numbers[i] < 0) {
//         negative.push(numbers[i]);
//     }
//     else {
//         zeros.push(numbers[i]);
//     }
// }

// console.log("Positive:", positive);
// console.log("Negative:", negative);
// console.log("Zeros:", zeros);




// Question 14  Remove Duplicate Numbers
// Solution


// var numbers = [10, 20, 10, 30, 20, 40, 30, 50 ];
// var unique =[];
// for (var i =0; i<numbers.length;i++){
//     var found =false;

//     for (var j =0; j <unique.length;j++){

//         if (numbers[i]==unique[j]){
//             found=true;
//             break;
//         }
//     }
// if (found==false){
//     unique.push(numbers[i]);
// }

// }

// console.log(unique);




// Question 15  Star Triangle 
// Solution


// for (var i = 1; i <= 5; i++) {

//     var stars = "";

//     for (var j = 1; j <= i; j++) {
//         stars = stars + "*";
//     }

//     console.log(stars);
// }




// // Question 16 Reverse Star Triangle
// // Solution

// for (var i = 5; i >= 1; i--) {
//     var stars = "";

//     for (var j = 1; j <= i; j++) {
//         stars = stars + "*";
//     }

//    console.log(stars);
// }





// Question 17  Number Triangle
// Solution

// for (var i=1; i<=5; i++){

//     var stars="";

//     for(var j = 1; j <= i; j++){

//         stars = stars + j;

//     }

// console.log(stars);
// }




// Question 18  Multiplication Table Grid
// Solution

// for (var i = 2; i <= 5; i++){
//     console.log("Table of "+ i);

//     for (var j = 1; j <= 10;j++){
//         console.log(i + " x " + j + " = " + (i * j));

//     }
//     console.log("--------------");
// }






// Question 19  Student Result Analyzer
// Solution


// var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];
// var marks = [78, 92, 45, 88, 33];

// var passed = 0;
// var failed = 0;
// var total = 0;

// var highest = marks[0];
// var topStudent = students[0];

// for (var i = 0; i < students.length; i++) {

//     // Total marks
//     total = total + marks[i];

//     // Student PASS or FAIL
//     if (marks[i] >= 50) {
//         console.log(students[i] + " - " + marks[i] + " - PASS");
//         passed++;
//     }
//     else {
//         console.log(students[i] + " - " + marks[i] + " - FAIL");
//         failed++;
//     }

//     // Highest marks
//     if (marks[i] > highest) {
//         highest = marks[i];
//         topStudent = students[i];
//     }
// }

// // Class average
// var average = total / students.length;

// console.log("Total Students:", students.length);
// console.log("Passed:", passed);
// console.log("Failed:", failed);
// console.log("Top Student:", topStudent + " (" + highest + ")");
// console.log("Class Average:", average);





// Question 20  Mini Shopping Cart
// Solution



// var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];
// var prices = [2500, 1200, 22000, 800, 3500];

// // Display all products
// console.log("----- Products List -----");

// for (var i = 0; i < products.length; i++) {
//     console.log((i + 1) + ". " + products[i] + " - Rs " + prices[i]);
// }

// // Ask product number
// var productNumber = +prompt("Enter Product Number (1-5):");

// // Ask quantity
// var quantity = +prompt("Enter Quantity:");

// // Validate selection and quantity
// if (productNumber >= 1 && productNumber <= 5 && quantity > 0 && Number.isInteger(quantity)) {

//     var index = productNumber - 1;

//     var product = products[index];
//     var price = prices[index];

//     var subtotal = price * quantity;
//     var discount = 0;

//     if (subtotal >= 5000) {
//         discount = subtotal * 10 / 100;
//     }

//     var finalBill = subtotal - discount;

//     // Display final bill
//     console.log("----- Final Bill -----");
//     console.log("Product:", product);
//     console.log("Unit Price: Rs", price);
//     console.log("Quantity:", quantity);
//     console.log("Subtotal: Rs", subtotal);
//     console.log("Discount: Rs", discount);
//     console.log("Final Bill: Rs", finalBill);

// }
// else {
//     console.log("Invalid Product Number or Quantity!");
// }