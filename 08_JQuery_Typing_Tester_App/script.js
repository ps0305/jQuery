

var originalText = $("#original-text").text();
var minute = $('#minutes');
var second = $('#seconds');
var theTimer = $('.display-4');
var milliseconds = $('#milli-seconds');

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var curentTime = "";
var interval = 0;
var timerRunning = false;

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

        minutes = leadingZero(minutes);
        seconds = leadingZero(seconds);
        milliSeconds = leadingZero(milliSeconds);

        currentTime = minutes+":"+seconds+":"+milliSeconds;
        theTimer.innerHTML = currentTime;
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


    $( "#text-area" ).keypress(function start() {
        var textEnteredLen = textArea.val.length;
        //console.log(textEnteredLen)
        if (textEnteredLen === 0 && !timerRunning){
            //start time
            interval = setInterval(startTimer ,10);
            timerRunning =true;
        }

});
