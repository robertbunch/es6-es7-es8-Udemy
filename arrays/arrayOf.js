// Array.of()

const arr1 = Array.of(7);
const arr4 = [7];
console.log(arr1);

const arr2 = Array(7);
console.log(arr2)

const arr3 = Array.of(7, "Hulk", [23,12,5],{sport:"baseball"})
console.log(arr3);

// Polyfill
if(!Array.of){
	Array.of = function(){
		return Array.prototype.slice.call(arguments);
	}
}