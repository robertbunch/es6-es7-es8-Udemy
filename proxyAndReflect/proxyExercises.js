// 1. SET

// Rewrite the sample code below so that every time a property is set a callback runs. Your callback will check if the property changing is employees. 

// If it is, ensure the datatype is an Array, a string, or Null. If anything else comes in, respond with an appropriate message.

// If it's not, let it pass

const handler = {
	set: (target, propName, newValue)=>{
		if(propName === `employees`){
			// we need to validate!	
			switch(typeof(newValue)){
				case `string`:
					target[propName] = newValue;
				case `object`:
					// this is an object. Is it:
					// 	an array? null?
					if((Array.isArray(newValue)) || (newValue === null)){
						target[propName] = newValue;
						break;
					}
				default:
					throw new TypeError(`Invalid datatype. Only arrays, strings, and null are valid.`)	
			}		
		}else{
			target[propName] = newValue
		}
	}	
}

let manager = {
	office: `Dubai`,
	dept: `Sales`,
	employees: 0
};

// console.log("========")
// console.log(typeof([]))
// console.log("========")

let managerProxy = new Proxy(manager, handler);

// managerProxy.office = `London` //updates
// managerProxy.employees = [`Jim`,`Patrick`,`Marie`] //updates
// try{
// 	managerProxy.employees = 3 // does not update
// }catch(err){
// 	console.log(err)
// }
// managerProxy.employees = null //updates

// managerProxy.employees = {name: `Jim`} //does not update
// console.log(managerProxy)

// 2. APPLY (node only) 

// You have a heavy lifting function. Every time it's called, you need to keep track in a log, but the server logs don't provide quite what you need. Write a proxy that will append to a file, the name of the function, the params sent through, and the date.

function importantFunction(){
	console.log("Important stuff here. No need to change.")
}

const fs = require('fs');
const importantHandler = {
	apply: (target, thisArg, argsList)=>{
		// console.log()
		fs.appendFile('proxyLog.txt', `${target.name}, ${argsList}, ${new Date()}\n\n`, (err)=>{
			if(err) throw err;
		})
		// STILL NEED TO CALL THE FUNCTION
		target(...argsList)
	}	
}


const importantProxy = new Proxy(importantFunction, importantHandler);
importantProxy(`a Param`);

// 3. GET

// Adjust the following code so that anytime an internal object with accessLevel of 1 is accessed, "Access Denied is returned."

const users = [
	{
		username: `bob`,
		accessLevel: 1,
		accessCode: 1234
	},
	{
		username: `Mary`,
		accessLevel: 2,
		accessCode: 2345
	},
	{
		username: `Harold`,
		accessLevel: 2,
		accessCode: 9999
	},
]

const userHandler = {
	get: (target, propName)=>{
		if(target[propName].accessLevel === 1){
			return {
				username: "Access Denied",
				accessLevel: "Access Denied",
				accessCode: "Access Denied",
			}
		}else{
			return target[propName]	
		}
	}
}

let userProxy = new Proxy(users, userHandler)

console.log(userProxy[0].username) //Access Denied
console.log(userProxy[0].accessCode) //Access Denied
console.log(userProxy[1].accessCode) //2345
console.log(userProxy[2].username) //Harold


