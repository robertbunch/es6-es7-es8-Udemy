
const aString = new String("Hi");
console.log(aString[Symbol.iterator]);
// for(let letter of aString){
// 	console.log(letter)
// }

aString[Symbol.iterator] = function(){
	// return an object... this IS the iterator object
	// It MUST have a next property
	return {
		allDone: false,
		counter: 0,
		next: function(){
			if(!this.allDone){
				this.counter++;
				if(this.counter === 6){
					this.allDone = true;
				}
				return {
					value: "Haha, you expected letters and didn't get any!",
					done: false
				}				
			}else{
				return{
					done: true
				}
			}
		}
	}
}

for(letter of aString){
	console.log(letter)
}
