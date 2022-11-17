let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let rocktext = rock.innerText;
  let papertext = paper.innerText;
  let scissortext = scissor.innerText;
  let arr = [rocktext,papertext,scissortext]
 
const random = (arr) => {
  let k = Math.floor(Math.random() * arr.length)
  return arr[k]
}
const calculaterock = () =>{
  let randomtext = random(arr)
 if(randomtext == rocktext){
   let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${rocktext} and computer's  choice is ${randomtext}`
     let a2 = document.getElementById('result');
   a2.innerText = 'Its a draw!'
 }
  else if(randomtext == papertext){
    let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${rocktext} and computer's  choice is ${randomtext}`
      let a2 = document.getElementById('result');
   a2.innerText = 'You lose!'
    let a3 = document.getElementById('score');
    let a4 = Number(a3.innerText)
    a4 -=1
    a3.innerText = a4
  }
 else{
    let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${rocktext} and computer's  choice is ${randomtext}`
      let a2 = document.getElementById('result');
   a2.innerText = 'You won!'
    let a3 = document.getElementById('score');
    let a4 = Number(a3.innerText)
    a4 +=1
    a3.innerText = a4
 }
}
const calculatepaper = () => {
  let randomtext = random(arr)
 if(randomtext == rocktext){
    let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${papertext} and computer's  choice is ${randomtext}`
      let a2 = document.getElementById('result');
   a2.innerText = 'You won!'
    let a3 = document.getElementById('score');
    let a4 = Number(a3.innerText)
   console.log(a4 + 1)
    a4 +=1
    a3.innerText = a4
  }
  else if(randomtext == papertext){
    let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${papertext} and computer's  choice is ${randomtext}`
     let a2 = document.getElementById('result');
   a2.innerText = 'Its a draw!'
 
  }
 else{
    
   let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${papertext} and computer's  choice is ${randomtext}`
      let a2 = document.getElementById('result');
   a2.innerText = 'You lose!'
    let a3 = document.getElementById('score');
    let a4 = Number(a3.innerText)
   console.log(a4 - 1)
    a4 -=1
    a3.innerText = a4
 }
}
const calculatescissor = () =>{
  let randomtext = random(arr)
 if(randomtext == rocktext){
   let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${scissortext} and computer's  choice is ${randomtext}`
      let a2 = document.getElementById('result');
   a2.innerText = 'You lose!'
    let a3 = document.getElementById('score');
    let a4 = Number(a3.innerText)
    a4 -=1
    a3.innerText = a4
 }
  else if(randomtext == papertext){
     let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${scissortext} and computer's  choice is ${randomtext}`
      let a2 = document.getElementById('result');
   a2.innerText = 'You won!'
    let a3 = document.getElementById('score');
    let a4 = Number(a3.innerText)
    a4 +=1
    a3.innerText = a4
  }
 else{
   let a1 = document.getElementById('hand');
   a1.innerText = `Your choice is ${scissortext} and computer's choice is ${randomtext}`
     let a2 = document.getElementById('result');
   a2.innerText = 'Its a draw!'
}
}
const reset = () =>{
  let a1 = document.getElementById('hand');
   a1.innerText = ''
      let a2 = document.getElementById('result');
   a2.innerText = ''
    let a3 = document.getElementById('score');
    a3.innerText = 0
}
