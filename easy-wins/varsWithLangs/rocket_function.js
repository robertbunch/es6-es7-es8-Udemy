

// With jQuery
// Go get all coins, loop through each one
$('.coin').each(function(){
	// Get this coin's symbol
	let symbol = $(this).attr('coin');
	// console.log(symbol)

	$.getJSON(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${symbol}`)
		.then(function(response) {	
			console.log(this)
		// .then((response)=> {
			// console.log(this)

			console.log(response)
			$(this).html('$'+1/response[symbol])
	});
})


function Ball(){
	this.shape = "ball";
	this.speed = 500
	this.going = false;
	setInterval(()=>{
		if(this.going){
			console.log("I'm bouncing.");
		}else{
			console.log("Ball is still.");
		}
	},this.speed)	
}

Ball.prototype.go = function(){
	this.going = true
}

Ball.prototype.stop = function(){
	this.going = false;
}

var myBall = new Ball();

function makeBall(){
	myBall.go();
}

function stopBall(){
	myBall.stop();	
}