// async function fetchDataAndDisplay() {
//     try {
//         const response = await fetch("https://restcountries.com/v3.1/all");
//         const data1 = await response.json();
//         foo(data1);
//     } catch (error) {
//         console.log("Error fetching data:", error);
//     }
// }

// async function foo(data1) {
//     const container = document.createElement("div");
//     container.className = "container";
    
//     const row = document.createElement("div");
//     row.className = "row row-cols-1 row-cols-md-3 gx-4"; 
    
//     data1.forEach(country => {
//         const col = document.createElement("div");
//         col.className = "col mb-4"; 
//         col.innerHTML = `<div class="card border-primary h-100">
//             <div class="card-header">${country.name.common}</div>
//             <div class="card-body text-primary d-flex flex-column">
//                 <img src="${country.flags.svg}" class="img-fluid mb-2" style="max-height: 150px; width: auto;" alt="Flag">
//                 <h5 class="card-title">Capital: ${country.capital}</h5>
//                 <p class="card-text">Region: ${country.region}</p>
//                 <p class="card-text">Country Code: ${country.cca2}</p>
//                 <p class="card-text">Population: ${country.population}</p>
//                 <button class="btn btn-primary mt-auto" onclick="getWeather('${country.name.common}')">Click for Weather Data</button>
//             </div>
//         </div>`;
//         row.appendChild(col);
//     });
    
//     container.appendChild(row);
//     document.body.appendChild(container);
    
// }

// fetchDataAndDisplay();



async function fetchDataAndDisplay() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data1 = await response.json();
        foo(data1);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

async function foo(data1) {
    const container = document.createElement("div");
    container.className = "container";

    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-md-3 gx-4";

    data1.forEach(country => {
        const col = document.createElement("div");
        col.className = "col mb-4";
        col.innerHTML = `<div class="card border-primary h-100">
            <div class="card-header">${country.name.common}</div>
            <div class="card-body text-primary d-flex flex-column">
                <img src="${country.flags.svg}" class="img-fluid mb-2" style="max-height: 150px; width: auto;" alt="Flag">
                <h5 class="card-title">Capital: ${country.capital}</h5>
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Country Code: ${country.cca2}</p>
                <p class="card-text">Population: ${country.population}</p>
                <p class="card-text">Latitude: ${country.latlng[0]}</p>
                <p class="card-text">Longitude: ${country.latlng[1]}</p>
                <button class="btn btn-primary mt-auto" onclick="getWeather('${country.name.common}', ${country.latlng[0]}, ${country.latlng[1]})">Click for Weather Data</button>
            </div>
        </div>`;
        row.appendChild(col);
    });

    container.appendChild(row);
    document.body.appendChild(container);
}

async function getWeather(countryName, lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=23f04cb3fe3a2337ea1dcd4a5cd1718e`);
        const weatherData = await response.json();
        const temperature = weatherData.main.temp;
        alert(`Temperature in ${countryName}: ${temperature} Kelvin`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchDataAndDisplay();
