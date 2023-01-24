const imageLoader = (x) => {
    infinite.innerHTML += '<img src = ' + x.urls.regular + 'alt = ' + x.description + ' class = img-fluid>'
}
const unsplash = async () => {
    try {
        let a = await fetch('https://api.unsplash.com/photos/random/?client_id=kkCyD5tGnSeIlFnLnrezdUQwL4DK-NVnESyDswTp5mE')
        let b = await a.json();
        imageLoader(b)
    } catch (error) {
        console.log(error);
    }
}
unsplash()
unsplash()

window.onload = () => {
    spinner.style.display = 'none'
}
window.addEventListener('scroll', () => {
    const scrolled = scrollY
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    if (scrolled > scrollable * 0.9) {
       unsplash()
   }
  })

  