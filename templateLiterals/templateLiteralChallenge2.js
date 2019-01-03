function uploadToDB(){
    console.log('Uploading to DB.');
  }
   
  axios.get('https://www.cryptocompare.com/api/data/coinlist/')
    .then(function (response) {
      // //////////////////
      const getCoins = ``; //Finish this line. it needs 1. tags 2.ajax data, and 3. callback to uploadToDB()
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
          // //////////////////
          // your stuff here...
          // //////////////////
        }catch(error) {
          console.log(error);
        }
      }
  }