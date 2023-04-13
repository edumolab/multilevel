var result_page=document.getElementById("result-page")
result_page.style.display="none"
var page1=document.getElementById("part1")
page1.style.display="block";
var page2=document.getElementById("part2")
page2.style.display="none";
var page3=document.getElementById("part3")
page3.style.display="none";
var page4=document.getElementById("part4")
page4.style.display="none";
var page5=document.getElementById("part5")
page5.style.display="none"
document.getElementById("check-btn").style.display="none"
document.getElementById("restart-btn").style.display="none"
document.getElementById("prev-btn").style.display="none"


var ex, ex0, result, score;
		result=true; score=0;
function checkAns(){

document.getElementById("restart-btn").style.display="inline-block"
               //1-6
		        ex1=document.getElementById("ex1").value;
				if (ex1.trim().toLowerCase()!="people")
				{ result=false; document.getElementById("s1").innerHTML='<span>people</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s1").innerHTML='<i class="<span>people</span> fa fa-check text-success"></i>';
				score++;}
			
					
					ex2=document.getElementById("ex2").value;
				if (ex2.trim().toLowerCase()!="food")
				{ result=false; document.getElementById("s2").innerHTML='<span>food</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s2").innerHTML='<i class="<span>food</span> fa fa-check text-success"></i>';
				score++;}
			
					
					ex3=document.getElementById("ex3").value;
				if (ex3.trim().toLowerCase()!="pancake")
				{ result=false; document.getElementById("s3").innerHTML='<span>pancake</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s3").innerHTML='<i class="<span>pancake</span> fa fa-check text-success"></i>';
				score++;}
			
					
					ex4=document.getElementById("ex4").value;
				if (ex4.trim().toLowerCase()!="races")
				{ result=false; document.getElementById("s4").innerHTML='<span>races</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s4").innerHTML='<i class="<span>races</span> fa fa-check text-success"></i>';
				score++;}
			
					ex5=document.getElementById("ex5").value;
				if (ex5.trim().toLowerCase()!="church")
				{ result=false; document.getElementById("s5").innerHTML='<span>church</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s5").innerHTML='<i class="<span>church</span> fa fa-check text-success"></i>';
				score++;}
			
					ex6=document.getElementById("ex6").value;
				if (ex6.trim().toLowerCase()!="pan")
				{ result=false; document.getElementById("s6").innerHTML='<span>pan</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s6").innerHTML='<i class="<span>pan</span> fa fa-check text-success"></i>';
				score++;}
			
					
              
				
				//7-14
					
					if (document.getElementById("select7").value == "1")	
				{document.getElementById("s7").innerHTML='<span>C</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s7").innerHTML='<span>C</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("select8").value == "1")	
				{document.getElementById("s8").innerHTML='<span>E</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s8").innerHTML='<span>E</span> <i class="fa fa-times text-danger"></i>';}
					
					if (document.getElementById("select9").value == "1")	
				{document.getElementById("s9").innerHTML='<span>D</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s9").innerHTML='<span>D</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("select10").value == "1")	
				{document.getElementById("s10").innerHTML='<span>H</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s10").innerHTML='<span>H</span> <i class="fa fa-times text-danger"></i>';}
 

					if (document.getElementById("select11").value == "1")	
				{document.getElementById("s11").innerHTML='<span>B</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s11").innerHTML='<span>B</span> <i class="fa fa-times text-danger"></i>';}


					if (document.getElementById("select12").value == "1")	
				{document.getElementById("s12").innerHTML='<span>G</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s12").innerHTML='<span>G</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("select13").value == "1")	
				{document.getElementById("s13").innerHTML='<span>J</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s13").innerHTML='<span>J</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("select14").value == "1")	
				{document.getElementById("s14").innerHTML='<span>A</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s14").innerHTML='<span>A</span> <i class="fa fa-times text-danger"></i>';}

					//15-20

					text15=document.getElementById("a15").value;
				if (text15.trim().toLowerCase()!="vii")
				{ result=false; document.getElementById("s15").innerHTML='<span>VII</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s15").innerHTML='<span class="text-success">VII</span> <i class="fa fa-check text-success"></i>';
				score++;}


				text16=document.getElementById("a16").value;
				if (text16.trim().toLowerCase()!="vi")
				{ result=false; document.getElementById("s16").innerHTML='<span>VI</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s16").innerHTML='<span class="text-success">VI</span> <i class="fa fa-check text-success"></i>';
				score++;}


				text17=document.getElementById("a17").value;
				if (text17.trim().toLowerCase()!="v")
				{ result=false; document.getElementById("s17").innerHTML='<span>V</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s17").innerHTML='<span class="text-success">V</span> <i class="fa fa-check text-success"></i>';
				score++;}

				text18=document.getElementById("a18").value;
				if (text18.trim().toLowerCase()!="viii")
				{ result=false; document.getElementById("s18").innerHTML='<span>VIII</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s18").innerHTML='<span class="text-success">VIII</span> <i class="fa fa-check text-success"></i>';
				score++;}

				text19=document.getElementById("a19").value;
				if (text19.trim().toLowerCase()!="iii")
				{ result=false; document.getElementById("s19").innerHTML='<span>III</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s19").innerHTML='<span class="text-success">III</span> <i class="fa fa-check text-success"></i>';
				score++;}


				text20=document.getElementById("a20").value;
				if (text20.trim().toLowerCase()!="i")
				{ result=false; document.getElementById("s20").innerHTML='<span>I</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s20").innerHTML='<span class="text-success">I</span> <i class="fa fa-check text-success"></i>';
				score++;}




					//Part 4-21-23
					if (document.getElementById("b21").checked == true)	
				{document.getElementById("s21").innerHTML=
				'<span>D</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s21").innerHTML='<span>D</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("b22").checked == true)	
				{document.getElementById("s22").innerHTML=
				'<span>C</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s22").innerHTML='<span>C</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("b23").checked == true)	
				{document.getElementById("s23").innerHTML=
				'<span>A</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s23").innerHTML='<span>A</span> <i class="fa fa-times text-danger"></i>';}


					//24-28
					

					if (document.getElementById("t24").value=="1")	
				{document.getElementById("s24").innerHTML='<span>True</span> <i class="fa fa-check text-success"></i>';
				  score++;}
					else { result=false; document.getElementById("s24").innerHTML='<span>True</span> <i class="fa fa-times text-danger"></i>';}


					if (document.getElementById("t25").value=="1")	
				{document.getElementById("s25").innerHTML='<span>True</span> <i class="fa fa-check text-success"></i>';
				  score++;}
					else { result=false; document.getElementById("s25").innerHTML='<span>True</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("t26").value=="1")	
				{document.getElementById("s26").innerHTML='<span>False</span> <i class="fa fa-check text-success"></i>';
				  score++;}
					else { result=false; document.getElementById("s26").innerHTML='<span>False</span> <i class="fa fa-times text-danger"></i>';}
                     

					if (document.getElementById("t27").value=="1")	
				{document.getElementById("s27").innerHTML='<span>No Information</span> <i class="fa fa-check text-success"></i>';
				  score++;}
					else { result=false; document.getElementById("s27").innerHTML='<span>No Information</span> <i class="fa fa-times text-danger"></i>';}


					if (document.getElementById("t28").value=="1")	
				{document.getElementById("s28").innerHTML='<span>True</span> <i class="fa fa-check text-success"></i>';
				  score++;}
					else { result=false; document.getElementById("s28").innerHTML='<span>True</span> <i class="fa fa-times text-danger"></i>';}

					//29-30

					if (document.getElementById("last").checked == true)	
				{document.getElementById("s29").innerHTML=
				'<span>A</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s29").innerHTML='<span>A</span> <i class="fa fa-times text-danger"></i>';}

					if (document.getElementById("last2").checked == true)	
				{document.getElementById("s30").innerHTML=
				'<span>B</span> <i class="fa fa-check text-success"></i>';
				score++;}
					else { result=false; document.getElementById("s30").innerHTML='<span>B</span> <i class="fa fa-times text-danger"></i>';}



					
		
				

				//part5
					text31=document.getElementById("text31").value;
				if (text31.trim().toLowerCase()!="aisles")
				{ result=false; document.getElementById("s31").innerHTML='<span>aisles</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s31").innerHTML='<span>aisles</span> <i class="fa fa-check text-success"></i>';
				score++;}

				text32=document.getElementById("text32").value;
				if (text32.trim().toLowerCase()!="experiments")
				{ result=false; document.getElementById("s32").innerHTML='<span>experiments</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s32").innerHTML='<span>experiments</span> <i class="fa fa-check text-success"></i>';
				score++;}

				text33=document.getElementById("text33").value;
				if (text33.trim().toLowerCase()!="loyalty card")
				{ result=false; document.getElementById("s33").innerHTML='<span>loyalty card</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s33").innerHTML='<span>loyalty card</span> <i class="fa fa-check text-success"></i>';
				score++;}

				text34=document.getElementById("text34").value;
				if (text34.trim().toLowerCase()!="cosmetics")
				{ result=false; document.getElementById("s34").innerHTML='<span>cosmetics</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s34").innerHTML='<i class="<span>cosmetics</span> fa fa-check text-success"></i>';
				score++;}

				text35=document.getElementById("text35").value;
				if (text35.trim().toLowerCase()!="group")
				{ result=false; document.getElementById("s35").innerHTML='<span>group</span> <i class="fa fa-times text-danger"></i>';}
				else {document.getElementById("s35").innerHTML='<span>group</span> <i class="fa fa-check text-success"></i>';
				score++;}

				
				

				document.getElementById("result").innerHTML=
				"<div class='result'>Your result: "+score+"/35 </div>";	
				if(score==0 || score<10){
					document.getElementById("level").innerHTML="Your Level: A2"
				}
				else if (score==10 || score<18) {
					document.getElementById("level").innerHTML="Your Level: B1"
				}
				else if (score==18 || score<28) {
				    document.getElementById("level").innerHTML="Your Level: B2"	
				}
				else if(score==28 || score<36){
					document.getElementById("level").innerHTML="Your Level: C1"
				}
 

				document.getElementById("result-page").style.display="block";
				page1.style.display="none";
				page2.style.display="none"
				page3.style.display="none";
				page4.style.display="none";
				page5.style.display="none";
				document.getElementById("footBar").style.display="none";
				document.getElementById("prev-btn").style.display="none";
				document.getElementById("check-btn").style.display="none";
				document.getElementById("next-btn").style.display="none";
				document.getElementById("timer").style.display="none";


}





function nextPage() {
	if (page1.style.display=="block") {
		page1.style.display="none" 
		page2.style.display="block";
		document.getElementById("prev-btn").style.display="inline-block"
	}
	else if (page2.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="block"
	}
	else if (page3.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="none";
		page4.style.display="block"
	}
	else if (page4.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="none";
		page4.style.display="none";
		page5.style.display="block";
		document.getElementById("next-btn").style.display="none";
		document.getElementById("check-btn").style.display="inline-block"

	}
	
}


//PrevPage func


function prevPage() {
	if (page5.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="none";
		page4.style.display="block";
		page5.style.display="none";
		document.getElementById("next-btn").style.display="inline-block";
		document.getElementById("check-btn").style.display="none"
	}
	else if (page4.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="block";
		page4.style.display="none";
		page5.style.display="none";
	}
	else if (page3.style.display=="block") {
		page1.style.display="none";
		page2.style.display="block"
		page3.style.display="none";
		page4.style.display="none";
		page5.style.display="none";
	}
	else if (page2.style.display=="block") {
		page1.style.display="block";
		page2.style.display="none"
		page3.style.display="none";
		page4.style.display="none";
		page5.style.display="none";
		document.getElementById("prev-btn").style.display="none";


	}
}





//Restart
document.getElementById("restart-btn").addEventListener("click", function(){
	window.location.href="index.html"
});

/*
function showSol(){

	if (result_page.style.display=="block") {
		page1.style.display="block" 
		result_page.style.display="none";
		document.getElementById("prev-btn").style.display="inline-block"
	}
	if (page1.style.display=="block") {
		page1.style.display="none" 
		page2.style.display="block";
		document.getElementById("prev-btn").style.display="inline-block"
	}
	else if (page2.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="block"
	}
	else if (page3.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="none";
		page4.style.display="block"
	}
	else if (page4.style.display=="block") {
		page1.style.display="none";
		page2.style.display="none"
		page3.style.display="none";
		page4.style.display="none";
		page5.style.display="block";
		document.getElementById("next-btn").style.display="none";
		document.getElementById("check-btn").style.display="inline-block"

	}
	else if(page5.style.display=="block"){
		page5.style.display="none"
		result_page.style.display="block"
	}

}
*/

function timer(){
// Set the target time for the countdown (1 hour from now)
const targetTime = new Date();
targetTime.setHours(targetTime.getHours() + 1);

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current time
  const now = new Date();

  // Calculate the time remaining until the target time
  const timeRemaining = targetTime.getTime() - now.getTime();

  // If the target time has been reached, stop the countdown
  if (timeRemaining <= 0) {
    clearInterval(countdown);
    checkAns();
    console.log("Countdown complete!");
    return;
  }

  // Convert the time remaining to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining in the console
  document.getElementById("timer").innerHTML=(`${minutes}:${seconds}`);
}, 1000);
}

timer()


document.getElementById("shareBtn").addEventListener("click", function(){
        const text=`Hey👋, Let's try our app!  🤩 My Reading Result is ${score}/35.`
        const url='https://multilevel.vercel.app/reading/test1/index.html'
        const share_link=`https://t.me/share/url?url=${url}&text=${text}`
        window.open(share_link)
      });