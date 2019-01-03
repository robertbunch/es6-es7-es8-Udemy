// WeakSet
// Unlike set, WeakSet can ONLY hold objects
// Like WeakMap, the primary gain, is garbage collection. Uses weak reference
// It is not iterable, is no get method, size is ALWAYS 0

let harry = {
	name: `Harry`,
	id: 12
}
let sherry = {
	name: `Sherry`,
	id:7
}

let employeeIds = new WeakSet();
employeeIds.add(harry);
employeeIds.add(sherry);
console.log(employeeIds.has(harry));
console.log(employeeIds.has(undefined));