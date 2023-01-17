// let text = document.getElementById('text')
// let c = document.getElementById('c')
// let negative = document.getElementById('negative')
// let mod = document.getElementById('mod')
// let divide = document.getElementById('divide')
// let seven = document.getElementById('seven')
// let eight = document.getElementById('eight')
// let multiply = document.getElementById('multiply')
// let subtract = document.getElementById('subtract')
// let nine = document.getElementById('nine')
// let four = document.getElementById('four')
// let five = document.getElementById('five')
// let one = document.getElementById('one')
// let two = document.getElementById('two')
// let three = document.getElementById('three')
// let add = document.getElementById('add')
// let zero = document.getElementById('zero')
// let decimal = document.getElementById('decimal')
// let equals = document.getElementById('equals')
// let arr = []
// let count = 0
function addString(string){
    text.value += string
}
// one.onclick = () => {
//     text.value += 1
// }
// two.onclick = () => {
//     text.value += 2
// }
// three.onclick = () => {
//     text.value += 3
// }
// four.onclick = () => {
//     text.value += 4
// }
// five.onclick = () => {
//     text.value += 5
// }
// six.onclick = () => {
//     text.value += 6
// }
// seven.onclick = () => {
//     text.value += 7
// }
// eight.onclick = () => {
//     text.value += 8
// }
// nine.onclick = () => {
//     text.value += 9
// }
// zero.onclick = () => {
//     text.value += 0
// }
// decimal.onclick = () => {
//     text.value += '.'
// }
// add.onclick = () => {
//     text.value += "+"
// }
// subtract.onclick = () => {
//     text.value += '-'
// }
// multiply.onclick = () => {
//     text.value += '*'
// }
// divide.onclick = () => {
//     text.value += '/'
// }
// mod.onclick = () => {
//     text.value += '%'
// }
c.onclick = () => {
    text.value = ""
}
negative.onclick = () => {
    text.value *= -1
}
equals.onclick = () => {
    let res = 0
    res = Number(eval(text.value))
    text.value = res
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        let res = 0
    res = Number(eval(text.value))
    text.value = res
    }
})
   
