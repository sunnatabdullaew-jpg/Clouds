const apiKey = "46351da790226c653537b9628dc20463";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search");
const clouds = document.querySelector(".clouds");

async function getWheather(city){
   try{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        clouds.innerHTML = "City not found";
        return;
    }

    const data = await response.json();

    clouds.innerHTML = `
        <h1 class="city-name">${data.name}</h1>
        <p class="temperature">Temperature: ${Math.round(data.main.temp)}°C</p>
        <p class="weather">Wheather: ${data.weather[0].main}</p>
        <p class="pressure">Pressure: ${data.main.pressure}hPa</p>
        <p class="speed">Wind speed: ${data.wind.speed}km/h</p>
        <p class="humidity">Humidity: ${data.main.humidity}%</p>`;
    } catch(error){
        console.log(error);
    }
}

search.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        getWheather(search.value);
    }
});
