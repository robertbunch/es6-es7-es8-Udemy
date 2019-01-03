// Array.from

const x = Array.from(`Robert`);
console.log(x)

const y = Array.from(`${3+5}49`);
console.log(y)

let harry = `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense.`;
let lotr = `When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton.`
let orwell = `It was a bright cold day in April, and the clocks were striking thirteen.” — 1984, George Orwell`

let lines = Array.from([harry, lotr, orwell],(line)=>{
	return `<li>${line}</li>`
});
console.log(lines)

let numbers = Array.from([2,3,4],(num)=>num+num);
console.log(numbers)