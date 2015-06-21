var testModule = (function() {
	var counter = 0;

	return {
		incrementCounter: function() {
			counter ++;
		},
		resetCounter: function() {
			console.log('stop counter from ' + counter);
			counter = 0;
		}
	};
})();

var myNameSpace = (function() {
	var myPrivateVar = 0,
	myPrivateMethod = function(foo) {
		console.log('this is private method - '+foo);
	};

	return {
		myPublicVar: 1,
		myPublicMethod: function(bar) {
			console.log(bar);
			myPrivateMethod('nice');
		}
	};
})();

console.log('=========================================');

console.log(myNameSpace.myPublicVar);
myNameSpace.myPublicMethod('elaa');

console.log('=========================================');

for(var i = 0; i < 5; i ++) {
	testModule.incrementCounter();
}
console.log('<<<<<<<<<< >>>>>>>>>>>>>');
testModule.resetCounter();

console.log('=========================================');
