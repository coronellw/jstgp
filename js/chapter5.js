// window.onload = function() {
// 	console.log("Chapter 5 ...");
// };

function baseClass(){
	this.publicProperty = 'Some value';
};

baseClass.prototype = {
	doThis : function(){ console.log("this") },
	doThat : function(){ console.log("that") }
};

function myClass() {
};

myClass.prototype = Object.create(baseClass.prototype);
var obj = new myClass();

console.log(obj.publicProperty);
console.log(obj);

obj.doThis();
obj.doThat();

myClass.prototype = new baseClass();
obj = new myClass();
console.log(obj.publicProperty);
console.log(obj);

obj.doThis();
obj.doThat();

var myMammal = {
	name : "Wins, the cat",
	get_name : function() {
		return this.name;
	},
	says :  function() {
		return this.saying || '';
	},
	action_performed : function(n, action) {
		// alert("called action_performed with n:" + n +" and action :" +action);
		var i, s = '';
		for (i = 0; i < n; i++) {
			if (s) {
				s+='-';
			}
			s += action;
		};
		return s;
	}
};

var myCat = Object.create(myMammal);
myCat.name = "Wins";
myCat.saying = "meow";
myCat.purring = function(n) {
	return this.action_performed(n,'r');
};
myCat.get_name = function () {
	return this.says() + ' ' + this.name + ' ' + this.says();
}

var myDog = Object.create(myMammal);
myDog.name = 'Randy';
myDog.saying = 'bark';
myDog.barking = function(n){
	return this.action_performed(n,'bark');
};
myDog.get_name = function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
}

console.log('Purring: ' + myCat.purring(4) + '\nno bark: ' + myCat.barking + ' \nname: ' + myCat.get_name());

console.log('Barking: ' + myDog.barking(4) + '\nno purr: ' + myDog.purring + '\nname: ' + myDog.get_name());

console.log("'' == '0' is actually " + (''=='0') + " while ('' === '0') is " + ('' === '0')); // false
console.log("0 == '' is actually " + (0=='') + " while (0 === '') is " + (0 === '')); // true
console.log("0 == '0' is actually " + (0=='0') + " while (0 === '0') is " + (0 === '0')); // true
console.log("false == 'false' is actually " + (false=='false') + " while (false === 'false') is " + (false === 'false')); // false
console.log("false == '0' is actually " + (false=='0') + " while (false === '0') is " + (false === '0')); // true
console.log("false == undefined is actually " + (false==undefined) + " while (false === undefined) is " + (false === undefined)); // false
console.log("false == null is actually " + (false==null) + " while (false === null) is " + (false === null)); // false
console.log("null == undefined is actually " + (null==undefined) + " while (null === undefined) is " + (null === undefined)); // true