let squares = document.querySelectorAll('.colorsquares')
//console.log(squares)
 let timesclicked = {
  'red':0,
  'green':0,
  'yellow':0
}
squares.forEach(square =>
  {
    square.onclick = () => {
      timesclicked[square.id] += 1
      square.innerText = timesclicked[square.id]
    }
    console.log(square.id)
  })
let clearr = document.getElementById('clear')
clearr.onclick = () =>{
  squares.forEach(square =>
    {
      timesclicked[square.id] = 0
      square.innerText = timesclicked[square.id]
    })
}
clearr.innerText = 'Clear the game'
    