// Old way:

let stuffFromAPI = {
	name: "Rob",
	career: "Teacher",
	langauge: "JavaScript"
}

let name = stuffFromAPI.name;
let career = stuffFromAPI.career
let langauge = stuffFromAPI.langauge

let newThingToPassToAPI = {
	name: name,
	career: career,
	langauge: langauge
}

// new way
let coolNewWay = {
	name,
	career,
	langauge
}
