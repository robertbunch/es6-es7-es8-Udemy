$('.city').each(function(){
	const city = $(this).attr('city');
		$.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=imperial`)
		// .then(function(response) {	
			// console.log(this)
		.then((response)=> {
			console.log(this)

			console.log(response)
			$(this).html(`${response.main.temp} &deg;f`)
	});
})