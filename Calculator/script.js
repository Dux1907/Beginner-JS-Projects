let buttons = document.querySelectorAll('p');
let string = ""
Array.from(buttons).forEach(button => {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'equals') {
            string = eval(string)
            text.value = string
        }
        else if (e.target.id === 'c') {
            string = ""
            text.value = ""
        }  
        else if (e.target.id === 'negative') {
            string = "-" + string
            text.value *= -1
        }
            
        else {
            string += e.target.innerText;
            text.value = string
        }
    })
})
