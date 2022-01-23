
// HOMEWORK PART 1

// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

let title = document.getElementsByTagName("title")[0];
title.innerText = 'blabla';

let  header1New = document.getElementById('myTitle');
header1New.textContent = 'Nooo! Not cool page';

let firstParagraph = document.querySelector(".paragraph");
firstParagraph.innerText = "Not an exercise. It's pretty hard";

let secondParagraph = document.getElementsByClassName("second")[0];
secondParagraph.innerText = "Yeah really, It's hard";

let textTag = document.querySelector("text");
textTag.textContent = "It is NOT about selecting elemenets and something";

let header3New = document.getElementsByTagName("h3")[0];
header3New.innerText = "The last header in this webpage";

let header2New = header3New.previousElementSibling;
header2New.innerText = "DONT CHANGE THIS"


// HOMEWORK PART 2

// Print all numbers from an array and the sum
// Create an array with numbers
// Print all numbers from the array in a list element, in a new HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let myArray = [5, 10, 15, 20, 25];
let myList = document.getElementById("myDiv");


myList.innerHTML += "<ul>" 
for(let numbers of myArray) {
    myList.innerHTML += `<li> ${numbers} </li>`;
}
"</ul>"

let sum = 0;
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
myList.innerHTML += `The sum of numbers in array is ${sum}`;





