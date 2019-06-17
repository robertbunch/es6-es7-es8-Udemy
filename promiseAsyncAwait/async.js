// REQUIRES AT LEAST NODE 7.6 
// 2 new keywords:
// 1. async
// 2. await

function one(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			console.log("Done!")
			resolve("2 seconds have passed!");
		},2000)
	});
}

async function two(){
	console.log("Calling function one")
	const oneResponse = await one();
	console.log(oneResponse)
}

// console.log("Calling function one")
// one().then((promiseData)=>{
	// console.log(promiseData)
// });
two();
console.log("Last line of the code");