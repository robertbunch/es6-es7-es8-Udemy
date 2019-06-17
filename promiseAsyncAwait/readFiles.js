// 1. Get file names (from the files in data.zip) using fs modules readdir. 
// 2. Loop through and print off the name of each file in the dir
// 3. Using readFile (NOT readFileSync), read the files and in the callback, print the filename. Note: They will not be the same as in the previous step. 
// 4. Look at the file contents, count up the total number of the string "gotYa" in each. Print an array that has the count for each file in ascending order. For a little more work, make it an object with a key of file name, value of count instead. 
// 5. As soon as the full contents of any single are read, print them out. Do not wait for any other file to complete.

const fs = require('fs');

fs.readdir('./data', (err, files) => {

	// I want each iteration through files to return a promise
	// Switch the forEach to a map
	// Cast the data from readFile into a String so we can manipulate it as a string
	// We are rejecting if the readFile errors
	// We are resolving the data if readFile succeeds
	// Once ALL promises are done, run a then against Promise.all

	const filePromises = files.map((fileName,index) => {
		return new Promise((resolve, reject)=>{			
			// console.log(index,fileName);
			fs.readFile(`./data/${fileName}`, (err, data) => {
				// console.log(fileName);
				if (err) reject(err);
				resolve({
					fileName,
					data:String(data)
				});
			});			
		})
	});

	// Promise.all takes 1 arg: an array of promises!
	Promise.all(filePromises).then((fileContentArray)=>{
		const arrayCount = fileContentArray.map((fileObj)=>{
			// console.log(fileContents)
			// console.log("==================")
			const matches = fileObj.data.match(/gotYa/g);
			if(matches){
				return {
					[fileObj.fileName]: matches.length	
				}
			}else{
				return {
					[fileObj.fileName]: 0
				}
			}
		});
		// console.log(arrayCount)
		const orderedArray = arrayCount.sort((a, b)=>{
			return a - b
		});
		console.log(orderedArray)
	})

	// Promise.race takes 1 arg: an array of promises!
	Promise.race(filePromises).then((file)=>{
		// file is the first promise in the filePromises array to resolve
		console.log("The race is over. The winner is...")
		console.log(file)
	})

});
