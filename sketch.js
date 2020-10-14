var mic;
var offsetWidth;

function touchStarted() { 
}

// var microphone = document.querySelector('.fa-microphone');

// microphone.onclick = function() {
//     getAudioContext().resume(); 
// }
function setup(){
   
    var lottie = document.getElementById('lottieAnimation');
    lottie.style.height = "500px";
    
    console.log(lottie);
    console.log(lottie.main);

    mic = new p5.AudioIn();
    mic.start();
}

function draw(){
    var vol = mic.getLevel();
}
