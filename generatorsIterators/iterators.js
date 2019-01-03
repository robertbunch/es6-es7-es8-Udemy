// Iterators
// An iterator follows the iterator protocol

// Strings are iterables NOT iterators!!!!!!!

const aString = "Hello!";
console.log(aString[Symbol.iterator]().next());

function makeRangeIterator(start, end, step){
	let nextIndex = start;
	let returned = false;
	return {
		next: function(){
			let result = {};
			if(nextIndex < end){
				result = {
					value: nextIndex,
					done: false
				}	
				nextIndex += step	
			}else if(!returned){
				result = {
					value: nextIndex,
					done: true
				}
				returned = true;
			}else{
				result = {
					done: true
				}
			}
			return result;
		}
	}
}


var it = makeRangeIterator(1, 100, 6);

var result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // 5