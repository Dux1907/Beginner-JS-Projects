let answers = document.querySelectorAll(".answer");
let optionOne = document.getElementById("optionOne");
let optionTwo = document.getElementById("optionTwo");
let optionThree = document.getElementById("optionThree");
let optionFour = document.getElementById("optionFour");
let finalScore = document.getElementById("finalScore");
// let highScore = document.getElementById('highScore')
// Not Able to store highscore as both pages have different domains or the localStorage of both pages is different.
//     highScore.onclick = () => {
//         if(!JSON.parse(localStorage.getItem("result")))
//             highScore.innerText = "High Score: " + JSON.parse(localStorage.getItem("result"))
//         else
//         highScore.innerText = "High Score: 0"
// }
let count = 0;
let sum = 0;
let k = 1;
let b;
// let high = 0
Array.from(answers).forEach((button) => {
  button.addEventListener("click", function () {
    let result = button.innerHTML;
    let rightans;
    for (let j = 0; j <= 3; j++) {
      if (b.questions[k - 1].options[j].isCorrect === true) {
        rightans = b.questions[k - 1].options[j].option;
        break;
      }
    }
    // console.log(result + " " + rightans)
    if (result === rightans) {
      count++;
    }
    //   if (count > high) {
    //     localStorage.setItem("result",count+"")
    //     high = count
    // }
    sum++;
    document.getElementById("score").innerHTML = "Score: " + count;
    document.getElementById("remaining").innerHTML =
      "Questions Remaining: " + (10 - sum);

    if (sum === 10) {
      location.replace("index.html");
    }
    showdata(b, k);
    k++;
    console.log(count + " " + sum);
  });
});
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8abdd9a021msh7b02be8236831f2p1f3035jsn69ac3c0b768b",
    "X-RapidAPI-Host": "ases-quiz-api1.p.rapidapi.com",
  },
};
function showdata(b, i) {
  question.innerText = b.questions[i].text;
  optionTwo.innerText = b.questions[i].options[1].option;
  optionThree.innerHTML = b.questions[i].options[2].option;
  optionFour.innerText = b.questions[i].options[3].option;
  optionOne.innerText = b.questions[i].options[0].option;
}

const quiz = async () => {
  try {
    let a = await fetch(
      "https://ases-quiz-api1.p.rapidapi.com/questions/random/20",
      options
    );
    b = await a.json();
    showdata(b, 0);
  } catch (error) {
    console.error(error);
  }
};
quiz();
