let humidity = document.getElementById('humidity');
let temp = document.getElementById('temp');
let region = document.getElementById('region');
let localtime = document.getElementById('localtime');
let long = document.getElementById('long');
let lat = document.getElementById('lat');
let pressure = document.getElementById('pressure');
let Windspeed = document.getElementById('windspeed');
let submit = document.getElementById('submit');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46a1c3c5fdmsh0a6d4fa04f101d3p101e9ajsndb5736f421ba',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const Showdata = (y) => {
    temp.innerText = "Temp: " + y.current.temp_c + "°C"
    humidity.innerText = "Humidity: " + y.current.humidity 
     Windspeed.innerText = "Windspeed: " + y.current.wind_kph + ' kph'
    pressure.innerText = "Pressure: " + y.current.pressure_mb + " mb"
    region.innerText = "Region: " + y.location.region
    localtime.innerText = "Local-Time: " + y.location.localtime;
    long.innerText = 'Longitude: ' + y.location.lon
    lat.innerText = 'Latitude: ' + y.location.lat
}
const weather = async (city) => {
    try {
    
        let x = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options)
        let y = await x.json();
        Showdata(y);
    }
    catch (error){
        console.log(error); 
    }
}
submit.onclick = () => {
    let input = document.getElementById('input');
    let city = input.value;
     weather(city);
}

document.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
            let input = document.getElementById('input');
            let city = input.value;
             weather(city);
    }    
})
    
