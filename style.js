//          Chapter No 21 - 25


// Question No 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + " " + lastName;
// console.log("Welcome Mr " + fullName);

// Question No 2
// var firstMob = prompt("Enter your favorite mobile phone model");
// console.log("My favorite phone is: " + firstMob);
// console.log("Length of string is: " + firstMob.length);

// Question No 3
// var str = "Pakistani";
// var ind = str.indexOf("n")
// console.log("Index of 'n' is: " + ind);

// Question No 4
// var str = "Hello World";
// var ind = str.lastIndexOf("l")
// console.log("Last index of 'l' is: " + ind);

// Question No 5
// var str = "Pakistani";
// var ind = str.charAt(3);
// console.log("Character at index 3 is: " + ind);

// Question No 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// console.log("Welcome Mr " + fullName);

// Question No 7
// var city = "Hyderabad";
// console.log("Before replacement the city name is '" + city + "'.\nAfter replacement is the city name is '" + city.replace("Hyder", "Islam") + "'.");

// Question No 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var arr = message.split(" ");
// for(var i=0; i<arr.length; i++){
//     if(arr[i] == "and"){
//         (arr.splice(i, 1, "&"));
//     }
// }
// console.log("Before replacement: " + message);

// console.log("After replacement: " + arr.join(" "));

// Question No 9
// var no = "472";
// console.log("Value: " + no + "\nType: " + typeof(no));
// var n = +no;
// console.log("Value: " + n + "\nType: " + typeof(n));

// Question No 10
// var favDryFruit = prompt("Enter your favorite Dry Fruit");
// console.log("Favorite Dry Fruit in lower case: " + favDryFruit.toLowerCase() + "\nFavorite Dry Fruit in upper case: " + favDryFruit.toUpperCase());

// Question No 11
// var sar = "javascript";
// var capCase = sar[0].toUpperCase();
// for(var i=1; i<sar.length; i++){
//     capCase += sar[i];
// }
// console.log(capCase);

// Question No 12
// var no = 35.36;
// var str = no.toString();
// console.log(str.replace(".", ""));

// Question No 13
// var pass = prompt("Enter your password");
// var result = false;
// for(var i=0; i<=pass.length; i++){
//     if((((pass.charCodeAt(pass[i])) > 47) && ((pass.charCodeAt(pass[i])) < 58)) || (((pass.charCodeAt(pass[i])) > 64) && (((pass.charCodeAt(pass[i])) < 91))) || (((pass.charCodeAt(pass[i])) > 96) && ((pass.charCodeAt(pass[i]) < 123)))){
//         result = true;
//     }
//     else{
//         result = false;
//         break;
//     }
// }
// if(result == true){
//     alert("Your password is valid");
// }
// else{
//     alert("Your password isn't valid\nEnter valid passowrd");
// }

// Question No 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var res = false;
// var sea = prompt("Welcome to sweet Bakery. What do you want to order?").toLowerCase();
// for(var i=0; i<A.length; i++){
//     if(A[i].toLowerCase() == sea){
//         res = true;
//         console.log("Yes! " + sea.toLowerCase() + " is available at index " + i);
//         break;
//     }
//     else{
//         res = false;
//     }
// }
// if(res == false){
//     console.log("No! " + sea.toLowerCase() + " isn't available.");
// }

// Question No 15
// var pass = prompt("Enter a password");
// if(((pass.charCodeAt(0) > 47) && (pass.charCodeAt(0) < 58)) || (pass.length > 6)){
//     console.log("Not Valid")
// }
// else{
//     console.log("Is valid")
// }

// Question No 16
// var university = "University of Karachi";
// var arr = university.split(" ");
// for(var i=0; i<arr.length; i++){
//     for(var j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// Question No 17
// var inp = "Pakistan";
// console.log("String: " + inp + "\nLast character of " + inp + " is " + inp[inp.length-1]);

// Question No 18
// var mess = "The quick brown fox jumps over the lazy dog in the";
// var arr = mess.split(" ");
// var j = 0;
// for(var i=0; i<arr.length; i++){
//     if(arr[i].toLowerCase() == "the"){
//         j++;
//     }
// }
// console.log("Text: " + mess + "\nThere are " + j + " occurrence(s) of word 'the'.")