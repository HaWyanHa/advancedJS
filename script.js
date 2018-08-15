// Function constructor
/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calculateAge = function () {       //very important prototypes
		console.log(2016 - this.yearOfBirth);
	};

Person.prototype.lastName = 'Smith';	//inheritance 

var john = new Person('John', 1990, 'teacher'); //this is called instancation



var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

//Object.create

/*
var personProto =  {
	calculateAge: function() {
		console.log(2016 - this.yearOfBirth);
	}
};


var john = Object.create(personProto);
john.name = 'John';
john.age = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job: { value: 'designer'}
});
*/


/*
//primitives versus objects

//primitives
var a = 23;
var b = a;
a = 46;
console.log(a,b);

//objects
var obj1 = {
	name: 'John',
	age: 26
};
var obj2 = obj1;    //obj1 is obj2 they are pointing to the same reference unlike the primitives above
obj1.age = 30;

console.log(obj1.age, obj2.age);

//functions
var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age, obj.city);  //you don't pass the object into the function, you pass the reference to the object!

*/
/*
var years = [1990, 1965, 1937, 2005, 1998];


function arrayCalc(arr, fn){
	var arrRes =[];
	for (i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el){
	return 2016 - el;
}

function isFullAge(el){
	return el >= 18;
}

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 -(0.67 * el));
	} else {
		return -1;
	}
}

var ages = arrayCalc(years, calculateAge);  //this is a callback function because it is not calculateAge()
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


*/

/*
function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you explain what UX design is?');
		};
	} else if (job ==='teacher'){
		return function(name) {
			console.log('What subject do you teach, ' + name);
		};
	}else {
		return function(name) {
			console.log('Hello, ' + name + ', what do you do?');
		};
	}
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

interviewQuestion('teacher')('Mike'); //interviewQuestion returns a FUNCTION, so instead of storing it in a VARIABLE we call it right away

*/

/*
function game(){
	var score = Math.random() * 10;
	console.log(score >= 5);
}

game();
*/

/*
(function () {
	var score = Math.random() * 10;   //we wrap this in parenthesis because in JS nothing in parenthesis can be a declaration/statements, must be an expression.
	console.log(score >= 5);
})();


(function (goodLuck) {
	var score = Math.random() * 10;  
	console.log(score >= 5 - goodLuck);
})(5);

*/

/*
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function (yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	};
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);



function interviewQuestion(job) {
	return function (name) {
		console.log('Hi, ' + name + ' you\'re a ' + job); //function returns a function, that is cleaner code so you can do something like: interviewQuestion('trapper')('Ryan');
	};
}

interviewQuestion('trapper')('Ryan');

var jobTeacher = interviewQuestion('teacher');
var jobDesigner = interviewQuestion('designer');

jobTeacher('John');
jobDesigner('Mark'); 
*/

/*
var john = {
	name: 'John',
	age: 26,
	job: 'teacher',
	presentation : function (style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		} else if (style === 'friendly') {
			console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay +'.');
		}
	}
};

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');  //this is called method borrowing the first argument when doing this is setting the: .this. variable

john.presentation.apply(emily, ['friendly', 'night']);  //this won't work but you can set it up using an array too


var johnFriendly = john.presentation.bind(john, 'friendly');     //the bind method allows us to preset some arguments it's also called (carrying)

johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');   //the first argument is always the: .this. variable
emilyFormal('afternoon');




var years = [1990, 1965, 1937, 2005, 1998];


function arrayCalc(arr, fn){
	var arrRes =[];
	for (i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el){
	return 2016 - el;
}

function isFullAge(limit, el){
	return el >= limit;
}


var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);

*/




var QuestionConstructor = function(variablesWeSetForThis) {
	//these areguments to the .this. variable of the functions execution contexts
	this.variablesWeSetForThis = variablesWeSetForThis;   //now we just constructed a function that creates an object.
};

var object = new QuestionConstructor('pass the arguments we set for this');  //new operator means an EMPTY object is created. THEN, the contructor function is called with the arguments we specify (variablesWeSetForThis)
//.this. will be set to the empty object that is created, not the global object.



//we use inheritence for methods(methods are just functions inside an object), add all the methods and propeties(we know what a property is) you want to inherit in the contructors prototype property

 QuestionConstructor.prototype.anyFunction = function(){  //you can do same thing using object.create

 }; //means you are adding a method to the prototype that will be inherited by QuestionConstructor.
//now you can do this to access that function instead of saving it in function contructor.
object.anyFunction();
//another way to add something to the prototype is below:
var object2 = {
	anyfunction: function() {
		//this will add a prototype to object2 and create an empty object (object.create way)
	}
};
var example = Object.create(object2);	//this will add a prototype to object2 and create an empty object (object.create way)
//you can also pass a second argument in the Object.create to fill out propeties, it is done in a special way, looks like Angular JS.





























var questionArray = [];



var Question = function(question, answer, correctAnswer){
	this.question = question;
	this.answer = answer;
	this.correctAnswer = correctAnswer;
};



var question1 = new Question('When was Ryan born?', [1988, 1965, 2000], 0);
var question2 = new Question('Is he white?', ['yes', 'no'], 1);
var question3 = new Question('favorite basketball team?', ['wizards', 'warriors']);
questionArray.push(question1, question2);


Question.prototype.displayQuestion = function() {
	console.log(this.question);
};
Question.prototype.displayAnswers = function() {
	console.log(this.answer);
};





function questionChoice(arr, fn){
	var x = (arr[(Math.round(Math.random()) * (questionArray.length -1))]);
	fn(x);
}

function displayQuestion2(el) {
	el.displayQuestion();
	el.displayAnswers();
}

questionChoice(questionArray, displayQuestion2);






























