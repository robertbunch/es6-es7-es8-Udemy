// // iterators
// An iterator is just a sequence generator
// A sequence is an ordered list of values. Not unique, and not sorted.
// An array is the most obvious sequence in programming.
// You can put anything in any index. What's is there, the array expects it to be there unless moved
// Consider a for loop overan array:
// let myArray = [1,6,"hambone",9,1];
// for(let i = 0; i<myArray; i++){

// }
// Step 1 of the loop: init the incrament var (i) to 0
// Step 2: Conditional to see if i <
// Step 3: Run body if true
// Step 4: incrament i

// This IS an iterator!

// 	   |--->False-----|
// 1 ---> 2---->3		  -> End
// 	   |	 |
// 	    -<4<--

// A rewind method (step 1) reset i to 0
// A valid method (step 2) check to see if i <
// Code
// A next method (step 3) which incraments i

// An iterator has:
// 1. rewind
// 2. valid
// 3. next
// 4. key (get the current key)
// 5. current (value of the current key)


// Build a foreach class?
// Build a foreach class?


// Iterators are awesome because it uses very little memory. If you need a massive range, in python you might do:
// x = range(10)
// for i in x:
//   print i
// This instantly creates a list of 10 numbers. You don't really need 10 numbers, you just need to 
// know where you are, where you were, and what's next.
// This gives it a bigO of (1) because whatever number you are at in the list, you can do +1 or -1
// A fucntion with an * makes it a generator (corouting in computer sceince)
// It will return whatever is handed to yield, and remember where it was, when called again
// It brings iterators into the langauge. (See Jonathan's talk or my course)

function* counter() {
    let i = 0;
    while(true) {
        const reset = yield i++;
        if(reset) {
            i = 0;
        }
    }
}

const gen = counter();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next(true).value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log("Hello")
console.log(gen.next().value); // 2