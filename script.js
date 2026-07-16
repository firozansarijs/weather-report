const cityName = document.querySelector(".city h1");
const weatherIcon = document.querySelector(".weather-icon");
const body = document.querySelector("body");
const temp = document.querySelector(".temp");
const sun = document.querySelector(".cond");
const hum = document.querySelector(".detail-1 p");
const win = document.querySelector(".detail-2 p");

const search = document.querySelector(".search-container input");

search.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    const city = search.value.trim();

    if (city === "") {
      return;
    }

    const url = ` https://api.weatherapi.com/v1/current.json?key=27bf9a2ad17b47d6b92174842262906&q=${city}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        if (data.error) {
          cityName.textContent = "City not found";
          return;
        }

        weatherIcon.src = `https:${data.current.condition.icon}`;
        cityName.textContent = data.location.name;
        temp.textContent = `${data.current.temp_c}°C`;
        sun.textContent = data.current.condition.text;
        hum.textContent = `${data.current.humidity}%`;
        win.textContent = `${data.current.wind_kph} km/h`;

        const condition = data.current.condition.text.toLowerCase();
        const isDay = data.current.is_day;

        if (condition.includes("rain")) {
          body.style.backgroundImage = "url('https://imgs.search.brave.com/nSKzv5iT7u0UA4NwwLqEWuzpl5p-y1Xn62J1_pykzdk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjkx/NzYxNjE0L3Bob3Rv/L3VtYnJlbGxhLWlu/LXRoZS1yYWluLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1J/Z3NuZVo5SzJUZHJD/dW5jdHpDdlQ0ajJL/YzNXbXM3dVBoZURu/R3Z2aFE0PQ')";
        } 
        else if (condition.includes("thunder")) {
          body.style.backgroundImage = "url('https://imgs.search.brave.com/T1s8_rN_wha_aUiMLEKiaNbedNsvfJu1gpHf4T89cpM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/MDUwNDg1OC9waG90/by9saWdodG5pbmct/ZHVyaW5nLXN1bW1l/ci1zdG9ybS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9M1VO/aGtfZWF0XzN4dFJV/amNPRXZmREFqQXlV/aVljZEtUNHF1Q2tW/aUhKbz0')";
        } 
        else if (condition.includes("snow")) {
          body.style.backgroundImage = "url('https://imgs.search.brave.com/AtUiwZsccsW2RHaEQxMij0_kcweAGC7H9KpUmTtBd0M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/NDMwMzk2L3Bob3Rv/L3NtYWxsLWNvdmVy/ZWQtaW4tc25vdy1w/YXJrZWQtb24tdGhl/LXN0cmVldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Q2E2/ZFhnVmRLbHhnMlha/RFNieWpZc2l0SEl2/bWptXzR4UjlBVkVt/VFlJaz0')";
        } 
        else if (condition.includes("cloud")) {
          body.style.backgroundImage = "url('https://imgs.search.brave.com/zysjpl8yUU70H6FtDX2gYpo8QiTbx6P7u33BzIfqCmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjA1/MzEyNDcvcGV4ZWxz/LXBob3RvLTIwNTMx/MjQ3L2ZyZWUtcGhv/dG8tb2YtbWFqZXN0/aWMtc3Rvcm0tY2xv/dWRzLmpwZWc_Y3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA')";
        } 
        else if (isDay === 0) {
          body.style.backgroundImage = "url('https://imgs.search.brave.com/TlluHUKqZlOIP-nrg0FGLG6FC14VjZvCMAz5Tu_GzP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA4Lzk5LzA3/LzM2MF9GXzEwODk5/MDcyNF9kb2hsRndp/UWZZOFFrZ2wxUVlQ/eUw2eHZLc1FOSk14/bi5qcGc')";
        } 
        else {
          body.style.backgroundImage = "url('https://imgs.search.brave.com/rCEoLDlvmLwJapSk267CwSam61qXuRD153Q15UAUcGA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NTA1MjM5My9waG90/by9zdW4tc2t5LWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTBq/VEhDdm1zamhtTWlw/am9PM2ZWd0FMck5S/Xy1aWnFnWE9tSWRo/OThMV2M9')";
        }

        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";
      })
      .catch(() => {
        cityName.textContent = "Something went wrong";
      });
  }
});
