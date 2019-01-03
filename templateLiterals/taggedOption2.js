// Write the coinTemplate tag that returns a function.
// The function it returns should accept an individual coin symbol (Example is btc for bitcoin, or eth for ethereum), and a DOM selector. 
// Build out the HTML via a template literal, making sure to include the html tags sent to the tag template. // Include the Name of the coin, the image, and the algorithm 
// Once the HTML is built, append it to the location that was passed in. 
// If there was no error, run the callback.

function uploadToDB(){
  console.log('Uploading to DB.');
}
 
axios.get('https://www.cryptocompare.com/api/data/coinlist/')
  .then(function (response) {
    console.log(response.data)
    // //////////////////
    const getCoins = coinTemplate`<div class="col-sm-12 col-md-6>${response.data.Data}${function(){uploadToDB()}}</div>`; //Finish this line. it needs 1. tags 2.ajax data, and 3. callback to uploadToDB()
    // //////////////////
 
    document.querySelector('#add-button').addEventListener('click', function(){
      let coin = document.querySelector('#coin').value.toUpperCase();
      let radios = document.getElementsByName('interest');
      // we cant map, because this is a nodelist, not an array. Good old for loop.
      let domEl;
      for(let i = 0; i < radios.length; i++){
        if (radios[i].checked){
          domEl = `#${radios[i].id}-content`;
          break;
        }
      };
       getCoins(coin, domEl); //this line is all set. It calls the function returned by your tag
    })
  })
  .catch(function (error) {
      console.log("ERROR!!!")
      console.log(error);
  });
 
 
var coinTemplate = function(elems, coinData, callback){
    // pre-parse the tags to make sure they are valid
    // Optionally also check for a valid tags
    return function(coin,location){
      try {
        const coinHTML = `
        ${elems[0]}
          <h3 class="name">${coinData[coin]['CoinName']}</div>
          <div class="coin-image"><img src="https://www.cryptocompare.com${coinData[coin]['ImageUrl']}" /></div>
          <div class="algorithm">${coinData[coin]['Algorithm']}</div>
        ${elems[1]}`
        document.querySelector(location).innerHTML += coinHTML
        callback()

      }catch(error) {
        console.log(error);
      }
    }
}