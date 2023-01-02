
// Content
const firstContent = `
<div class="MyQuizApp">
  <div class="img">
    <img src="./img/Question.svg" alt="">
  </div>

  <div class="text">
    <h3> Quiz App With Fixed Time </h3>
    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur nesciunt, voluptatem quo dicta et. Eligendi atque dolores, quos dicta assumenda temporibus, accusamus saepe, cum dolor nostrum iure enim illo voluptate sunt alias repudiandae  </p>
    <h3> Quiz App With Fixed Time </h3>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, libero? </p>
  </div>

  <div class="BtnFooter">
    <button id="Start"> Start Quiz </button>
  </div>
</div>
`;

const RulesContent = `
<div class="RulesBox">
  <div class="RulesTitle"> 
    <h2> Some Rules of this Quiz </h2>
  </div>
  <div class="RulesList">
    <ol>
      <li> You Will have only <span> 15 seconds </span> per each question </li>
      <li> Once you select you answer , it can't be undone </li>
      <li> you can't select any option once time goes off. </li>
      <li> You'll get points on the basis of your correct answers </li>
    </ol>
  </div>
  <div class="BtnFooter">
    <button id="ExitQuiz"> Exit Quiz </button>
    <button id="Continue"> Continue </button>
  </div>
</div>
`;

const QunContent = `
<div class="QuestionsBox">
  <div class="QuestionsHeader">
    <h3 class="QTitle"> Start Exam </h3> 
    <div class="timeCount">
      <div class="timeLeft"> Time Left </div>
      <div id="timeSeconds"> 15 </div>
    </div>
    <div id="time_lines"></div>
  </div>

  <div class="QBody">
    <h1><span class="Qserial"> 1 . </span> <span class="Qtext"> What Does HTML Stand For ? What Does HTML Stand For ? </span></h1>
    <div class="Qoptions">
      <p class="QO_1">
        <span> Hyper Text Preprocessor </span>
        <i class="fas fa-times-circle"></i>
      </p>
      <p class="QO_2">
        <span> Hyper Text Markup Language </span>
        <i class="fas fa-check-circle"></i>
      </p>
      <p class="QO_3">
        <span> Hyper Text Multiple Language </span>
      </p>
      <p class="QO_4">
        <span> Hyper Text Multi Language </span>
      </p>
    </div>
  </div>

  <div class="BtnFooter">
    <p><span class="runningQue">3</span> of <span class="totalQue"> 5 </span> Questions </p>
    <button id="NextQue"> NextQue </button>
  </div>
</div> 
`;

// All Selectors
const QuizApp = document.getElementById('QuizApp');
QuizApp.innerHTML = firstContent;

const MyQuizApp = document.getElementById('Start');


MyQuizApp.addEventListener('click' , function () {
  QuizApp.innerHTML = '';
  QuizApp.innerHTML = RulesContent;
})



let ExitQuiz = document.getElementById('ExitQuiz');
ExitQuiz =  null || ExitQuiz

if ( ExitQuiz !== null ) {
  ExitQuiz.addEventListener('click' , function () {
    QuizApp.innerHTML = '';
    QuizApp.innerHTML = RulesContent;
  })
} else {
  console.log('some problem')
}