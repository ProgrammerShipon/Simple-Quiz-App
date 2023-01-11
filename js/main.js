// All Selectors
const StartBtn = document.getElementById("Start");
const ExitQuiz = document.getElementById("ExitQuiz");
const Continu = document.getElementById("Continue");
const NextQue = document.getElementById("NextQue");

const MyQuizApp = document.querySelector(".MyQuizApp");
const RulesBox = document.querySelector(".RulesBox");
const QuestionsBox = document.querySelector(".QuestionsBox");

const Qserial = document.querySelector(".Qserial");
const Qtext = document.querySelector(".Qtext");
const Qoptions = document.querySelector(".Qoptions");
const QserialIcon = document.querySelector(".Qserial i");

// Time Function
const timeSeconds = document.getElementById("timeSeconds");
const time_lines = document.getElementById("time_lines");
let widthValue = getComputedStyle(time_lines).width;
let widths = Number(widthValue.split("px").join(""));

console.log(widthValue);
console.log(widths);

// Intialize
let second = 15;
let qui_count = 0;
let counters;
let timerline;

// Button Clicking Events
StartBtn.addEventListener("click", () =>
  addRemove(RulesBox, MyQuizApp, "visible")
);

ExitQuiz.addEventListener("click", () =>
  addRemove(MyQuizApp, RulesBox, "visible")
);

Continu.addEventListener("click", () => {
  addRemove(QuestionsBox, RulesBox, "visible");
  qui_count += qui_count;
  getQuestion(qui_count);
  clearTimeout(counters);
  timerFc(second);
  lines();
});

NextQue.addEventListener("click", () => {
  Qoptions.innerHTML = "";
  Qoptions.classList.remove("userClick");
  qui_count++;
  getQuestion(qui_count);
  clearTimeout(counters);
  timerFc(second);
  clearInterval(timerline);
  lines();
});

// Running
function lines() {
  timerline = setInterval(lin, 50);
  let wd = 0;

  function lin() {
    wd *= 0.33333333333;
    if (0 <= widths) {
      console.log(wd);
    }
  }
}

// Seconds Running Function
function timerFc(secondV) {
  counters = setInterval(() => {
    if (secondV >= 0) {
      if (secondV <= 9) {
        timeSeconds.innerHTML = `0${secondV--}`;
      } else {
        timeSeconds.innerHTML = secondV--;
      }
    } else {
      timeSeconds.innerHTML = "00";
      clearTimeout(counters);
      clearInterval(timerline);
    }
  }, 1000);
}

// Get Question Function
function getQuestion(index) {
  Qserial.innerHTML = `${question[index].numb} . `;
  Qtext.innerHTML = `${question[index].question}`;

  for (let option of question[index].options) {
    let newOpt = document.createElement("p");
    let newOpTex = document.createElement("span");
    newOpTex.innerHTML = option;
    newOpt.setAttribute("onclick", "optionSelected(this)");
    newOpt.appendChild(newOpTex);
    Qoptions.appendChild(newOpt);
  }

  const BtnFooter = document.querySelector(".BtnFooter p");
  BtnFooter.innerHTML = `<span class="runningQue"> ${question[index].numb} </span>
               of <span class="totalQue"> ${question.length} </span> Questions`;
}

// Options Select User
function optionSelected(ans) {
  clearTimeout(counters);
  const userAns = ans.innerText;
  const curetAns = question[qui_count].answer;
  if (userAns == curetAns) {
    ans.classList.add("right");
    let icons = `<i class="fas fa-check-circle"></i>`;
    ans.innerHTML = userAns + icons;
    let AnsParent = ans.parentElement;
    AnsParent.classList.add("userClick");
  } else {
    ans.classList.add("wrong");
    let icons = `<i class="fas fa-times-circle"></i>`;
    ans.innerHTML = userAns + icons;
    let AnsParent = ans.parentElement;
    AnsParent.classList.add("userClick");
  }
}

// "Common Function" Class List Add or Remove Function
function addRemove(addId, removeId, cls) {
  removeId.classList.remove(cls);
  addId.classList.add(cls);
}
