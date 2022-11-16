
let image = document.getElementById('dog')
let newimage = document.getElementById('newimage')
const newdog = () =>{
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
      .then(data => {
        image.innerHTML=`<img src = ${data.message} alt = '' height = '225' width = '225'>`
      })
}
newimage.onclick = () =>{
  newdog()
}