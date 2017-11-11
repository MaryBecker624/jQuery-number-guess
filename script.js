console.log('script!');

var numberOfClicks = 0;

$(document).ready(readyNow)



    function newGuess(){
        //log "this new guess button has been clicked x times"
        numberOfClicks++
        var clickString = 'new guess button was clicked ' + numberOfClicks + 'of times';
        console.log(clickString);
        $('#clickCountField').text('This new guess button has been clicked ' + numberOfClicks + 'of times!')

        //For the guess checking functionality
        var numberGuess = $('#numberGuessInput').val();           //selector
        console.log(numberGuess);

        //if statement to do comparison should go here


        //reset input value
        $('numberGuessInput')
    }

    function readyNow (){
        console.log('jquery has been loaded');
        $('body').on('click','#guessButton', newGuess);
        $('#button-div').append('<button id="guessButton">Make a Guess</button>');
    }
        




//LUKE'S NOTES - SMALL STEPS

//create index.html, script.js,jQuery
//source in my javascript
//sourcing in my jQuery
//make a button
//make button do something (console log)
//make button do something slightly harder (count things)
//put the count on the DOM
//made button log number from input