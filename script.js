const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=27bf9a2ad17b47d6b92174842262906&q=search.value`;
const card = document.querySelector(".weather-card");
    
const search = document.querySelector(".search-container input");
search.addEventListener("keydown", (evt) => {
   if(evt.key === "Enter"){
      const city = search.value;
  const url = `https://api.weatherapi.com/v1/current.json?key=27bf9a2ad17b47d6b92174842262906&q=${city}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
         console.log(data.location.name);
         console.log(data.current.temp_c);
         console.log(data.current.condition.text);
         console.log(data.current.humidity);
         console.log(data.current.wind_kph);
      });
  }
});


