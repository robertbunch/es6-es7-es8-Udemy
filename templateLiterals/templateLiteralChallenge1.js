// With the template provided, write a tempalte tag that will validate an SQL statement:
// 1. Only SELECT or UPDATE statements are used
// 2. The password table is off limits
// 3. If there is no order by clause, add it and order by asc
// 4. When done, return the reconstructed query, or a note any errors



let city = `Chicago` //data we got from somewhere else (api or database)
let userId = 3; //data we got from somewhere else (api or database)
let command = `SELECT *`;
let table = `users`;
let whereClauses = [
 `uid = ${2+1}`,
 `OR city = ${city}`
]
 
// Your code to call the tag and log the return value here...
 
// Spread syntax is a more common and easy here if you are comfortable with it
function checkQuery() {
//Your validation code here...
 return(finalQuery); 
}