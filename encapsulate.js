var TvSeries = (function() {
	 //private static attributes
	var noOfTvShows = 0;
	var noOfSeasonsCount = 0;
	var tvShowList = [];

	//private static methods
	function checkName(name) {
		console.log(name + ' is valid or not ?');
		return true;
	}

	return function(name, seasonCount, director) {
		//private attributes
		var name, director, seasonCount;

		//privileged methods
		this.getName = function() {
			return name;
		};

		this.setName = function(newName) {
			// console.log('new name is ' + newName);
			if (!name) {
				throw new Error('you need to define a name to tvshow');
			} else if(tvShowList.indexOf(newName) > 0) {
				throw new Error(newName + ' is already exists');
			}
			var tvSeriesIndex = tvShowList.indexOf(name);
			if (tvSeriesIndex > 0) {
				tvShowList.splice(tvSeriesIndex, 1, newName);
			}
			name = newName;
		};

		this.getSeasonCount = function() {
			return seasonCount;
		};

		this.setSeasonCount = function(newSeasonCount) {
			// console.log('new name is ' + newName);
			seasonCount = newSeasonCount;
		};		

		this.getDirector = function() {
			return director;
		};

		this.setDirector = function(director) {
			this.director = director || 'No director specified';
		};

		this.totalTvShowCount = function() {
			console.log('the number of tv shows ===>>>');
			return noOfTvShows;
		};

		this.totalSeasonCount = function() {
			console.log('the number of season count ===>>>');
			return noOfSeasonsCount;
		};

		this.getWatchedTvShows = function() {
			return tvShowList;
		};

		//constructor code
		noOfTvShows ++;
		noOfSeasonsCount += seasonCount;		

		this.setName(name);
		this.setDirector(director);
		tvShowList.push(name);
	};
})();

TvSeries.prototype = {
	play: function() {
		console.log(this.getName() + ' is playing now');
	},
	totalTvShowCount: function() {

	}
};

var supergirl = new TvSeries('supergirl', 1);
var arrow = new TvSeries('arrow', 3);
var flash = new TvSeries('flash', 1);
var mif = new TvSeries('murder in the first', 1);
var mif = new TvSeries('murder in the first', 1);
var got = new TvSeries('game of thrones', 5);
// var got = new TvSeries('game of thrones', 5);

mif.setName('teen wolf');
arrow.play();
// var updatedName = arrow.getName();
// console.log('updated name is === ' + updatedName);
console.log(arrow.totalTvShowCount());
console.log(arrow.totalSeasonCount());
console.log('=====================================================');
console.log(got.getWatchedTvShows());