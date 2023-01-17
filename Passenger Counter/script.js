let count = document.getElementById('count')
let increment = document.getElementById('increment')
let save = document.getElementById('save')
let text = document.getElementById('text')
let reset = document.getElementById('reset')
let data = 0
let string
increment.onclick = () =>{
     data = Number(count.innerText)
    data = data + 1
    count.innerText = data
}

save.onclick = () => {
     string = text.innerText
    string += data  + '-'
    text.innerText = string
}
reset.onclick = () => {
    count.innerText = 0
    text.innerText= ""
}

