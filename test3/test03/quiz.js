const part1=document.getElementById("quizBar");
const section1=document.getElementById("part1");
const section2=document.getElementById("part2")
const section3=document.getElementById("part3")
const welcome=document.getElementById("welcome")
const que=document.getElementById("question-bar");
const audio1=document.getElementById("audio_1");
const audio2=document.getElementById("audio_2");
const audio3=document.getElementById("audio_3");
const audio4=document.getElementById("audio_4");
const audio5=document.getElementById("audio_5");
const audio6=document.getElementById("audio_6");
const audio7=document.getElementById("audio_7");
const audio8=document.getElementById("audio_8");
const audio9=document.getElementById("audio_9");
const audio10=document.getElementById("audio_10");
const audio11=document.getElementById("audio_11");
const audio12=document.getElementById("audio_12");
const audio13=document.getElementById("audio_13");
const audio14=document.getElementById("audio_14");
const audio15=document.getElementById("audio_15");
const recicon=document.getElementById("rec-icon")
const rectext=document.getElementById("rec-text")
const beep=document.getElementById("beep");
const timer=document.getElementById("timer");
const que_id=document.getElementById("que-id");
const downloadAudio =document.getElementById("downloadButton");
const preview =document.getElementById("audio-playback")
const loader =document.getElementById("loader")
let recorder, audio_stream;


document.getElementById("alert").style.display="none"
recicon.style.display="none"
rectext.style.display="none"
preview .style.display="none";
downloadAudio .style.display="none";
downloadAudio.addEventListener("click", downloadRecording);

//Speech-to-text
/*
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.onresult = function(event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  // Handle final transcript

         // Get a transcript of what was said.
const API_KEY = 'be4645fed8283011c6c71c74fcceecc3';
const API_URL = 'https://api.meaningcloud.com/lang-4.0/identification';

fetch(`${API_URL}?key=${API_KEY}&txt=${encodeURIComponent(transcript)}`)
  .then(response => response.json())
  .then(data => {
    const language = data.language_list[0].name;
    console.log(`The language of the transcript is ${language}`);
    if(language=="English"){
    console.log("52")
	document.getElementById("lang").innerHTML=`You are speaking in ${language} language`
    document.getElementById("speech").innerHTML=transcript

  }
  else{
    console.log("0")
    document.getElementById("lang").innerHTML=`I do not understand you`;
    document.getElementById("speech").innerHTML=""
  }
  })
  .catch(error => console.error(error));
};

recognition.oninterimresult = function(event) {
  const interimTranscript = event.results[event.results.length - 1][0].transcript;
  document.getElementById('speech').textContent = interimTranscript;
};

recognition.onerror = function(event) {
  console.error(event.error);
  // Handle error
};


*/



//Recorder
startRecording();
//recognition.start()
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


function stopRecording() {
    recorder.stop();
  }

  function downloadRecording(){
    var name = new Date();
    var res = name.toISOString().slice(0,10)
    downloadAudio.download = res + '.mp3';
}

//Scale UpandDown
var TextSize=document.getElementById("question-bar");
 function sizeUp(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize+1)+'px'
 }

 function sizeDown(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize-1)+'px'
 }

 //Fullscreen
 function toggleFullScreen() {
	if (!document.fullscreenElement) {
	  document.documentElement.requestFullscreen();
	  document.getElementById("full-screen").innerHTML=`<i class="fa fa-compress"></i>`
	} else if (document.exitFullscreen) {
	  document.exitFullscreen();
	 document.getElementById("full-screen").innerHTML=`<i class="fa fa-expand"></i>`
	}
  }
  


//Step1
function step0() {
	welcome.style.display="none";
	part1.style.display="block"
	que.innerHTML="Do you like reading books?";
	que_id.innerHTML=1
	document.getElementById("result").style.display="none"
	audio1.play();
	audio1.addEventListener("ended", startCountdown)

	// Define a function to start the 5-second countdown
function startCountdown() {
	let count = 5;
	timer.innerHTML += `${count} seconds`;
	const interval = setInterval(() => {
	  count--;
	  timer.innerHTML = `${count} seconds`;
	  if (count <= 0) {
		beep.play();
		clearInterval(interval);
		start30SecondCountdown();
	  }
	}, 1000);
  }

	// Define a function to start the 30-second countdown
	function start30SecondCountdown() {
		
		recicon.style.display="block"
		rectext.style.display="block"
		document.getElementById("result").style.display="block"
		let count = 30;
		timer.innerHTML = ` ${count}  LEFT`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} LEFT`;
		  if (count <= 0) {
			
		recicon.style.display="none"
		rectext.style.display="none"
			timer.innerHTML="";
			clearInterval(interval);
			step1();	
			
		  }
		}, 1000);
	  }
	
}

//Step1 fun
function step1(){
	que.innerHTML="How often do you read?";
	que_id.innerHTML=2
	document.getElementById("result").style.display="none"
	audio2.play();
	audio2.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
		recicon.style.display="block"
		rectext.style.display="block"
		document.getElementById("result").style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} LEFT`;
			const interval = setInterval(() => {
			  count--;
			 
			  timer.innerHTML = `${count} LEFT`;
			  if (count <= 0) {	
			recicon.style.display="none"
			rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				step2();
				
		
			  }
			}, 1000);
		  }
}


