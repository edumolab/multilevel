const ieltsQuestions = {
  education: [
    {
      q1: "In your opinion, what are the advantages of studying at university?",
      ans1: "How do you think university education differs from secondary education?"
    },
    {
      question: "Do you think that university education should be free for everyone?",
      followUp: "What are the pros and cons of free university education?"
    },
    {
      question: "Some people believe that vocational education is more beneficial than academic education. What do you think?",
      followUp: "Why do you think some students choose vocational education instead of academic education?"
    }
  ],
  technology: [
    {
      question: "In what ways has technology changed the way people communicate with each other?",
      followUp: "Do you think that technology has made communication easier or more difficult?"
    },
    {
      question: "Do you think that technology is a good or a bad thing for society?",
      followUp: "How has technology impacted people's social lives?"
    },
    {
      question: "How has technology changed the workplace?",
      followUp: "Do you think that technology will replace human workers in the future?"
    }
  ],
  environment: [
    {
      question: "What are some of the main environmental problems facing the world today?",
      followUp: "What do you think individuals can do to help protect the environment?"
    },
    {
      question: "How can governments encourage people to be more environmentally friendly?",
      followUp: "Do you think that governments are doing enough to protect the environment?"
    },
    {
      question: "How has technology helped or hindered efforts to protect the environment?",
      followUp: "Do you think that technology will be the solution to environmental problems?"
    }
  ]
};

console.log(ieltsQuestions.education[0])