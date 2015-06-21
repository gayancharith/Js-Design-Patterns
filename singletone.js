var singletoneTester = (function() {
	function singleTone(options) {
		this.name = options.name;
	}

	var instance;

	return {
		getInstance: function(options) {
			if (instance === undefined) {
				instance = new singleTone(options);			
			}
			return instance;			
		}
	};
})();

console.log('=========================================');

var singletoneTest = singletoneTester.getInstance({name: 'gayan'});
console.log(singletoneTest.name);


console.log('=========================================');