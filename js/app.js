/* setup your angular app here */
console.log('test started')
var app = angular.module('FruitList', []);
app.controller('fruitCtrl', ['$scope', function($scope){
	 $scope.fruitList = [];
	 $scope.vegiList = [];
	 $scope.mix = [];

	$scope.left = function(){
		if(true){
			$scope.fruitList.push($scope.mix[this.$index]);
			$scope.mix.splice(this.$index, 1);
		}
	}
	$scope.right = function(){
		if(true){
			$scope.vegiList.push($scope.mix[this.$index]);
			$scope.mix.splice(this.$index, 1);
		}
	}
	$scope.leftCenter = function(){
		if(true){
			$scope.mix.push($scope.fruitList[this.$index]);
			$scope.fruitList.splice(this.$index, 1);
		}
	}
	$scope.rightCenter = function(){
		if(true){
			$scope.mix.push($scope.vegiList[this.$index]);
			$scope.vegiList.splice(this.$index, 1);
		}
	}

	$scope.fruits = [
	  'Apple',
	  'Apricot',
	  'Banana'
	];
	$scope.vegetables = [
	  'Artichoke',
	  'Arugula',
	  'Asparagus'
	];



	 $scope.mix = $scope.fruits.concat($scope.vegetables);


}])
// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
