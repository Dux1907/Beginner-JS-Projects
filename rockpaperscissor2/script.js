let squares = document.querySelectorAll('.name')
console.log(squares)
  const hand = (randomm,square) =>{
  if(randomm == square)
    return 0;
  else if((randomm.id == 'paper' && square.id == 'rock' )||(randomm.id == 'scissor') && (square.id == 'paper') ||(randomm.id == 'rock' && square.id == 'scissor'))
    return -1;
  return 1;
}
const random = (squares) => {
  let k = Math.floor(Math.random() * squares.length)
  return squares[k]
}

squares.forEach(square =>{
  square.onclick = () => {
 let randomm =  random(squares)
//     console.log(randomm)
   let score = hand(randomm,square)
   let scoree = document.getElementById('score')
   let k = Number(scoree.innerText)
   k += score
  scoree.innerText = k
  let handd = document.getElementById('hand')
    let message =  `your choice is ${square.id}${square.innerText} and computer's choice is ${randomm.id}${randomm.innerText}.`
  handd.innerText = message
  let result = document.getElementById('result')
  if(score == 0)
  result.innerText = 'The match is drawn!'
  else if(score == 1)
  result.innerText = 'You won the match!'
  else
  result.innerText = 'You lost the match!'
}
})