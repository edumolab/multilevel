 // Define the questions array with questions and audio URLs
    const questions = {
  "1": {
    "id":"7",
    "question": "<p><b>Describe an environmental problem that the world is facing.</b></p>"+"<p>You should say:</p>"+"<ul><li>What the environmental problem it is</li><li>why it is happening</li><li>what harmful effects it has</li><li>and explain what can be done to prevent this environmental problem</li></ul>",
    "audio_url": "audio/1.mp3"
  }
}
      // Get the HTML div element
      const questionDiv = document.getElementById("question-bar");
      const queId = document.getElementById("que-id");
      const timer = document.getElementById("timer");
      const blink = document.querySelector('.circle').style.display="none";
      const visualizer =document.getElementById("visualizer").style.display="none";
      const audioElement = document.getElementById("audio");
      let currentQuestionIndex = 1;
         
      
      document.querySelector(".startBtn").addEventListener("click", function(){
         document.getElementById("introDuct").play();
        });

      document.getElementById("introDuct").addEventListener("ended", showNextQuestion);
      // Define a function to show a random question
      function showNextQuestion() {
     // questionDiv.innerHTML="<p><b>Describe a healthy lifestyle you know.</b></p>"+"<p>You should say:</p>"+"<ul><li>What is it?</li><li>How do you know it?</li><li>When do you do it?</li><li>And explain why you think it is healthy.</li></ul>"
      //queId.innerHTML=7
        const question = questions[currentQuestionIndex];
        questionDiv.innerHTML=question.question+"<br>"+ `<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Izoh yozish uchun"></textarea>`+ `</p><audio id="audio"  src="${question.audio_url}"></audio>`;
        queId.innerHTML=question.id;
        // Get the audio element and set up event listeners
      const audioElement=document.getElementById("audio");
      audioElement.play();

        const beep = document.getElementById("beep");
        beep.volume=0.5;
 const volumeSlider = document.getElementById('audio_volume');
 
 volumeSlider.addEventListener('input', function() {
    audioElement.volume = volumeSlider.value;
 });
  

        audioElement.addEventListener("ended", startCountdown);
};

      // Define a function to start the 5-second countdown
      function startCountdown() {
        let count = 60;
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
        document.querySelector('.circle').style.display="block";
        let count = 120;
        timer.innerHTML = ` ${count} seconds to answer</p>`;
        const interval = setInterval(() => {
          count--;
          timer.innerHTML = `${count} seconds to answer</p>`;
          if (count <= 0) {
            document.querySelector('.circle').style.display="none";
            document.getElementById('visualizer').style.display="none";
            timer.innerHTML="";
            clearInterval(interval);
            stopRecording();
            document.getElementById("end").play();
            setTimeout(function () {
            redirect();
      }, 10000);


          }
        }, 1000);
      }

      // When the window is loaded, show a random question
     
    
// Audio recorder


// audio recorder
let recorder, audio_stream;


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
        formData.append('audio', e.data, 'recording.mp3');
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

startRecording();

function stopRecording() {
    recorder.stop();
  }

function redirect(){
window.location.href='../part3/part3.html'

}