var someCar = {
	drive: function() {
		console.log('car name is ' + this.name)
	},
	name: 'Mazda 3'
};
// Use Object.create to generate a new car
var anotherCar = Object.create(someCar);
console.log(anotherCar.name); // Now you'll hopefully see that one is a prototype of the other
anotherCar.name = 'lancer';
anotherCar.drive();