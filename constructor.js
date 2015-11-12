var personOne = {
	name: 'Beth',
	age: 20, 
	greatestFear: 'clowns'
};

var personTwo = {
	name: 'Joe',
	age: 15, 
	greatestFear: 'unusually large circles'
};



function Person(name, age, greatestFear) {
	this.name = name;
	this.age = age;
	this.greatestFear = greatestFear;
}

//is sort of the same thing as:
var p1 = new Person('Beth', 20, 'clowns');
var p2 = new Person('Joe', 15, 'unusually large circles');

var p3 {};
p3.name = 'Beth'
p3.age = 20
p3.greatestFear = 'clowns';

/*******************************/
//make a constructor using the object from earlier
/*
var popMusic = {
	boyBands: ["Backstreet Boys", "NKOTB", "N'Sync"],
	subjectMatter: {
		drinking: "Raise Your Glass",
		breakingUp: "You Oughta Know",
		dancing: "Who Let The Dogs Out"},
	bpm: [120, 160, 80]
}*/

function PopMusic(boyBands, subjectMatter, bpm) {
	this.boyBands = boyBands;
	this.subjectMatter = subjectMatter;
	this.bpm = bpm;
}

var playList = new PopMusic("Dio", "emo", "112");