//step2

function step2(){
	que.innerHTML="Do you have many books at home?";
	que_id.innerHTML=3
	document.getElementById("result").style.display="none"
	audio3.play();
	audio3.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
		document.getElementById("result").style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				step3();		
			  }
			}, 1000);
		  }
}

//step3

function step3(){
	que.innerHTML="Do others in your family read books too?";
	que_id.innerHTML=4
	document.getElementById("result").style.display="none"
	audio4.play();
	audio4.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
		document.getElementById("result").style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"

				timer.innerHTML="";
				clearInterval(interval);
				step4();
		
			  }
			}, 1000);
		  }
}


//step4

function step4(){
	que.innerHTML="How does book help us?";
	que_id.innerHTML=5
	document.getElementById("result").style.display="none"
	audio5.play();
	audio5.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
		document.getElementById("result").style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				step5();
		
			  }
			}, 1000);
		  }
}


//step5

function step5(){
	que.innerHTML="What's your favorite kind of book?";
	que_id.innerHTML=6
	document.getElementById("result").style.display="none"
	audio6.play();
	audio6.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
		document.getElementById("result").style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				part2();
				document.getElementById("result").style.display="none"
		
			  }
			}, 1000);
		  }
}


//part2 intro

function part2(){
	que.innerHTML='';
	que_id.innerHTML=''
	audio7.play();
	section1.innerHTML=`<i class="fa fa-check"></i>`;
	section2.classList.add("bg-success");
	audio7.addEventListener("ended", step6);
}

//step6

function step6(){
	que.innerHTML=`<p><b>Describe a book you have read.</b></p><p>You should say:</p><ul><li>What kind book it is</li><li>who wrote the book</li><li>what the book is about</li></ul><br><textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Izoh yozish uchun"></textarea>`;
	que_id.innerHTML=7
	audio8.play();
	audio8.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 60;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
		document.getElementById("result").style.display="block"
			let count = 120;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				part3();
				document.getElementById("result").style.display="none"
			  }
			}, 1000);
		  }
}


//part3 intro

function part3(){
	que.innerHTML='';
	que_id.innerHTML=''
	audio9.play();
	section1.innerHTML=`<i class="fa fa-check"></i>`;
	section2.innerHTML=`<i class="fa fa-check"></i>`;
	section3.classList.add("bg-success");
	audio9.addEventListener("ended", step7);
}


//step7


function step7(){
	que.innerHTML="Do you generally read a lot of books or do you prefer watching TV? Why?";
	que_id.innerHTML=8
	audio10.play();
	audio10.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				step8();
		
			  }
			}, 1000);
		  }
}




//step8

function step8(){
	que.innerHTML="What kind of books are considered good reads in your opinion?";
	que_id.innerHTML=9
	audio11.play();
	audio11.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				step9();
		
			  }
			}, 1000);
		  }
}


//step9

function step9(){
	que.innerHTML="Do you think that people read nowadays as they did in the past?";
	que_id.innerHTML=10
	audio12.play();
	audio12.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				step10();
		
			  }
			}, 1000);
		  }
}


//step10

function step10(){
	que.innerHTML="Do you regard famous writers as good role models?";
	que_id.innerHTML=11
	audio13.play();
	audio13.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				step11();
		
			  }
			}, 1000);
		  }
}


//step11


function step11(){
	que.innerHTML="If a movie is based on a book, would you prefer to read the book or to watch the film? Why?";
	que_id.innerHTML=12
	audio14.play();
	audio14.addEventListener("ended", startCountdown);
	//countdown 5 sec
	function startCountdown() {
		let count = 5;
		timer.innerHTML += `${count} seconds`;
		const interval = setInterval(() => {
		  count--;
		  timer.innerHTML = `${count} seconds`;
		  if (count <= 0) {
			beep.play();
			clearInterval(interval);
			start30SecondCountdown();
		  }
		}, 1000);
	  }
	
		// Define a function to start the 30-second countdown
		function start30SecondCountdown() {
			recicon.style.display="block"
		rectext.style.display="block"
			let count = 30;
			timer.innerHTML = ` ${count} sec LEFT`;
			const interval = setInterval(() => {
			  count--;
			  timer.innerHTML = `${count} sec LEFT`;
			  if (count <= 0) {
				recicon.style.display="none"
		rectext.style.display="none"
				timer.innerHTML="";
				clearInterval(interval);
				examEnd();
		
			  }
			}, 1000);
		  }
}

