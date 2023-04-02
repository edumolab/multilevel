//Variables
let recorder, audio_stream;
const preview = document.getElementById("preview");
const downloadAudio = document.getElementById("save");
const stopBtn=document.getElementById("stop")
const recBtn=document.getElementById("record");
const player=document.getElementById("player");
const bar=document.getElementById("bar");
const status=document.getElementById("status")
const cancelBtn=document.getElementById("cancel")

//Mini funksiyalar
preview.style.display="none";
bar.style.display="none"
downloadAudio.addEventListener("click", downloadRecording);
stopBtn.style.display="none";
stopBtn.addEventListener("click", stopRecording);  
recBtn.addEventListener("click", startRecording)
player.style.display="none";


document.querySelector(".mic").addEventListener("click", function(){
    if(bar.style.display=="none"){
        bar.style.display="flex";
    }
    else{
        bar.style.display="none";
    }
    
    stopBtn.style.display="none";
    recBtn.style.display="block"
});

//Stop Btn

stopBtn.addEventListener("click", function(){
   player.style.display="flex";
   bar.style.display="none";
});

//Play function
document.getElementById("play").addEventListener("click", function(){
    var audio=document.getElementById("preview")
    if (audio.paused || audio.ended) {
       audio.play();
       document.getElementById("play").classList.remove("fa-play-circle");
       document.getElementById("play").classList.add("fa-pause-circle");
    }
    else{
        audio.pause();
        document.getElementById("play").classList.add("fa-play-circle");
       document.getElementById("play").classList.remove("fa-pause-circle");

    }
});

function hiddenIcon(){
    document.getElementById("play").classList.remove("fa-pause-circle");
    document.getElementById("play").classList.add("fa-play-circle");
};
    
//Start Btn recStart
recBtn.addEventListener("click", function(){
     recBtn.style.display="none";
     stopBtn.style.display="block";
    });


//Clear cancelBtn

cancelBtn.addEventListener("click", function(){
 player.style.display="none"
});

//Start record

    function startRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
            audio_stream = stream;
            recorder = new MediaRecorder(stream);

            // when there is data, compile into object for preview src
            recorder.ondataavailable = function (e) {
                const url = URL.createObjectURL(e.data);
                preview.src = url;

                // set link href as blob url, replaced instantly if re-recorded
                downloadAudio.href = url;
            };
            recorder.start();

        });
}







//rec stop

function stopRecording() {
    recorder.stop();
    audio_stream.getAudioTracks()[0].stop();
}

function downloadRecording(){
    var name = new Date();
    var res = name.toISOString().slice(0,10)
    downloadAudio.download = res + '.wav';
}