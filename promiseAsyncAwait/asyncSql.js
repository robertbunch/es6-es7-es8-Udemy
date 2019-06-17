// 1. take the user's username and password and check if they exist in the db.\
// 2. if they do...\
// 	2a. Update the token, and send it back\
// 3. If they don't, then respond accordingly

const config = {
	host: "127.0.0.1",
	user: "x",
	password: "x",
	database: "promisesAsync",
}

const mysql = require('mysql');

const connection = mysql.createConnection(config);
connection.connect()

const username = `bill`;
const password = `b`;

// const checkLoginQuery = `SELECT * from Users WHERE username = "${username}" AND password = "${password}"`
// connection.query(checkLoginQuery,(error, results)=>{
// 	if(error){
// 		throw error;
// 	}
// 	if(results.length === 1){
// 		const updateTokenQuery = `UPDATE Users SET token = "4yh45Yyh45g$R#%$TRtrwfjmykut54" WHERE id = ${results[0].id}`
// 		connection.query(updateTokenQuery,(error,results)=>{

// 		})
// 	}
// })

const checkLoginQuery = `SELECT * from Users WHERE username = "${username}" AND password = "${password}"`
function checkLogin(){
	return new Promise((resolve, reject)=>{
		connection.query(checkLoginQuery,(error, results)=>{
			if(error){
				reject(error)
			}else if(results.length == 1){
				resolve(results[0].id)
			}else{
				resolve(false)
			}
		})
	})
}

async function updateToken(){
	console.log("Updating Token...")
	const usersId = await checkLogin()
	console.log(usersId)
	if(usersId){
		const updateTokenQuery = `UPDATE Users SET token = "C" WHERE id = ${usersId}`
		connection.query(updateTokenQuery,(error,results)=>{

		})
		console.log("User Updated")
	}	
}

updateToken();