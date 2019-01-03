
// // Generators ARE ITERATORS!
// function* counter(){
// 	let i = 0;
// 	// while(true){
// 		const dataFromNext = yield i++;
// 		if(dataFromNext){
// 			i = 0;
// 		}
// 	// }
// }

// const myGenerator = counter();
// console.log(myGenerator);
// console.log(myGenerator.next().value)
// console.log(myGenerator.next().value)
// console.log(myGenerator.next().value)
// console.log(myGenerator.next().value)
// console.log(myGenerator.next(true).value)
// console.log(myGenerator.next().value)
// console.log(myGenerator.next().value)

// function myIterator(myArray){
// 	let i = 0;
// 	return {
// 		next: ()=>{
// 			if(i < myArray.length){
// 				return {
// 					value: myArray[i++],
// 					done: false
// 				}
// 			}else{
// 				return{
// 					done: true
// 				}
// 			}
// 		}
// 	}
// }

function* myIterator(myArray){
	for(let i = 0; i < myArray.length; i++){
		yield myArray[i];
	}
}


const anArray = [1,4,54,3,45,62345,413,354,2];
const gen = myIterator(anArray);
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
for(let elem of gen){
	console.log(elem)
}

function* inigo(){
	yield "Hello. My name is inigo montoya."
	yield "You killed my father. Prepare to die."
}

function* countR(){
	yield "Good heavens, are you still trying to win?"
	yield "You’ve got an overdeveloped sense of vengeance, that’s going to get you in trouble someday."
	yield* inigo();
	yield* inigo();
	yield* inigo();
	yield "Stop saying that!"
	yield* inigo();
}

const princessBride = countR();
// console.log(princessBride.next().value)
// console.log(princessBride.next().value)

// console.log(princessBride.next().value)
for(let lines of princessBride){
	console.log(lines)
}