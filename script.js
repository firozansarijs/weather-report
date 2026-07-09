const cityName = document.querySelector(".city h1");
const weatherIcon = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");
const sun = document.querySelector(".cond");
const hum = document.querySelector(".detail-1 p");
const win = document.querySelector(".detail-2 p");
    
const search = document.querySelector(".search-container input");
search.addEventListener("keydown", (evt) => {
   if(evt.key === "Enter"){
      const city = search.value;
      const url = `https://api.weatherapi.com/v1/current.json?key=27bf9a2ad17b47d6b92174842262906&q=${city}`;

       fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherIcon.src = `https:${data.current.condition.icon}`;
        cityName.textContent = data.location.name;
        temp.textContent = data.current.temp_c;
        sun.textContent = data.current.condition.text;
        hum.textContent = data.current.humidity;
        win.textContent = data.current.wind_kph;
      });
  }
});


