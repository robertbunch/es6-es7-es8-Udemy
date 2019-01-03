// With the template provided, write a tempalte tag that will validate an SQL statement:
// 1. Only SELECT or UPDATE statements are used
// 2. The password table is off limits
// 3. If there is no order by clause, add it and order by asc
// 4. When done, return the reconstructed query, or a note any errors



let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `password`;
let whereClauses = [
 `uid = ${2+1}`,
 `OR city = ${city}`
]
// let order = `desc`
 
// Your code to call the tag and log the return value here...
const validateQuery = checkQuery`${command} FROM ${table} WHERE ${whereClauses}`
console.log(validateQuery)

// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery(strings, command, table, whereClauses, order) {
//Your validation code here...
	if((command.indexOf(`SELECT`)) == -1 && (command.indexOf(`UPDATE`)) == -1){
		return (`You are only privilaged to make SELECT and UPDATE.`)
	}else if(table === `passwords`){
		return (`You are not privilaged to alter that table.`)
	}else if(!order){
		order = ` ORDER BY asc`
	}
	const finalQuery = `${strings[0]}${command}${strings[1]}${table}${strings[2]}${whereClauses.join(' ')}${strings[3]}${order}`
 return(finalQuery); 
}