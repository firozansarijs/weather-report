const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=27bf9a2ad17b47d6b92174842262906&q=@latest";

const search = document.querySelector(".search-container input");

search.addEventListener("keydown", (evt) => {
   if(evt.key === "Enter"){
    const city = search.value;
    console.log(city);
   }
})
