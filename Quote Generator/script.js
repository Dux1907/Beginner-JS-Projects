let quote = document.getElementById('card_quote')
let next = document.getElementById('next')
let prev = document.getElementById('prev')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46a1c3c5fdmsh0a6d4fa04f101d3p101e9ajsndb5736f421ba',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => quote.innerText = `" ${response.content}"`)
    .catch(err => console.error(err));
    
let previous,a,b
const function1 = async () => {
    try {
         a = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
         b = await a.json();
        quote.innerText = `" ${b.content}"`;
    }
    catch(error){
        quote.innerText = 'Rate limit is one quote for every two second'
    }
}
next.onclick = () => {
    function1()
    previous = `" ${b.content}"`
}
prev.onclick = () => {
    quote.innerText = previous
}

