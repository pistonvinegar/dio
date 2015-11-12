var myFirstObject = {name: 'john', age: 32}
//basically same as:
var anArray = ['John', 32];

//how do you get john from the array?
anArray[0];
//how do you get john from the object
myFirstObject['name'];

//how do you get age using the object version?
myFisrtObject['age'];

//object using the array:
var mySillyObject = {1: 32, 0: 'John'}

/*just like we can put arrays in arrays, we can put objects in objects. 
Let's describe Lauren using an object */

//this example carries more meaning than the array expression
var ta = {
	mentalState: 'happy',
	origin: 'here',
	favAnimals: ['lions', 'pandas', 'bears', 'otters']
};
//same thing, using array
var ta2 = [
	'happy',
	'here'
	'lions', 'tigers', 'bears', 'oh my'];

//make an array and make an object and justify your choice for each
//I suck

//make 2 objects that are similar. Like these!



var pizzas = {
    toppings: ["pepperoni", "cheese", "mushrooms", "anchovies"],
    sauce: "marinara",
    size:18, 
    crust:{
        type1: "thin", 
        type2: "pan", 
        type3:"deep dish"}
};

var sandwiches = {
    bread: {
        q1:"wheat", 
        q2:"white", 
        q3:"baggette", 
        q4:"wonder"},
    meat:["turkey", "ham", "salami"], 
    veggies: false,
    cheese: "chedder",
    condiments: ["mayo", "mustard", "ketchup"]
}

var lunchOptions = [];

lunchOptions.push(pizzas, sandwiches);

//wtf is this "push" b.s.?

//plus sign = "concatenate"



var popMusic = {
	boyBands: ["Backstreet Boys", "NKOTB", "N'Sync"],
	subjectMatter: {
		drinking: "Raise Your Glass",
		breakingUp: "You Oughta Know",
		dancing: "Who Let The Dogs Out"},
	bpm: [120, 160, 80]
}

var rockMusic = {
	bands: ["Muse", "Iron Maiden", "AC/DC"],
	instruments: ["drums", "bass", "guitar", "singer"],
	subGenre: {
		punk: "Green Day",
		pop: "Panic! At the Disco",
		metal: "Metallica"}
}

var musicGenres = [];

musicGenres.push(popMusic, rockMusic);

console.log ("My dream cover is " + musicGenres[0].boyBands[1] + " singing " + musicGenres[0].subjectMatter.dancing + "!");



