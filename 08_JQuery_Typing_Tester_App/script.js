

var originalText = $("#original-text").text();
var textArea = $('#text-area');


var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;


    // Add leading zero to numbers 9 or below:
    function leadingZero(time) {
        if(time <=9){
            return "0"+time;
        }else{
            return time;
        }
    }
        // Start the timer:




//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));
// Run a standard minute/second/hundredths timer:

    function startTimer() {
        minutes = Math.floor((timer/100)/60);
        seconds = Math.floor((timer/100) - (minutes * 60));
        milliSeconds = Math.floor(timer - (seconds * 100) - (minutes * 6000));

        $('#minutes').text(leadingZero(minutes));
        $('#seconds').text(leadingZero(seconds));
        $('#milli-seconds').text(leadingZero(milli-seconds));
        timer++;
    }


    // Reset everything:
    $('#reset-button').click(function() {
        $('#text-area').val('');
        $('#minutes').text('00');
        $('#seconds').text('00');
        $('#milli-seconds').text('00');
});

    // Event listeners for keyboard input and the reset button:


        textArea.keypress(function (){
            var textEnteredLen = $('#text-area').val().length;
            if(textEnteredLen === 0){
                //start timer
            
            setInterval(startTimer,10);
        }
});
       