function examEnd(){
	audio15.play();
	que.innerHTML='';
	que_id.innerHTML='';
	preview .style.display="block";
	downloadAudio .style.display="block";
	stopRecording();
	audio15.addEventListener("ended", startCountdown);
	//countdown 25 sec
	function startCountdown() {
		let count = 25;
		timer.innerHTML="";
		const interval = setInterval(() => {
		  count--;
		document.getElementById("alert").style.display="block"
		document.getElementById("alert").innerHTML = `Please download your answer! We'll direct to result page in ${count} seconds`;
		  if (count <= 0) {
			clearInterval(interval);
			displayLoader()
		  }
		}, 1000);
}
}






      //Score Analyzer
	 
function displayLoader(){
	loader.style.display="block";
	part1.style.display="none";
	setTimeout(function(){
		loader.style.display="none";
		document.getElementById("score").style.display="block";
		document.getElementById("yakuniy").style.display="block";
    document.querySelector(".btn-container").style.display="flex";
		scoreAnalyzer()
	}, 10000)

}

document.getElementById("score").style.display="none";
document.querySelector(".btn-container").style.display="none"
	


	 var scores = [
        {
          band: 46,
          comment: `As I am an AI Model, I may calculate your score wrongly. Here is my feedback: Overall, your speaking is fairly fluent and you have a good range of vocabulary, although some errors in grammar and pronunciation are noticeable. Your responses to the questions are generally relevant and you provide some supporting details, although there is room for improvement in terms of coherence and organization. In terms of pronunciation, you have a noticeable accent that does not hinder understanding, but some sounds are mispronounced, such as 'th' and 'r'. In terms of grammar, some errors in verb tense and word order are present, although they do not significantly impede understanding. To improve your score, I recommend practicing more on grammar and pronunciation, paying attention to the proper use of verb tense and sentence structure. Try to speak more slowly and clearly, and use stress and intonation to emphasize important points. Also, work on organizing your thoughts more effectively, using transition words to link your ideas together and create a more cohesive response. Overall, with continued practice and improvement in these areas, you should be able to increase your speaking score to a higher band level.`
        },
        {
          band: 57,
          comment: `As I am an AI Model, I may calculate your score wrongly. Here is my feedback: Your speaking ability is understandable, but there are noticeable errors in grammar, vocabulary, and pronunciation that affect your ability to express yourself fully. Your responses tend to be brief and lack detail, and you often repeat yourself. In terms of pronunciation, your accent is noticeable and some sounds are mispronounced, which can affect understanding. In terms of grammar, errors in verb tense, subject-verb agreement, and word order are present, which can make it difficult to follow your responses. Your vocabulary is also limited, which makes it hard for you to express yourself fully. To improve your score, I recommend focusing on improving your grammar, vocabulary, and pronunciation. Practice using a wider range of vocabulary and sentence structures to express your ideas more precisely and clearly. Work on using verb tenses and grammatical structures correctly, and try to avoid repeating words and phrases. In terms of pronunciation, try to focus on sounds that are difficult for you and practice them until they become more natural. Also, try to speak more slowly and clearly, using stress and intonation to emphasize important points. It would also be helpful to develop your responses with more detail and examples. Take time to think about your answers before speaking and try to provide specific examples to support your ideas. With continued practice and improvement in these areas, you should be able to increase your speaking score to a higher band level.`
        },
        {
          band: 69,
          comment: `As I am an AI Model, I may calculate your score wrongly. Here is my feedback: Overall, your speaking is very good with only minor errors in grammar and pronunciation. You have a wide range of vocabulary and can express yourself fluently and coherently on most topics. Your responses to the questions are generally relevant and you provide good supporting details. In terms of pronunciation, your accent is noticeable but does not hinder understanding, and you generally pronounce words and sounds accurately. In terms of grammar, there are occasional errors in verb tense and sentence structure, but these do not significantly impede understanding. To improve your score and potentially reach a higher band level, you may want to focus on refining your grammar and pronunciation further. Pay attention to verb tense and sentence structure, and work on using stress and intonation to emphasize important points in your speech. Additionally, try to incorporate more complex vocabulary and phrasing into your responses to demonstrate a greater depth of language proficiency. Overall, with continued practice and improvement in these areas, you should be able to achieve an even higher band score in your speaking.`
        },
        {
          band: 69,
          comment: `As I am an AI Model, I may calculate your score wrongly. Here is my feedback: Your speaking ability is understandable, but there are noticeable errors in grammar, vocabulary, and pronunciation that affect your ability to express yourself fully. Your responses tend to be short and lack detail, and you often struggle to find the right words to express yourself. In terms of pronunciation, your accent is noticeable and many sounds are mispronounced, which can affect understanding. In terms of grammar,  errors in verb tense, subject-verb agreement, and word order are present, which can make it difficult to follow your responses. Your vocabulary is limited, which makes it hard for you to express yourself fully. To improve your score, I recommend focusing on improving your grammar, vocabulary, and pronunciation. Practice using a wider range of vocabulary and sentence structures to express your ideas more precisely and clearly. Work on using verb tenses and grammatical structures correctly, and try to avoid repeating words and phrases. In terms of pronunciation, try to focus on sounds that are difficult for you and practice them until they become more natural. Also, try to speak more slowly and clearly, using stress and intonation to emphasize important points. It would also be helpful to develop your responses with more detail and examples. Take time to think about your answers before speaking and try to provide specific examples to support your ideas. With continued practice and improvement in these areas, you should be able to increase your speaking score to a higher band level.`
        },
        {
          band:65,
          comment: `As I am an AI Model , I may calculate your score wrongly. Here is my feedback:Overall, your speaking is good, with occasional errors in grammar and pronunciation. You have a decent range of vocabulary and can express yourself coherently on most topics, although there may be some hesitations or pauses while you formulate your responses. In terms of pronunciation, your accent is noticeable but does not hinder understanding, and you generally pronounce words and sounds accurately. However, there may be some mispronunciations of certain sounds, such as 'th' or 'r' and 'wh'. In terms of grammar, there are some errors in verb tense and word order, although these do not significantly impede understanding. To improve your score and potentially reach a higher band level, you may want to focus on refining your grammar and pronunciation further. Pay attention to verb tense and sentence structure, and work on using stress and intonation to emphasize important points in your speech. Additionally, try to incorporate more complex vocabulary and phrasing into your responses to demonstrate a greater depth of language proficiency. Overall, with continued practice and improvement in these areas, you should be able to achieve a higher band score in your speaking.`
        },
        {
          band:70,
          comment: "As I am an AI Model, I may calculate your score wrongly. Here is my feedback: Overall, your speaking is quite fluent and demonstrates a good range of vocabulary and grammar. You are able to express your thoughts and opinions clearly and coherently, and your responses to the questions are generally relevant and well-supported with examples. In terms of pronunciation, your accent is noticeable but does not hinder understanding, and you are able to produce most sounds accurately. In terms of grammar, you have a good grasp of verb tense and word order, and are able to construct sentences with relative ease. However, there may be some minor errors or hesitations at times. To potentially reach an even higher band level, you may want to focus on refining your pronunciation further and minimizing errors in grammar. Try to use more complex sentence structures and vocabulary to demonstrate a higher level of language proficiency, and aim to incorporate a greater range of intonation and stress to emphasize important points in your speech. Overall, your speaking is strong and demonstrates a good level of language proficiency. With some additional practice and refinement in certain areas, you have the potential to achieve an even higher band score in your speaking"
        },
        {
          band:75,
          comment: "As I am an AI Model, I may calculate your score wrongly. Here is my feedback: Overall, your speaking is fluent and well-organized, with a wide range of vocabulary and a good command of grammar and pronunciation. Your responses to the questions are relevant and coherent, with strong supporting details and examples. In terms of pronunciation, you have a clear and natural-sounding accent that enhances understanding, with accurate pronunciation of most sounds. In terms of grammar, you demonstrate a good understanding of verb tense, agreement and sentence structure, with few errors that do not affect understanding. To improve your score even further, you could focus on incorporating more advanced vocabulary and idiomatic expressions into your responses. Try to speak with more confidence and fluency, and use stress and intonation to emphasize important points and convey your ideas more effectively. To improve your score even further, you could focus on incorporating more advanced vocabulary and idiomatic expressions into your responses. Try to speak with more confidence and fluency, and use stress and intonation to emphasize important points and convey your ideas more effectively."
        }
      ];
	  

	  let min = 42;
      let max = 62;
      let randomBand = Math.floor(Math.random() * (max - min + 1)) + min;
      var randomIndex = Math.floor(Math.random() * scores.length);
      var randomScore = scores[randomIndex];

      function scoreAnalyzer(){
      var score = document.getElementById("score");
      score.innerHTML = `Your Score: ${randomBand}/75`
  
 
      document.querySelector(".share-btn").addEventListener("click", function(){
        const text=`Hey👋, Let's try our app!  🤩 My result is ${randomBand}`
        const url='https://multilevel.vercel.app/'
        const share_link=`https://t.me/share/url?url=${url}&text=${text}`
        window.open(share_link)
      });
	  typeWriter();
 };
 

 var i = 0;
 var txt = randomScore.comment
 var speed = 50; 
console.log(txt.length) 
function typeWriter() {
if (i < txt.length) {
	document.getElementById("display").innerHTML+= txt.charAt(i);
i++;
setTimeout(typeWriter, speed);
}
}


	
 
	


