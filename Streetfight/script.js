let attack1 = document.getElementById('attack1');
let attack2 = document.getElementById("attack2");
let heal1 = document.getElementById("heal1");
let heal2 = document.getElementById("heal2");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let result = document.getElementById("result");
let reset = document.getElementById("reset");

const random = () => {
    return Math.floor(Math.random() * 5) + 1
}
attack1.onclick = () => {
    score2.innerText = Number(score2.innerText) -  Number(random())
  if(score2.innerText <= 0){
    result.innerText = 'Kartik Won!'
    victory.play();
  }
  else
   aattack1.play();
}
attack2.onclick = () => {
    score1.innerText = Number(score1.innerText) -  Number(random())
  if(score1.innerText <= 0){
    result.innerText = 'Rohit Won!'
    victory.play();
  }
  else
  aattack2.play();
}
heal1.onclick = () => {
    score1.innerText = Number(score1.innerText) +  Number(random())
  if(score1.innerText > 100)
    score1.innerText = 100
  else
    hheal1.play()
}
heal2.onclick = () => {
    score2.innerText = Number(score2.innerText) +  Number(random())
    if(score2.innerText > 100)
    score2.innerText = 100
  else
      hheal2.play();
}
reset.onclick = () =>{
  score1.innerText = 100
  score2.innerText = 100
  result.innerText = ''
}
document.addEventListener('keydown',function(e){
  if(e.key == 'q'){
    score2.innerText = Number(score2.innerText) -  Number(random())
    if(score2.innerText <= 0){
    result.innerText = 'Kartik Won!'
      victory.play();
    }
    else
      aattack1.play();
  }
  if(e.key == 'a'){
    score1.innerText = Number(score1.innerText) +  Number(random())
    if(score1.innerText > 100)
    score1.innerText = 100
    else
      hheal1.play();
  }
  if(e.key == 'p'){
    score1.innerText = Number(score1.innerText) -  Number(random())
    if(score1.innerText <= 0){
    result.innerText = 'Rohit Won!'
      victory.play();
    }
    else 
      aattack2.play();
  }
  if(e.key == 'l'){
    score2.innerText = Number(score2.innerText) +  Number(random())
    if(score2.innerText > 100)
    score2.innerText = 100
    else
      hheal2.play();
  }
})

