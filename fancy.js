var numbers = [1, 12, 15, 30];
// for loop can print off all numbers
for (var i=0; i<numbers.length; i++) {
	console.log(numbers[i]);
};

// how could we print off every other numbers
for (var i=0; i<numbers.length; i+=2) {
	console.log(numbers[i]);
};

// "iterate through the list and do 'x' is good for forLoops
//forEach?

/* forEach style iteration...much more common for when we are inteested in 
processing each element*/
numbers.forEach (function(number){
	console.log(number);
});
//this is much more readable than a for loop. Easier to understand.
//practice in Chrome:

var derps = ["nerd", "snort", "shrug", "stare"];
derps.forEach (function(derps){
	console.log(derps);
});

for (var i = 0; i < derps.length; i++) {
	console.log(derps[i]);
};

for (var i = 0; i < derps.length; i+=3) {
	console.log(derps[i]);
};
//nerd stare
derps.forEach (function(derps){
	console.log(derps);
});


//moving on to ".map"
numbers = [1,2,3,4,5];
var newNumbers = [];
for (var i=0; i<numbers.length; i++){
	newNumbers[i] = numbers[i] *2;
};

newNumbers = numbers.map(function(number){
	return number * 2;
});
//that returned 2,4,6,8,10

//return upper cases using map
ingredients = ["salt", "water", "lemon", "pepper"]
newIngredients = ingredients.map(function(ingredients){
	return ingredients.toUpperCase() 
});


//return upper cases using forEach
ingredients.forEach (function(ingredients){
	console.log(ingredients.toUpperCase());
});
//DUDE I DID IT


/***************/
//function statement syntax:
function doStuff() {
	console.log('hello');
}
//function expression syntax:
var doOtherStuff = function() {
	console.log('hello again');
};

function reallyComplexFunction(name){
	console.log('hello' + name);
	console.log('bye' + name);
}
['joe', 'bob', 'janet', 'bart'].forEach(reallyComplexFunction);
//returns hijoe, byejoe, hibob, byebob, etc.



var n = numbers [1,2,3]

//way 1
var n = numbers.map(function(n){
	return n * 2
});
//way 2
function timesTwo(number) {
	return number * 2;
}

var n2 = number.map(timesTwo);

//create 2 different map and forEach using way #1 and way #2
