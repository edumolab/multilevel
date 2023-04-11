const questions= [
    {
        id: 1,
        que: "Describe your favorite season of the year. You should say. What the weather is like.Why you like this season.What activities you usually do during this season. How different kinds of weather in this season affect people.",
        ans: "Today, I am going to tell you about my favourite season. Honestly, I love all the seasons but I think my favourite is spring. Usually, it starts at the end of December in our country and lasts till the middle of March. The weather in Vietnam is the best during spring because you will not suffer from the excessive heat of summer or the freezing wind of winter. The temperature is tolerable both day and night. One of the best things about spring is that, during this poetic season, nature displays itself in beautiful green and flowers are noticed everywhere. Fruit trees, such as cherry and apricot trees are in full blossom, and colourful flowers such as daffodils and marigolds bloom in parks and gardens. The sounds of spring are wonderful too. A typical spring day will begin when some birds start their morning chorus as they look for a mate. We also celebrate Tet, one of the most anticipated holidays by the Vietnamese people. This is an occasion for pilgrimages, family reunions and many festivals. Parties full of delicious traditional dishes are the main theme for the whole holiday of Tet.I am of the opinion that different kinds of weather can affect people’s health. Even among those in the prime of health, an excessively hot or cold day can lead to illness or injury, let alone the elderly, who can be more susceptible to extreme weather conditions. Weather can also make a huge impact on people's lives. Obviously, the weather dictates what you are going to wear for the day, often depending on the time of year. Also, winter snow storms in Western countries can cancel school or make your morning commute a hassle.",
      },{
        id:2,
        que:"Describe a public place that you think needs improvements. You should say: What the place is.  When you visit the place. What do you like and dislike about the public place",
        ans:"I would like to talk about a public place that I think needs improvement. Among the most popular public places where people can socialise and hang out with each other is Dam Sen, an amusement park in Ho Chi Minh city, considered a green oasis located in District 11.Last month, I decided to take my nieces and nephews there. The park is comprised of many areas including a roller coaster which, to my surprise, the children eagerly rode. Time just flew by with the kids. We liked everything about the park except the fact that people were throwing empty water bottles here and there. I felt there should be more bins. Well, to tell the truth, the park is rather old. Sometimes my parents used to take me there in my childhood. However, the park was a lot different from what I could remember. Some facilities at its far end were covered in moss and overgrown weeds. The crumbling walls gave the impression that the area had been abandoned for ages. One day, to our terror, we found some used needles laying amidst the shabby greenery, invisible and able to pierce the common light-weight shoes the children wear.I would say that the city authority should encourage local people or voluntary groups to tidy up the park and hire more care-takers to make it a safer and more attractive playground for children. Also, a certain amount of money is needed to install new restrooms and other safety-oriented upgrades like street lighting or warning signs.",
      },
      {
        id:3,
        que:"Describe a city or country you want to live the most in the future. You should say: • What city it is. • Where it is located. • Why you like it.",
        ans:"I would like to tell you about Tokyo, the city I want to live in the most in the future. It is the capital city of Japan and is the most populous metropolitan area in the world. The most important reason I wish to settle down in Tokyo is the co-existence of modern and traditional values. It’s the kind of city where the red gates of a centuries-old Shinto shrine may well be found just next door to a glass skyscraper showcasing the finest 21st century technology. Or where a quiet green lane lined with wooden low-rise houses and an old school tofu shop might sit just a short stroll from a neon-lit square packed with flickering billboards and rainbow-bright street fashion.The hectic life in Tokyo is also an irresistible attraction for young people. Tokyo's railway system seems like it was designed to win world records. It's rare to find a location in the metropolitan area that can't be reached with a train ride and a short walk. It is also common knowledge that you could spend hours drooling over the elaborate pastries and picture-perfect sushi rolls in a department store.I feel that the city is moving toward the future. I believe Tokyo will become a city that is full of surprises."
      },
      {
        id:4,
        que:"Describe something you learned in a place/from a person. You should say: • What you learned. • When this happened. • Where it was/ Who taught you. • How difficult it was to learn.",
        ans:"I am so lucky to have the chance to learn so many things from the people around me; the list of things I have learnt would be a very long one. I would like to emphasise one thing that I learned from a middle-aged woman in my neighborhood, and that is the pleasure of voluntary activities. We call her Ms. Lan. She was born and grew up during one of the most turbulent periods in Vietnamese modern history. Now, in her late 50s, she became interested in trying to make a difference — working for her own volunteer organization. She has been running a group of dedicated, compassionate young people who are all committed to making a positive difference to the lives of senior citizens in nursing homes around the town. “Spending time with the elderly is very important, they don’t always have relatives to visit them so I try to fill that gap and spend a bit of time with them. I have a rapport with elderly people, I’m a patient person and I like to sit down and talk to them,” she once told us. During my working under her guidance, I have learnt about the benefits of working as a volunteer. If you have ever volunteered, you may have noticed that you felt fantastic afterward. Community service can help you gain confidence by giving the chance to try something new and build a real sense of achievement. Besides, volunteering can help you meet different kinds of people and make new friends.Generally speaking, volunteering can have a real and valuable positive affect on people, communities and society. Besides, I believe that we can learn much about life from those who have seen it almost to the end."
      }
]



var container=document.getElementById("quiz-bar")
questions.forEach((item) => {
 var list=document.createElement("div");
 container.appendChild(list);

 var liste=document.createElement("div");

 var flex=document.createElement("div")
 flex.classList.add("d-flex");
 flex.classList.add("justify-content-left")
 flex.classList.add("align-items-center")

 liste.classList.add("card")
 liste.classList.add("badge-info")
 liste.classList.add("py-3")
 liste.classList.add("px-3");
 liste.classList.add("my-3")

 liste.appendChild(flex)
 list.appendChild(liste);
 
 var btn=document.createElement("span")
 btn.classList.add("badge")
 btn.classList.add("badge-primary")
 btn.classList.add("rounded-cirle")
 btn.classList.add("mx-3")
 btn.style.fontSize="23px"
 btn.textContent=`${item.id}`
 flex.appendChild(btn)

 var que=document.createElement("p");
 que.textContent=`${item.que}`;
 que.style.fontWeight="bold"
 flex.appendChild(que)


 var answer=document.createElement("p");
 liste.appendChild(answer)
 answer.textContent=`${item.ans}`;
 answer.style.display="none";


 document.getElementById("q1").addEventListener("click", function(){
    if(answer.style.display=="none"){
        answer.style.display="block";
        document.getElementById("q1").innerHTML="Hide Answers"
        
    }
    else{
        answer.style.display="none";
        document.getElementById("q1").innerHTML="Show Answers"
        
    }
 });


});